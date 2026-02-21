"use client";

import React from "react";
import { HomeProfile } from "@/types";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

interface MiniHomeProfileProps {
  profile: HomeProfile | null;
}

export const MiniHomeProfile: React.FC<MiniHomeProfileProps> = ({ profile }) => {
  const router = useRouter();

  if (!profile) {
    return null;
  }

  return (
    <div
      className="fixed top-14 left-0 right-0 z-20 bg-white border-b border-gray-200 shadow-sm cursor-pointer"
      onClick={() => router.push("/home")}
    >
      <div className="flex items-center gap-2 px-4 py-2 max-w-md mx-auto">
        <Home className="w-4 h-4 text-primary flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-text-primary truncate">
            {profile.yearBuilt} {profile.homeType} • {profile.city}, {profile.state}
          </p>
        </div>
      </div>
    </div>
  );
};
