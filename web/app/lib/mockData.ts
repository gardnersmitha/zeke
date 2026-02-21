import { HomeProfile, Message, ResponseCard } from "@/types";

// Helper function to auto-detect metadata from response cards and content
const detectResponseMetadata = (
  content: string,
  cards?: ResponseCard[]
): Message['metadata'] => {
  const metadata: Message['metadata'] = {
    hasActionableTask: false,
    hasProRecommendation: false,
    hasProductRecommendation: false,
  };

  // Check for actionable keywords in content
  const actionableKeywords = [
    'should', 'recommend', 'need to', 'fix', 'repair', 'replace',
    'install', 'check', 'inspect', 'maintain', 'clean', 'prevent'
  ];
  metadata.hasActionableTask = actionableKeywords.some(keyword =>
    content.toLowerCase().includes(keyword)
  );

  // Check response cards for pro and product recommendations
  if (cards && cards.length > 0) {
    metadata.hasProRecommendation = cards.some(card => card.type === 'pro');
    metadata.hasProductRecommendation = cards.some(card =>
      card.type === 'product' || card.type === 'diy'
    );
  }

  return metadata;
};

export const defaultHomeProfile: HomeProfile = {
  id: "1",
  address: "123 Main Street",
  city: "Hingham",
  state: "MA",
  zip: "02043",
  homeType: "Colonial",
  yearBuilt: 1985,
  squareFeet: 2400,
  bedrooms: 4,
  bathrooms: 2.5,
  systems: [
    {
      id: "1",
      category: "heating",
      name: "Heating",
      brand: "Carrier",
      model: "Gas Furnace",
      installedYear: 2012,
      condition: "aging",
      notes: "Consider tune-up",
    },
    {
      id: "2",
      category: "cooling",
      name: "Cooling",
      brand: "Lennox",
      model: "Central AC",
      installedYear: 2012,
      condition: "good",
    },
    {
      id: "3",
      category: "water-heater",
      name: "Water Heater",
      brand: "AO Smith",
      model: "Tank - 50 gal",
      installedYear: 2018,
      condition: "good",
    },
    {
      id: "4",
      category: "roof",
      name: "Roof",
      brand: "Asphalt Shingle",
      installedYear: 2015,
      condition: "good",
    },
  ],
  documents: [],
};

export const generateMockResponse = (question: string): Message => {
  const responses: { [key: string]: { content: string; cards?: ResponseCard[]; metadata?: Message['metadata'] } } = {
    "ice dam": {
      content: `Ice dams are common in Hingham, especially on colonials like yours. Here's what causes them and how to prevent them:

**Why it happens:**
Heat escapes through your roof, melts snow, which then refreezes at the edge causing ice buildup. This can damage your roof and gutters.

**Prevention options:**`,
      cards: [
        {
          type: "diy",
          title: "DIY: Heat Cables",
          description: "Easy install, prevents ice buildup",
          price: "$45-80",
          link: "https://amazon.com",
        },
        {
          type: "pro",
          title: "Pro: Insulation Upgrade",
          description: "Fixes root cause, improves efficiency",
          price: "$800-2,000",
          link: "#pros",
        },
      ],
      metadata: {
        hasActionableTask: true,
        hasProRecommendation: true,
        hasProductRecommendation: true,
      },
    },
    default: {
      content: `That's a great question! Based on your 1985 Colonial in Hingham, MA, I'd recommend a few approaches.

I can help you understand this better and connect you with local professionals who specialize in homes like yours. Would you like me to elaborate on any specific aspect?`,
    },
  };

  const matchedKey = Object.keys(responses).find((key) =>
    question.toLowerCase().includes(key.toLowerCase())
  );

  const response = matchedKey ? responses[matchedKey] : responses.default;

  // Auto-detect metadata if not explicitly provided
  const metadata = response.metadata || detectResponseMetadata(response.content, response.cards);

  return {
    id: Date.now().toString(),
    sender: "zeke",
    content: response.content,
    timestamp: new Date(),
    responseCards: response.cards,
    metadata,
  };
};
