import React from "react";
import { Message } from "@/types";
import { ResponseCardComponent } from "./ResponseCard";

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === "user";
  const time = new Date(message.timestamp).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`max-w-[85%] ${isUser ? "order-2" : "order-1"}`}>
        <div
          className={`rounded-2xl px-4 py-2 ${
            isUser
              ? "bg-primary text-white rounded-tr-sm"
              : "bg-white border border-gray-200 rounded-tl-sm"
          }`}
        >
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs font-medium">
              {isUser ? "You" : "Zeke"}
            </span>
            <span className={`text-xs ${isUser ? "text-white/70" : "text-text-secondary"}`}>
              {time}
            </span>
          </div>
          <div className={`text-[15px] leading-relaxed whitespace-pre-wrap ${isUser ? "text-white" : "text-text-primary"}`}>
            {message.content}
          </div>
        </div>

        {/* Response Cards */}
        {message.responseCards && message.responseCards.length > 0 && (
          <div className="mt-3 space-y-2">
            {message.responseCards.map((card, index) => (
              <ResponseCardComponent key={index} card={card} />
            ))}
          </div>
        )}

        {/* Feedback Actions (only for Zeke messages) */}
        {!isUser && (
          <div className="flex items-center gap-3 mt-2 px-2">
            <button className="text-text-secondary hover:text-primary transition-colors">
              <span className="text-lg">👍</span>
            </button>
            <button className="text-text-secondary hover:text-primary transition-colors">
              <span className="text-lg">👎</span>
            </button>
            <button className="text-sm text-primary hover:text-primary-dark transition-colors font-medium ml-2">
              Save to Tasks
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
