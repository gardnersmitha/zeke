"use client";

import { HomeProfile, Message } from "@/types";

const STORAGE_KEYS = {
  HOME_PROFILE: "zeke_home_profile",
  MESSAGES: "zeke_messages",
};

export const storage = {
  getHomeProfile: (): HomeProfile | null => {
    if (typeof window === "undefined") return null;
    const data = localStorage.getItem(STORAGE_KEYS.HOME_PROFILE);
    return data ? JSON.parse(data) : null;
  },

  saveHomeProfile: (profile: HomeProfile): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEYS.HOME_PROFILE, JSON.stringify(profile));
  },

  getMessages: (): Message[] => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    return data ? JSON.parse(data) : [];
  },

  saveMessages: (messages: Message[]): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  },

  clearAll: (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEYS.HOME_PROFILE);
    localStorage.removeItem(STORAGE_KEYS.MESSAGES);
  },
};
