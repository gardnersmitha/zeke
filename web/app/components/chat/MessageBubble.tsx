import React, { useState } from "react";
import { Message } from "@/types";
import { ResponseCardComponent } from "./ResponseCard";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isUser = message.sender === "user";
  const time = new Date(message.timestamp).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[85%] ${isUser ? "order-2" : "order-1"}`}
        onMouseEnter={() => !isUser && setIsHovered(true)}
        onMouseLeave={() => !isUser && setIsHovered(false)}
      >
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

        {/* Feedback and Action Buttons (only for Zeke messages) - Show on hover */}
        {!isUser && (
          <div
            className={`flex items-center gap-2 mt-2 px-2 transition-opacity duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              className="p-1 text-text-secondary hover:text-green-600 transition-colors"
              title="Helpful"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </button>
            <button
              className="p-1 text-text-secondary hover:text-red-600 transition-colors"
              title="Not helpful"
            >
              <ThumbsDown className="w-3.5 h-3.5" />
            </button>

            {/* Conditional Action Buttons based on response metadata */}
            {message.metadata?.hasActionableTask && (
              <button className="text-xs text-text-secondary hover:text-primary transition-colors font-medium ml-1">
                Save to Tasks
              </button>
            )}
            {message.metadata?.hasProRecommendation && (
              <button className="text-xs text-text-secondary hover:text-primary transition-colors font-medium ml-1">
                View Pros
              </button>
            )}
            {message.metadata?.hasProductRecommendation && (
              <button className="text-xs text-text-secondary hover:text-primary transition-colors font-medium ml-1">
                View Product
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
