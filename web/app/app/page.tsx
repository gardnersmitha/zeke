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

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = generateMockResponse(content);
      const finalMessages = [...updatedMessages, aiResponse];
      setMessages(finalMessages);
      storage.saveMessages(finalMessages);
      setIsLoading(false);
    }, 1000);
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
