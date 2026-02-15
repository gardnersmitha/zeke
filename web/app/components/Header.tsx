"use client";

import React from "react";
import { ChevronLeft, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showSettings?: boolean;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  showSettings = true,
  onBack,
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center flex-1">
        {showBack && (
          <button
            onClick={handleBack}
            className="mr-3 p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-text-primary" />
          </button>
        )}
        <h1 className="text-xl font-semibold text-text-primary">{title}</h1>
      </div>
      {showSettings && (
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-text-secondary" />
        </button>
      )}
    </header>
  );
};
