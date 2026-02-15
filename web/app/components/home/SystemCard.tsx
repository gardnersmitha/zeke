import React from "react";
import { Card } from "../Card";
import { HomeSystem } from "@/types";
import { Flame, Snowflake, Droplet, Home as HomeIcon, Zap, Wrench, ChevronRight } from "lucide-react";

interface SystemCardProps {
  system: HomeSystem;
  onClick: () => void;
}

export const SystemCard: React.FC<SystemCardProps> = ({ system, onClick }) => {
  const icons = {
    heating: Flame,
    cooling: Snowflake,
    "water-heater": Droplet,
    roof: HomeIcon,
    plumbing: Droplet,
    electrical: Zap,
    other: Wrench,
  };

  const Icon = icons[system.category];
  const currentYear = new Date().getFullYear();
  const age = system.installedYear ? currentYear - system.installedYear : null;

  const conditionConfig = {
    good: { text: "Good condition", color: "text-success", icon: "✓" },
    aging: { text: "Consider tune-up", color: "text-warning", icon: "⚠️" },
    issue: { text: "Needs attention", color: "text-error", icon: "🔴" },
  };

  const condition = conditionConfig[system.condition];

  return (
    <Card className="p-4 mb-3" onClick={onClick}>
      <div className="flex items-start justify-between">
        <div className="flex items-start flex-1">
          <div className="p-2 bg-primary-light/20 rounded-lg mr-3 flex-shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-text-primary mb-1">
              {system.name}
            </h3>
            {(system.brand || system.model) && (
              <p className="text-sm text-text-secondary mb-1">
                {system.model} {system.brand && `• ${system.brand}`}
              </p>
            )}
            {age !== null && (
              <p className="text-sm text-text-secondary mb-1">
                Installed ~{system.installedYear} ({age} years)
              </p>
            )}
            <div className="flex items-center gap-1">
              <span className="text-sm">{condition.icon}</span>
              <span className={`text-sm font-medium ${condition.color}`}>
                {condition.text}
              </span>
            </div>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-text-secondary flex-shrink-0 mt-1" />
      </div>
    </Card>
  );
};
