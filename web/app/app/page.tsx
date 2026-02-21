"use client";

import React, { useState, useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { TabBar } from "@/components/TabBar";
import { HomeContextCard } from "@/components/chat/HomeContextCard";
import { MessageBubble } from "@/components/chat/MessageBubble";
import { ChatInput } from "@/components/chat/ChatInput";
import { storage } from "@/lib/storage";
import { generateMockResponse, defaultHomeProfile } from "@/lib/mockData";
import { Message, HomeProfile } from "@/types";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [homeProfile, setHomeProfile] = useState<HomeProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load data from localStorage
    const savedMessages = storage.getMessages();
    const savedProfile = storage.getHomeProfile();

    if (savedMessages.length > 0) {
      setMessages(savedMessages);
    } else {
      // Add welcome message
      const welcomeMessage: Message = {
        id: "welcome",
        sender: "zeke",
        content: "Hi! I'm Zeke, your AI homeowner assistant. I'm here to help you with any questions about your home maintenance, repairs, and homeownership. What can I help you with today?",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
      storage.saveMessages([welcomeMessage]);
    }

    if (savedProfile) {
      setHomeProfile(savedProfile);
    } else {
      // Set default profile for demo purposes
      setHomeProfile(defaultHomeProfile);
      storage.saveHomeProfile(defaultHomeProfile);
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    storage.saveMessages(updatedMessages);

    // Show loading state
    setIsLoading(true);

    try {
      // Call the real API
      // Filter out welcome message and only include actual conversation
      const conversationMessages = updatedMessages
        .filter(msg => msg.id !== 'welcome')
        .map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.content.trim(), // Ensure no empty content
        }))
        .filter(msg => msg.content.length > 0); // Remove any empty messages

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: conversationMessages,
          homeProfile: homeProfile,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      // Read the streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let aiResponseContent = '';

      // Create AI message that we'll update as we stream
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "zeke",
        content: "",
        timestamp: new Date(),
      };

      if (reader) {
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          // Decode the chunk and add to buffer
          buffer += decoder.decode(value, { stream: true });

          // Process complete lines
          const lines = buffer.split('\n');
          // Keep the last incomplete line in the buffer
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.startsWith('0:')) {
              // Extract the text content from the stream (Vercel AI SDK format)
              const text = line.slice(2).replace(/^"|"$/g, '');
              aiResponseContent += text;
            } else if (line.trim() && !line.startsWith('d:')) {
              // Fallback: treat any non-empty line that's not metadata as content
              aiResponseContent += line;
            }
          }

          // Update the message with accumulated content
          if (aiResponseContent) {
            aiMessage.content = aiResponseContent;
            const messagesWithAI = [...updatedMessages, aiMessage];
            setMessages(messagesWithAI);
          }
        }
      }

      // Save final messages
      const finalMessages = [...updatedMessages, aiMessage];
      storage.saveMessages(finalMessages);
      setIsLoading(false);
    } catch (error) {
      console.error('Error calling chat API:', error);
      // Fall back to mock response on error
      const aiResponse = generateMockResponse(content);
      const finalMessages = [...updatedMessages, aiResponse];
      setMessages(finalMessages);
      storage.saveMessages(finalMessages);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header title="Zeke" showBack={false} showSettings={true} />

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-20">
        <HomeContextCard profile={homeProfile} />

        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="pb-16">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>

      <TabBar />
    </div>
  );
}
