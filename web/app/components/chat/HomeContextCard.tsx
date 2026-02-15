"use client";

import React from "react";
import { Card } from "../Card";
import { HomeProfile } from "@/types";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

interface HomeContextCardProps {
  profile: HomeProfile | null;
}

export const HomeContextCard: React.FC<HomeContextCardProps> = ({ profile }) => {
  const router = useRouter();

  if (!profile) {
    return (
      <Card className="p-4 mb-4" onClick={() => router.push("/home")}>
        <div className="flex items-center">
          <Home className="w-5 h-5 text-primary mr-2" />
          <div>
            <p className="text-sm font-medium text-text-primary">
              Set up your home profile
            </p>
            <p className="text-xs text-text-secondary">
              Tap to add your home details
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 mb-4" onClick={() => router.push("/home")}>
      <div className="flex items-center">
        <Home className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-text-primary">
            {profile.yearBuilt} {profile.homeType} • {profile.city}, {profile.state}
          </p>
          <p className="text-xs text-text-secondary mt-0.5">
            &quot;Ask me anything about your home - I&apos;m here to help!&quot;
          </p>
        </div>
      </div>
    </Card>
  );
};
