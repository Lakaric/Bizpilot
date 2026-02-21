'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const integrations = [
  { name: 'Zendesk', category: 'Customer Support', logo: '/assets/testimonials/Zendesk.png', row: 1 },
  { name: 'Outlook Calendar', category: 'Communication', logo: '/assets/testimonials/Container.png', row: 1 },
  { name: 'Calendly', category: 'Customer Support', logo: '/assets/testimonials/calendly_symbol.svg.png', row: 1 },
  { name: 'Gmail', category: 'Communication', logo: '/assets/testimonials/gmail_symbol.svg.png', row: 2 },
  { name: 'Payoneer', category: 'Payments', logo: '/assets/testimonials/Payoneer.png', row: 2 },
  { name: 'Google Drive', category: 'File Management', logo: '/assets/testimonials/google_icon.jpeg.png', row: 2 },
  { name: 'Paypal', category: 'Payments', logo: '/assets/testimonials/Paypal.png', row: 3 },
  { name: 'Paystack', category: 'Payments', logo: '/assets/testimonials/paystack_symbol.svg.png', row: 3 },
  { name: 'Stripe', category: 'Payments', logo: '/assets/testimonials/Stripe.png', row: 3 },
];

const testimonials = [
  {
    name: 'Tunde',
    role: 'SME Owner',
    avatar: '/assets/testimonials/tunde-avatar.png',
    rating: 5,
    quote: 'BizPilot saved us over 10 hours each week on bookkeeping and made tracking payments effortless.',
  },
  {
    name: 'Ada',
    role: 'Freelancer',
    avatar: '/assets/testimonials/Ada-avatar.png',
    rating: 5,
    quote: 'With BizBot, I finally get clarity on my cash flow without spending hours on spreadsheets.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 sm:px-8 py-24 lg:py-32" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-[1204px]">
        {/* Integration Section */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-[476px] space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-[20px] border border-slate-200 bg-white px-4 py-2.5 shadow-[0px_1px_3px_rgba(0,0,0,0.06)]">
              <div className="h-4 w-4 relative">
                <Image
                  src="/assets/testimonials/Bizbot-logo.png"
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
            <h2 className="text-[32px] sm:text-[38px] font-bold leading-[1.16] text-slate-900 tracking-tight">
              Integrate Critical Workflows
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed text-slate-600 max-w-[420px]">
              Link BizPilot to your existing tools, connect important business processes, and ensure a seamless workflow.
            </p>

            {/* Link */}
            <a
              href="#integrations"
              className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors"
            >
              <span>Explore all integrations</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5 shrink-0"
                aria-hidden
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
              {[1, 2, 3].map((row) => (
                <div key={row} className="flex gap-6 sm:gap-8">
                  {integrations
                    .filter((i) => i.row === row)
                    .map((integration, idx) => (
                      <IntegrationCard key={`${row}-${idx}`} {...integration} />
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 lg:mt-20 flex flex-col gap-8 items-center">
          {/* Heading */}
          <motion.div
            id="testimonials-heading"
            className="max-w-[800px] w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-semibold leading-[1.16] text-[#1c1f25] font-[family-name:var(--font-display)]">
              Hear from our users
            </h2>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-stretch">
            {testimonials.map((testimonial, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({ name, category, logo }: { name: string; category: string; logo: string }) {
  return (
    <div className="flex min-w-[240px] sm:min-w-[280px] items-center gap-3 rounded-xl bg-white p-3.5 shadow-[0px_0px_1px_0px_rgba(24,29,38,0.24),0px_2px_4px_0px_rgba(24,29,38,0.08),0px_2px_16px_0px_rgba(24,29,38,0.06)] border border-slate-100">
      <div className="relative h-9 w-9 flex-shrink-0">
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="min-w-0 flex flex-col">
        <span className="text-base font-semibold text-slate-800 truncate">{name}</span>
        <span className="text-xs text-slate-500">{category}</span>
      </div>
    </div>
  );
}

type TestimonialCardProps = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
};

function TestimonialCard({ name, role, avatar, rating, quote }: TestimonialCardProps) {
  return (
    <div className="h-full flex flex-col bg-[#f7f8fd] rounded-xl overflow-hidden p-4 w-full sm:w-[384px]">
      <div className="flex flex-col gap-[15px]">
        {/* Author + Stars */}
        <div className="flex flex-col gap-3">
          {/* Author Row */}
          <div className="flex items-center justify-between">
            <div className="relative h-[42px] w-[42px] flex-shrink-0">
              <Image
                src={avatar}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 h-5 overflow-hidden ml-3">
              <p className="text-base font-medium text-[#1c1f25] leading-5 whitespace-nowrap">
                {name}, {role}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center" role="img" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i} className="relative h-5 w-5 block">
                <Image
                  src="/assets/testimonials/star.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Quote */}
        <p className="text-base font-normal text-[#626981] leading-[22px]">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </div>
  );
}

