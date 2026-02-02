'use client';
import { useState } from 'react';

const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium mb-6">
                    Pricing Plans
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                    Choose the plan that suits your business needs. No hidden fees.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-1 rounded-full border border-slate-200 inline-flex items-center relative">
                        <button
                            onClick={() => setAnnual(false)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setAnnual(true)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${annual ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Yearly <span className="text-xs opacity-80 ml-1">(Save 20%)</span>
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow text-left">
                        <h3 className="text-xl font-bold text-slate-900">Starter</h3>
                        <p className="text-sm text-slate-500 mb-6">Perfect for freelancers</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">${annual ? '24' : '29'}</span>
                            <span className="text-slate-500">/mo</span>
                        </div>
                        <button className="w-full py-3 border border-primary text-primary hover:bg-blue-50 rounded-xl font-medium transition-colors mb-8">
                            Start Free Trial
                        </button>
                        <ul className="space-y-4">
                            {['5 Projects', 'Basic Analytics', '24/7 Support'].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-slate-600 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Professional */}
                    <div className="bg-primary p-8 rounded-2xl border border-primary shadow-xl text-left relative overflow-hidden transform md:-translate-y-4">
                        <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
                        <h3 className="text-xl font-bold text-white">Professional</h3>
                        <p className="text-sm text-blue-100 mb-6">For growing teams</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">${annual ? '79' : '99'}</span>
                            <span className="text-blue-200">/mo</span>
                        </div>
                        <button className="w-full py-3 bg-white text-primary hover:bg-blue-50 rounded-xl font-medium transition-colors mb-8">
                            Get Started
                        </button>
                        <ul className="space-y-4">
                            {['Unlimited Projects', 'Advanced Reporting', 'Team Management', 'Priority Support'].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-white text-sm">
                                    <svg className="w-5 h-5 text-blue-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow text-left">
                        <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
                        <p className="text-sm text-slate-500 mb-6">For large organizations</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">${annual ? '199' : '249'}</span>
                            <span className="text-slate-500">/mo</span>
                        </div>
                        <button className="w-full py-3 border border-primary text-primary hover:bg-blue-50 rounded-xl font-medium transition-colors mb-8">
                            Contact Sales
                        </button>
                        <ul className="space-y-4">
                            {['Custom Integrations', 'Dedicated Account Manager', 'SLA', 'SSO & Audit Logs'].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-slate-600 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pricing;
