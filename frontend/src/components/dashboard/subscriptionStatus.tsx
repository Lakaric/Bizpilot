"use client";

import React, { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

interface SubscriptionData {
  id: string;
  status: string;
  trialEnd: string | null;
  plan: {
    name: string;
    slug: string;
    isFree: boolean;
  };
  billingInterval: string | null;
}

export default function SubscriptionStatus() {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<{ data: SubscriptionData }>("/api/v1/subscriptions/me")
      .then((res) => {
        setSubscription(res?.data?.data || null);
      })
      .catch((err) => {
        setError(err.message);
        setSubscription(null);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  if (error || !subscription) return null;

  const isTrial = subscription.status === "TRIAL" && subscription.trialEnd;
  const trialEndDate = subscription.trialEnd
    ? new Date(subscription.trialEnd)
    : null;
  const trialDaysLeft = trialEndDate
    ? Math.ceil((trialEndDate.getTime() - Date.now()) / (24 * 60 * 60 * 1000))
    : 0;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm">
      <span className="font-medium">{subscription.plan.name}</span>
      {isTrial && trialDaysLeft > 0 && (
        <span className="text-amber-600">
          • {trialDaysLeft} day{trialDaysLeft !== 1 ? "s" : ""} left in trial
        </span>
      )}
      {!subscription.plan.isFree && (
        <a href="/#pricing" className="text-blue-600 hover:underline ml-1">
          Manage
        </a>
      )}
    </div>
  );
}
