"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { TabBar } from "@/components/TabBar";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { SystemCard } from "@/components/home/SystemCard";
import { SystemForm } from "@/components/home/SystemForm";
import { storage } from "@/lib/storage";
import { defaultHomeProfile } from "@/lib/mockData";
import { HomeProfile, HomeSystem } from "@/types";
import { Home, Edit2, Plus, FileText } from "lucide-react";

export default function HomePage() {
  const [profile, setProfile] = useState<HomeProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingSystem, setEditingSystem] = useState<HomeSystem | null>(null);
  const [showSystemForm, setShowSystemForm] = useState(false);

  useEffect(() => {
    const savedProfile = storage.getHomeProfile();
    if (savedProfile) {
      setProfile(savedProfile);
    } else {
      setProfile(defaultHomeProfile);
      storage.saveHomeProfile(defaultHomeProfile);
    }
  }, []);

  const handleSaveSystem = (system: HomeSystem) => {
    if (!profile) return;

    const updatedSystems = editingSystem
      ? profile.systems.map((s) => (s.id === system.id ? system : s))
      : [...profile.systems, system];

    const updatedProfile = { ...profile, systems: updatedSystems };
    setProfile(updatedProfile);
    storage.saveHomeProfile(updatedProfile);
    setShowSystemForm(false);
    setEditingSystem(null);
  };

  const handleDeleteSystem = () => {
    if (!profile || !editingSystem) return;

    const updatedSystems = profile.systems.filter((s) => s.id !== editingSystem.id);
    const updatedProfile = { ...profile, systems: updatedSystems };
    setProfile(updatedProfile);
    storage.saveHomeProfile(updatedProfile);
    setShowSystemForm(false);
    setEditingSystem(null);
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  if (showSystemForm) {
    return (
      <div className="flex flex-col h-screen bg-background">
        <Header
          title={editingSystem ? "Edit System" : "Add System"}
          showBack={true}
          showSettings={false}
          onBack={() => {
            setShowSystemForm(false);
            setEditingSystem(null);
          }}
        />
        <div className="flex-1 overflow-y-auto px-4 py-4 pb-20">
          <SystemForm
            system={editingSystem || undefined}
            onSave={handleSaveSystem}
            onCancel={() => {
              setShowSystemForm(false);
              setEditingSystem(null);
            }}
            onDelete={editingSystem ? handleDeleteSystem : undefined}
          />
        </div>
        <TabBar />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header title="My Home" showBack={false} showSettings={true} />

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-20">
        {/* Home Overview Card */}
        <Card className="p-5 mb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div className="p-3 bg-primary-light/20 rounded-lg mr-3">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-text-primary">
                  {profile.address}
                </h2>
                <p className="text-sm text-text-secondary">
                  {profile.city}, {profile.state} {profile.zip}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Edit2 className="w-4 h-4 text-text-secondary" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-text-secondary">
            <span>
              {profile.homeType} • Built {profile.yearBuilt}
            </span>
            <span>•</span>
            <span>
              {profile.squareFeet.toLocaleString()} sq ft • {profile.bedrooms} bed,{" "}
              {profile.bathrooms} bath
            </span>
          </div>
        </Card>

        {/* Systems Section */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
            SYSTEMS
          </h3>

          {profile.systems.map((system) => (
            <SystemCard
              key={system.id}
              system={system}
              onClick={() => {
                setEditingSystem(system);
                setShowSystemForm(true);
              }}
            />
          ))}

          <button
            onClick={() => {
              setEditingSystem(null);
              setShowSystemForm(true);
            }}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors py-2 font-medium"
          >
            <Plus className="w-4 h-4" />
            <span>Add another system</span>
          </button>
        </div>

        {/* Documents Section */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
            DOCUMENTS
          </h3>

          {profile.documents.length > 0 ? (
            profile.documents.map((doc) => (
              <Card key={doc.id} className="p-4 mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {doc.name}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {new Date(doc.uploadedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-4 mb-3">
              <p className="text-sm text-text-secondary text-center">
                No documents uploaded yet
              </p>
            </Card>
          )}

          <button className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors py-2 font-medium">
            <Plus className="w-4 h-4" />
            <span>Upload document</span>
          </button>
        </div>
      </div>

      <TabBar />
    </div>
  );
}
