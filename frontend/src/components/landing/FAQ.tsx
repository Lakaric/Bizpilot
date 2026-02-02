'use client';
import { useState } from 'react';

const faqs = [
    {
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 14-day free trial on all paid plans. No credit card required to start."
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Absolutely. You can cancel your subscription at any time from your dashboard. No questions asked."
    },
    {
        question: "Is my data secure?",
        answer: "Yes. We use bank-level encryption (AES-256) and host our servers in secure data centers (AWS)."
    },
    {
        question: "Can I manage multiple businesses?",
        answer: "Yes, the Enterprise plan allows you to manage multiple workspaces under a single account."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium mb-4">
                        Support
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-100 rounded-xl bg-slate-50 overflow-hidden transition-all">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-bold text-slate-900">{faq.question}</span>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-slate-100/50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-slate-500">
                    Still have questions? <a href="#" className="font-bold text-primary hover:underline">Contact Support</a>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
