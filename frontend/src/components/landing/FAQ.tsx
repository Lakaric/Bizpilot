"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className={`border-b border-solid flex flex-col items-start relative w-full transition-colors duration-200 ${isOpen ? 'border-blue-600' : 'border-slate-200'}`}>
      <button
        onClick={onClick}
        className="flex gap-4 items-start py-6 pr-5 relative shrink-0 w-full text-left focus:outline-none"
      >
        <div className="flex items-start py-1.5 relative self-stretch shrink-0 w-1">
          <div className={`flex-1 h-full min-h-px min-w-px rounded-sm transition-colors duration-200 ${isOpen ? 'bg-blue-600' : 'bg-transparent'}`} />
        </div>
        <div className="flex flex-1 flex-col font-semibold justify-center leading-none min-h-px min-w-px relative text-xl text-slate-900">
          <p className="leading-relaxed whitespace-pre-wrap">{question}</p>
        </div>
        <div className="flex items-start pt-0.5 relative shrink-0">
          <div className="relative shrink-0 size-6 text-slate-900 flex items-center justify-center">
            <motion.svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden w-full"
          >
            <div className="flex items-start pb-6 pl-[28px] pr-5 relative shrink-0 w-full">
              <p className="flex-1 text-base text-slate-600 leading-relaxed whitespace-pre-wrap">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    question: "Do I need accounting experience to use BizPilot?",
    answer: "No. BizPilot is designed for small business owners and teams without an accounting background. Most tasks are automated, and BizBot guides you through the rest.",
  },
  {
    question: "How secure is my business data?",
    answer: "We take security seriously. Your data is encrypted in transit and at rest using bank-grade security protocols. We never share your financial information with third parties.",
  },
  {
    question: "Can I try BizPilot before paying?",
    answer: "Yes! We offer a 14-day free trial on all plans so you can explore all features before committing. No credit card required to start your trial.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white flex flex-col items-center py-28 px-8 relative w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between max-w-6xl w-full mx-auto relative">
        <div className="flex flex-col gap-6 items-start justify-start max-w-md w-full relative lg:sticky lg:top-24">
          <div className="bg-white border border-slate-300 flex gap-2 items-center px-4 py-2 relative rounded-full shadow-sm text-sm">
<Image src="/assets/Bizbot-logo.png" alt="BizPilot logo" width={16} height={16} />
<span className="font-semibold text-black uppercase tracking-wider">FAQ</span>
          </div>
         
          <h2 className="font-bold leading-tight text-4xl lg:text-5xl text-slate-900 whitespace-pre-wrap">
            Frequently asked questions
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-wrap">
            Explore our frequently asked questions to learn more about BizPilot
          </p>
        </div>

        <div className="flex flex-col w-full lg:max-w-[580px]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

