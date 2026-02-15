/**
 * Utility functions for the Zeke app
 */

/**
 * Format a date to a readable string
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Format a timestamp to time string
 */
export function formatTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

/**
 * Calculate age from year
 */
export function calculateAge(year: number): number {
  return new Date().getFullYear() - year;
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Truncate text to a specified length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
}

/**
 * Capitalize first letter of string
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Get system icon emoji based on category
 */
export function getSystemIcon(category: string): string {
  const icons: { [key: string]: string } = {
    heating: "🔥",
    cooling: "❄️",
    "water-heater": "💧",
    roof: "🏠",
    plumbing: "🚰",
    electrical: "⚡",
    other: "🔧",
  };
  return icons[category] || "🔧";
}
