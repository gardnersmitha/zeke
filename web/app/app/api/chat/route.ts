import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

// Types for request body
interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  homeProfile?: {
    address: string;
    city: string;
    state: string;
    zip: string;
    homeType: string;
    yearBuilt: number;
    squareFeet: number;
    bedrooms: number;
    bathrooms: number;
    systems: Array<{
      category: string;
      name: string;
      brand?: string;
      model?: string;
      installedYear?: number;
      condition: string;
      notes?: string;
    }>;
  };
}

// Configure AI provider based on environment variables
function getAIModel() {
  const provider = process.env.AI_PROVIDER || 'openai';

  if (provider === 'anthropic') {
    const anthropic = createAnthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
    // Use Claude 3 Haiku - fast and cost-effective
    return anthropic('claude-3-haiku-20240307');
  }

  // Default to OpenAI
  const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  return openai('gpt-4-turbo-preview');
}

// Create system prompt with home context
function createSystemPrompt(homeProfile?: ChatRequest['homeProfile']): string {
  const basePrompt = `You are Zeke, a helpful AI assistant for homeowners. You provide expert advice on home maintenance, repairs, and homeownership. You are knowledgeable, friendly, and practical.

Your responses should:
- Be concise and actionable
- Provide specific recommendations when possible
- Consider local climate and home characteristics
- Offer both DIY and professional service options when appropriate
- Be encouraging and supportive`;

  if (!homeProfile) {
    return basePrompt;
  }

  const systemsInfo = homeProfile.systems
    .map(
      (s) =>
        `- ${s.name}: ${s.brand || 'Unknown brand'} ${s.model || ''}, installed ${s.installedYear || 'unknown'}, condition: ${s.condition}${s.notes ? ` (${s.notes})` : ''}`
    )
    .join('\n');

  return `${basePrompt}

**USER'S HOME CONTEXT:**
Address: ${homeProfile.address}, ${homeProfile.city}, ${homeProfile.state} ${homeProfile.zip}
Home Type: ${homeProfile.homeType}
Built: ${homeProfile.yearBuilt}
Size: ${homeProfile.squareFeet.toLocaleString()} sq ft
Bedrooms: ${homeProfile.bedrooms}, Bathrooms: ${homeProfile.bathrooms}

**HOME SYSTEMS:**
${systemsInfo}

Use this context to provide personalized recommendations. Reference specific systems when relevant to the user's questions.`;
}

// Parse response for actionable items
function parseResponseMetadata(text: string) {
  const metadata: {
    hasTasks: boolean;
    hasProRecommendation: boolean;
    hasProductRecommendation: boolean;
  } = {
    hasTasks: false,
    hasProRecommendation: false,
    hasProductRecommendation: false,
  };

  const lowerText = text.toLowerCase();

  // Check for task indicators
  const taskIndicators = [
    'should check',
    'you can',
    'i recommend',
    'consider doing',
    'steps to',
    'here\'s what to do',
    'maintenance task',
  ];
  metadata.hasTasks = taskIndicators.some((indicator) =>
    lowerText.includes(indicator)
  );

  // Check for pro service indicators
  const proIndicators = [
    'professional',
    'contractor',
    'plumber',
    'electrician',
    'hvac tech',
    'specialist',
    'licensed',
    'certified',
    'hire',
  ];
  metadata.hasProRecommendation = proIndicators.some((indicator) =>
    lowerText.includes(indicator)
  );

  // Check for product indicators
  const productIndicators = [
    'product',
    'purchase',
    'buy',
    'equipment',
    'material',
    'tool',
    'supplies',
    'item',
  ];
  metadata.hasProductRecommendation = productIndicators.some((indicator) =>
    lowerText.includes(indicator)
  );

  return metadata;
}

export async function POST(req: NextRequest) {
  try {
    const body: ChatRequest = await req.json();
    const { messages, homeProfile } = body;

    if (!messages || messages.length === 0) {
      return new Response('Messages are required', { status: 400 });
    }

    // Get AI model
    const model = getAIModel();

    // Create system prompt with home context
    const systemPrompt = createSystemPrompt(homeProfile);

    // Stream the response
    const result = await streamText({
      model,
      system: systemPrompt,
      messages,
    });

    // Return the streaming response
    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({
        error: 'An error occurred while processing your request',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
