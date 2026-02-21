"use client";

import React from "react";

const logoSrc = "/assets/Problems/Bizbot-logo.png";
const img1 = "/assets/Problems/chasing-clients.png";
const img2 = "/assets/Problems/switching-between.png";
const img3 = "/assets/Problems/book-keeping.png";
const img4 = "/assets/Problems/clear-visibility.png";

interface ProblemCardProps {
  icon: string;
  text: string;
}

function ProblemCard({ icon, text }: ProblemCardProps) {
  return (
    <div className="group relative h-[176px] w-full max-w-[286px] transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute top-[32px] left-0 h-[144px] w-full rounded-xl border border-blue-50 bg-white px-5 py-8 flex flex-col items-center justify-end transition-shadow">
        <p className="text-center text-slate-900 text-base font-medium leading-relaxed">
          {text}
        </p>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-16">
        <div className="absolute inset-0 bg-blue-50 rounded-xl border border-blue-50" />
        <div className="absolute bottom-0 inset-x-0 h-[31px] bg-blue-50 border-x border-b border-white rounded-b-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={icon} alt="" className="w-8 h-8 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  const problems = [
    {
      icon: img1,
      text: "Chasing clients for payments eats up valuable time.",
    },
    {
      icon: img2,
      text: "Switching between too many tools creates chaos.",
    },
    {
      icon: img3,
      text: "Bookkeeping takes hours you don’t have.",
    },
    {
      icon: img4,
      text: "You don’t get clear visibility into your numbers.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 px-6 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-16">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-8 text-center max-w-3xl">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <img src={logoSrc} alt="" className="w-4 h-4" />
            <span className="text-sm font-medium text-slate-600">
              The Problems we Solve
            </span>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[38px] font-semibold tracking-tight text-slate-900 leading-tight">
              Running a Business Shouldn’t be a Hassle
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-500">
              BizPilot fixes all that with automation and smart insights.
            </p>
          </div>

          <button className="mt-[24px] h-11 w-[200px] rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
            Start your free trial
          </button>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full justify-items-center">
          {problems.map((problem, index) => (
            <ProblemCard key={index} icon={problem.icon} text={problem.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
