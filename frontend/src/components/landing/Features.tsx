'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "AI Smart Invoicing",
      description: "Create and send professional invoices in seconds. BizPilot automatically tracks payments, sends reminders, and helps you stay on top of client billing without the manual follow-up.",
      image: "/assets/features/smart-invoicing.png",
      reverse: true,
    },
    {
      title: "Analytics Dashboard",
      description: "See the full picture of your business at a glance. From revenue and expenses to cash flow trends, BizPilot gives you clear, visual insights that help you make confident decisions.",
      image: "/assets/features/analytics-dashboard.png",
      reverse: false,
    },
    {
      title: "Late Payment Prediction",
      description: "Get ahead of cash flow problems. BizPilot's AI analyzes client history to flag invoices at risk of delay and suggests actions you can take before payments become overdue.",
      image: "/assets/features/late-payment.png",
      reverse: true,
    },
    {
      title: "Bookkeeping Assistant",
      description: "Keep your books in order without lifting a finger. Transactions are auto-categorized, expenses organized, and reports generated instantly, making tax season and monthly close simple.",
      image: "/assets/features/bookkeeping.png",
      reverse: false,
    },
    {
      title: "BizBot (AI Assistant)",
      description: "Your personal business co-pilot. Ask for tax questions, spending insights, or even draft automated emails that guide you through everyday decisions without needing an accountant on speed dial.",
      image: "/assets/features/bizbot.png",
      reverse: true,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 bg-white overflow-hidden">
      <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center justify-center mb-4">
          <Image
            src="/assets/features/features-badge.svg"
            alt="Our Core Features"
            width={240}
            height={64}
            className="h-16 w-auto"
          />
        </div>
        <h2 className="text-[38px] font-bold tracking-tight text-slate-900 leading-[1.2] mb-4">
          Everything you need in one Platform.
        </h2>
        <p className="text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
          BizPilot handles all the heavy lifting with automation and smart insights.
        </p>
      </div>

      <div className="space-y-24">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
            <div className="w-full lg:w-1/2 max-w-xl">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                {feature.title}
              </h3>
              <p className="text-lg leading-8 text-slate-600">
                {feature.description}
              </p>
              {index === 4 && (
                <button className="mt-10 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
                  Try it for 7 days free
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
