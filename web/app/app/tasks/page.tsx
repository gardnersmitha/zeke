"use client";

import React from "react";
import { Header } from "@/components/Header";
import { TabBar } from "@/components/TabBar";
import { Card } from "@/components/Card";
import { Construction } from "lucide-react";

export default function TasksPage() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header title="My Tasks" showBack={false} showSettings={true} />

      <div className="flex-1 overflow-y-auto px-4 py-8 pb-20">
        <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto text-center">
          <div className="p-6 bg-primary-light/20 rounded-full mb-6">
            <Construction className="w-16 h-16 text-primary" />
          </div>

          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Tasks Coming Soon!
          </h2>

          <p className="text-base text-text-secondary mb-6">
            We're building out the gamified task system where you'll be able to
            complete activities, earn points, and level up your homeownership skills.
          </p>

          <Card className="w-full p-4 text-left">
            <h3 className="font-semibold text-text-primary mb-2">What to expect:</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Guided onboarding activities</li>
              <li>• Seasonal maintenance reminders</li>
              <li>• Points and progress tracking</li>
              <li>• Educational content for each task</li>
              <li>• Personalized recommendations based on your home</li>
            </ul>
          </Card>

          <p className="text-sm text-text-secondary mt-6">
            In the meantime, feel free to ask Zeke anything in the Chat tab!
          </p>
        </div>
      </div>

      <TabBar />
    </div>
  );
}
