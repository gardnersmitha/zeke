import React from "react";

export const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-primary-light border-t-primary rounded-full animate-spin mb-4"></div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: "sm" | "md" | "lg" }> = ({
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      className={`${sizeClasses[size]} border-primary-light border-t-primary rounded-full animate-spin`}
    ></div>
  );
};
