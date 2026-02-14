'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const integrations = [
  { name: 'Zendesk', category: 'Customer Support', logo: '/assets/integrations/zendesk.svg', row: 1 },
  { name: 'Outlook Calendar', category: 'Communication', logo: '/assets/integrations/outlook.svg', row: 1 },
  { name: 'Calendly', category: 'Customer Support', logo: '/assets/integrations/calendly.svg', row: 1 },
  { name: 'Gmail', category: 'Communication', logo: '/assets/integrations/gmail.svg', row: 2 },
  { name: 'Payoneer', category: 'Payments', logo: '/assets/integrations/payoneer.png', row: 2 },
  { name: 'Google Drive', category: 'File Management', logo: '/assets/integrations/google-drive.png', row: 2 },
  { name: 'Paypal', category: 'Payments', logo: '/assets/integrations/paypal.svg', row: 3 },
  { name: 'Paystack', category: 'Payments', logo: '/assets/integrations/paystack.svg', row: 3 },
  { name: 'Stripe', category: 'Payments', logo: '/assets/integrations/stripe.svg', row: 3 },
];

const testimonials = [
  {
    name: 'Tunde, SME Owner',
    avatar: '/assets/testimonials/avatar-tunde.svg',
    rating: 5,
    quote: '"BizPilot saved us over 10 hours each week on bookkeeping and made tracking payments effortless."',
  },
  {
    name: 'Ada, Freelancer',
    avatar: '/assets/testimonials/avatar-ada.svg',
    rating: 5,
    quote: '"With BizBot, I finally get clarity on my cash flow without spending hours on spreadsheets."',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-8 py-28 lg:py-32">
      <div className="mx-auto max-w-[1204px]">
        {/* Integration Section */}
        <div className="mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-[476px] space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-[20px] border border-slate-300 bg-white px-4 py-2 shadow-sm">
              <div className="h-4 w-4 relative">
                <Image
                  src="/assets/testimonials/workflow-icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-base font-medium text-slate-700">
                Seamless Workflow
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[38px] font-bold leading-[1.16] text-slate-900">
              Integrate Critical Workflows
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed text-slate-700 opacity-80">
              Link BizPilot to your existing tools, connect important business processes, and ensure a seamless workflow.
            </p>

            {/* Link */}
            <a
              href="#integrations"
              className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Explore all integrations</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5"
              >
                <path
                  d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right - Integration Cards */}
          <div className="relative h-[335px] w-full max-w-[728px] overflow-hidden">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-8">
              {/* Row 1 */}
              <div className="flex gap-8">
                {integrations.filter(i => i.row === 1).map((integration, idx) => (
                  <IntegrationCard key={idx} {...integration} />
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex gap-8">
                {integrations.filter(i => i.row === 2).map((integration, idx) => (
                  <IntegrationCard key={idx} {...integration} />
                ))}
              </div>
              {/* Row 3 */}
              <div className="flex gap-8">
                {integrations.filter(i => i.row === 3).map((integration, idx) => (
                  <IntegrationCard key={idx} {...integration} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12 space-y-12">
          {/* Heading */}
          <motion.div
            className="mx-auto max-w-[800px] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[38px] font-bold leading-[1.16] text-slate-900">
              Hear from our users
            </h2>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({ name, category, logo }: { name: string; category: string; logo: string }) {
  return (
    <div className="flex min-w-[280px] items-center gap-3 rounded-xl bg-white p-3 shadow-[0px_0px_1px_0px_rgba(24,29,38,0.24),0px_2px_4px_0px_rgba(24,29,38,0.08),0px_2px_16px_0px_rgba(24,29,38,0.06)]">
      <div className="relative h-9 w-9 flex-shrink-0">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-slate-800">{name}</h3>
        <p className="text-xs text-slate-700">{category}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, avatar, rating, quote }: { name: string; avatar: string; rating: number; quote: string }) {
  return (
    <div className="w-full max-w-[384px] space-y-4 rounded-xl bg-blue-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-[42px] w-[42px] flex-shrink-0">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="text-base font-medium text-slate-900">{name}</h3>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-0">
        {Array.from({ length: rating }).map((_, i) => (
          <div key={i} className="relative h-5 w-5">
            <Image
              src="/assets/testimonials/star.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Quote */}
      <p className="text-base leading-relaxed text-slate-600">
        {quote}
      </p>
    </div>
  );
}

