'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pricingPlans = {
  monthly: [
    {
      name: "Starter",
      price: "1,500",
      description: "For individuals and freelancers",
      features: [
        "Unlimited invoices",
        "Basic reporting",
        "Up to 5 clients",
        "Payment processing",
      ],
      buttonText: "Start free trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "5,000",
      description: "For growing small businesses",
      features: [
        "AI assistant",
        "Track monthly expenses",
        "Unlimited invoices",
        "Basic reporting",
        "More than 5 clients",
        "Payment processing",
      ],
      buttonText: "Try 7 days for free",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "8,000",
      description: "For Large teams with advanced needs",
      features: [
        "AI assistant",
        "Track monthly expenses",
        "Unlimited invoices",
        "Advanced reporting",
        "Unlimited Clients",
        "Payment processing",
      ],
      buttonText: "Start free trial",
      popular: false,
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "15,000",
      description: "For individuals and freelancers",
      features: [
        "Unlimited invoices",
        "Basic reporting",
        "Up to 5 clients",
        "Payment processing",
      ],
      buttonText: "Start free trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "50,000",
      description: "For growing small businesses",
      features: [
        "AI assistant",
        "Track monthly expenses",
        "Unlimited invoices",
        "Basic reporting",
        "More than 5 clients",
        "Payment processing",
      ],
      buttonText: "Try 7 days for free",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "80,000",
      description: "For Large teams with advanced needs",
      features: [
        "AI assistant",
        "Track monthly expenses",
        "Unlimited invoices",
        "Advanced reporting",
        "Unlimited Clients",
        "Payment processing",
      ],
      buttonText: "Start free trial",
      popular: false,
    },
  ]
};

const CheckIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8.5 12.5L10.5 14.5L15.5 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2H2V6H6V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2H10V6H14V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 10H10V14H14V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 10H2V14H6V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="bg-[#f8fafc] py-24 lg:py-32">
      <div className="mx-auto max-w-[1204px] px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-8">
              <span className="text-blue-600"><GridIcon /></span>
              <span className="text-sm font-medium text-gray-600">Our Pricing</span>
            </div>

            <h2 className="text-[42px] font-bold leading-tight text-slate-900 mb-4">
              Simple plans that grow with you
            </h2>
            <p className="text-lg text-slate-500 mb-10">
              Choose the plan that fits your business. No hidden fees, no long contracts.
            </p>

            <div className="inline-flex p-1 bg-gray-100 rounded-full mb-16">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly'
                    ? "bg-[#2e58d1] text-white shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${billingCycle === 'yearly'
                    ? "bg-[#2e58d1] text-white shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                Yearly
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingPlans[billingCycle].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-[24px] transition-all ${plan.popular
                  ? "bg-[#254bdb] text-white shadow-2xl scale-105 z-10 p-[2px] ring-1 ring-blue-600"
                  : "bg-white border border-gray-100 p-8 shadow-sm"
                }`}
            >
              {plan.popular ? (
                <div className="flex flex-col p-8 h-full bg-[#254bdb] rounded-[22px]">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-semibold opacity-90">{plan.name}</h3>
                    <div className="rounded-full bg-[#fcd34d] px-4 py-1.5 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider shadow-sm">
                      Popular
                    </div>
                  </div>

                  <div className="mb-6 flex items-baseline border-b border-white/10 pb-6">
                    <span className="text-[40px] font-bold">₦{plan.price}</span>
                    <span className="text-white/60 text-lg ml-1 font-medium">/month</span>
                  </div>

                  <p className="text-white/80 text-sm mb-8 h-10">
                    {plan.description}
                  </p>

                  <ul className="space-y-4 mb-10 grow">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <span className="text-white opacity-80 shrink-0">
                          <CheckIcon />
                        </span>
                        <span className="text-[15px] opacity-90 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#254bdb] transition-all hover:bg-gray-50 shadow-lg shadow-blue-900/20">
                    {plan.buttonText}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-8 border-b border-gray-100 pb-6">
                      <span className="text-[40px] font-bold text-slate-900">₦{plan.price}</span>
                      <span className="text-slate-400 text-lg ml-1 font-medium">/month</span>
                    </div>
                    <p className="text-slate-400 text-sm h-10 font-medium">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-10 grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3">
                          <span className="text-slate-400 shrink-0">
                            <CheckIcon />
                          </span>
                          <span className="text-[15px] text-slate-500 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full rounded-xl px-6 py-4 text-sm font-bold bg-[#2e58d1] text-white transition-all hover:bg-blue-700 shadow-md shadow-blue-200">
                    {plan.buttonText}
                  </button>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


