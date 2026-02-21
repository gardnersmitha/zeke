export interface HomeProfile {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  homeType: string;
  yearBuilt: number;
  squareFeet: number;
  bedrooms: number;
  bathrooms: number;
  systems: HomeSystem[];
  documents: Document[];
}

export interface HomeSystem {
  id: string;
  category: 'heating' | 'cooling' | 'water-heater' | 'roof' | 'plumbing' | 'electrical' | 'other';
  name: string;
  brand?: string;
  model?: string;
  installedYear?: number;
  condition: 'good' | 'aging' | 'issue';
  notes?: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: Date;
}

export interface Message {
  id: string;
  sender: 'user' | 'zeke';
  content: string;
  timestamp: Date;
  responseCards?: ResponseCard[];
  metadata?: {
    hasActionableTask?: boolean;
    hasProRecommendation?: boolean;
    hasProductRecommendation?: boolean;
  };
}

export interface ResponseCard {
  type: 'diy' | 'pro' | 'product' | 'content';
  title: string;
  description: string;
  price?: string;
  link?: string;
  image?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'activity' | 'reminder' | 'content' | 'purchase' | 'appointment';
  points: number;
  completed: boolean;
  completedAt?: Date;
  category: 'this-week' | 'seasonal' | 'completed';
  whySection?: string;
  howSection?: string;
  images?: string[];
  personalizedTip?: string;
}
