"use client";

import React, { useState } from "react";
import { UserPlus, Sparkles, Building, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddLeadPageProps {
  onBack?: () => void;
  onSuccess?: () => void;
}

export function AddLeadPage({ onBack, onSuccess }: AddLeadPageProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    contactEmail: "",
    jobTitle: "",
    industry: "SaaS / Software",
    pipelineStage: "Discovered",
    dealSize: "45000",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSuccess) onSuccess();
  };

  return (
    <div className="w-full p-6 md:p-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center">
            <UserPlus className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Add New Prospect & Lead</h1>
            <p className="text-sm text-neutral-500">Autonomous company intelligence & instant ICP scoring</p>
          </div>
        </div>

        {onBack && (
          <Button variant="outline" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Pipeline
          </Button>
        )}
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-neutral-900 dark:text-white">
            <Building className="h-4 w-4 text-blue-600" /> Prospect Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Company Name *</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white"
                placeholder="e.g. Acme Corp"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Contact Name *</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white"
                placeholder="e.g. Alex Morgan"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Work Email *</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white"
                placeholder="alex@company.com"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Job Title</label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white"
                placeholder="VP of Growth"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Industry</label>
              <select
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              >
                <option value="SaaS / Software">SaaS / Software</option>
                <option value="FinTech">FinTech</option>
                <option value="HealthTech">HealthTech</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Stage</label>
              <select
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white"
                value={formData.pipelineStage}
                onChange={(e) => setFormData({ ...formData, pipelineStage: e.target.value })}
              >
                <option value="Discovered">Discovered</option>
                <option value="Outreach Ready">Outreach Ready</option>
                <option value="In Conversation">In Conversation</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Estimated ACV ($)</label>
              <input
                type="number"
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white"
                value={formData.dealSize}
                onChange={(e) => setFormData({ ...formData, dealSize: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Notes & Context</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white"
              placeholder="Key intent triggers or conversation context..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-neutral-200 dark:border-neutral-800">
            {onBack && <Button type="button" variant="outline" onClick={onBack}>Cancel</Button>}
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
              <Sparkles className="h-4 w-4" /> Create & Score Prospect
            </Button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-white mb-2">⚡ Autonomous Signal Scoring</h3>
            <p className="text-xs text-neutral-500 leading-relaxed mb-3">
              SalesGenie calculates real-time headcount velocity, hiring momentum, and tech fit to give this lead an ICP score.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium text-neutral-600 dark:text-neutral-400">
              <span className="bg-white dark:bg-neutral-800 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-700">🎯 Signal Scoring</span>
              <span className="bg-white dark:bg-neutral-800 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-700">✉️ 1-Click Outreach</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLeadPage;
