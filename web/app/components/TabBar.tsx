"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, ListTodo, Home } from "lucide-react";

export const TabBar: React.FC = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "Chat", path: "/", icon: MessageCircle },
    { name: "Tasks", path: "/tasks", icon: ListTodo },
    { name: "Home", path: "/home", icon: Home },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-inset-bottom">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.path;

          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`flex flex-col items-center justify-center py-2 px-4 min-w-[80px] rounded-lg transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? "fill-primary" : ""}`} />
              <span className="text-xs font-medium">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
