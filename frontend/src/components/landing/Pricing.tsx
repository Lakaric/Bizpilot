'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for freelancers and side hustlers getting started.",
    features: [
      "Up to 5 invoices/month",
      "Basic CRM tools",
      "Manual payment tracking",
      "Community support",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$29",
    period: "/month",
    description: "For growing businesses that need automation and AI insights.",
    features: [
      "Unlimited invoices",
      "AI-powered payment predictions",
      "Full CRM & Accounting",
      "BizBot AI Assistant",
      "Priority email support",
    ],
    buttonText: "Start 7-day free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scale your business with tailored solutions and insights.",
    features: [
      "Multi-user management",
      "Custom analytics reports",
      "Priority 24/7 support",
      "Dedicated account manager",
      "API access",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-blue-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1204px] px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[38px] font-bold leading-[1.16] text-slate-900 mb-6">
              Simple, affordable pricing
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 opacity-80">
              Choose the plan that fits your business stage. No hidden fees, cancel anytime.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 transition-all hover:shadow-xl ${plan.popular
                ? "border-2 border-blue-600 bg-white ring-4 ring-blue-50/50"
                : "border border-slate-200 bg-white"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-slate-600 font-medium">{plan.period}</span>}
                </div>
                <p className="text-sm leading-relaxed text-slate-600 h-10">
                  {plan.description}
                </p>
              </div>

              <div className="mb-10 grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="mt-1 shrink-0">
                        <CheckIcon />
                      </div>
                      <span className="text-sm text-slate-700 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full rounded-lg px-6 py-4 text-sm font-semibold transition-all ${plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200"
                  : "border border-[#abbced] text-[#2e58d1] hover:bg-blue-50"
                  }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


