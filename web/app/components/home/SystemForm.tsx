"use client";

import React, { useState } from "react";
import { HomeSystem } from "@/types";
import { Input } from "../Input";
import { Button } from "../Button";

interface SystemFormProps {
  system?: HomeSystem;
  onSave: (system: HomeSystem) => void;
  onCancel: () => void;
  onDelete?: () => void;
}

export const SystemForm: React.FC<SystemFormProps> = ({
  system,
  onSave,
  onCancel,
  onDelete,
}) => {
  const [formData, setFormData] = useState<HomeSystem>(
    system || {
      id: Date.now().toString(),
      category: "other",
      name: "",
      brand: "",
      model: "",
      installedYear: undefined,
      condition: "good",
      notes: "",
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const categories = [
    { value: "heating", label: "Heating" },
    { value: "cooling", label: "Cooling" },
    { value: "water-heater", label: "Water Heater" },
    { value: "roof", label: "Roof" },
    { value: "plumbing", label: "Plumbing" },
    { value: "electrical", label: "Electrical" },
    { value: "other", label: "Other" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">
          Category
        </label>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value as HomeSystem["category"] })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <Input
        label="System Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="e.g., Heating System"
        required
      />

      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Brand"
          value={formData.brand || ""}
          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
          placeholder="e.g., Carrier"
        />

        <Input
          label="Model"
          value={formData.model || ""}
          onChange={(e) => setFormData({ ...formData, model: e.target.value })}
          placeholder="e.g., Gas Furnace"
        />
      </div>

      <Input
        label="Installed Year"
        type="number"
        value={formData.installedYear || ""}
        onChange={(e) =>
          setFormData({ ...formData, installedYear: e.target.value ? parseInt(e.target.value) : undefined })
        }
        placeholder="e.g., 2015"
        min="1900"
        max={new Date().getFullYear()}
      />

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">
          Condition
        </label>
        <select
          value={formData.condition}
          onChange={(e) =>
            setFormData({ ...formData, condition: e.target.value as HomeSystem["condition"] })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="good">✓ Good condition</option>
          <option value="aging">⚠️ Aging / needs maintenance</option>
          <option value="issue">🔴 Has issues</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">
          Notes (optional)
        </label>
        <textarea
          value={formData.notes || ""}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Any additional notes..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          rows={3}
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit" variant="primary" className="flex-1">
          Save System
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel} className="flex-1">
          Cancel
        </Button>
      </div>

      {onDelete && (
        <Button
          type="button"
          variant="ghost"
          onClick={onDelete}
          className="w-full text-error hover:bg-error/10"
        >
          Delete System
        </Button>
      )}
    </form>
  );
};
