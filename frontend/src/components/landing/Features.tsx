import Image from 'next/image';

const Features = () => {
    return (
        <section id="solutions" className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* Feature 1 */}
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-16 lg:items-center">
                        <div className="lg:col-start-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium mb-6">
                                In-depth Analysis
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                                Everything you need in one Platform
                            </h3>
                            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                                From financial reports to team performance, get a 360-degree view of your business operations. Visualize data with intuitive charts and graphs.
                            </p>

                            <div className="mt-8 space-y-4">
                                {['Real-time Dashboards', 'Customizable Reports', 'Export to PDF/Excel'].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                            {/* Visual Placeholder */}
                            <div className="relative rounded-2xl bg-slate-50 border border-slate-200 p-8 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="aspect-[4/3] bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Floating card */}
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                                            $
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Revenue</p>
                                            <p className="text-lg font-bold text-slate-900">$48,250.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-16 lg:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
                                Workflow Automation
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                                Sales Agent Workflow
                            </h3>
                            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                                Automate your sales process from lead capture to closing. Assign tasks, track progress, and never miss a follow-up.
                            </p>
                            <div className="mt-8">
                                <button className="text-primary font-bold hover:text-blue-700 flex items-center gap-2">
                                    Learn more about workflows
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mt-10 -mx-4 lg:mt-0">
                            {/* Visual Placeholder */}
                            <div className="relative rounded-2xl bg-indigo-50/50 border border-indigo-100 p-8 shadow-sm">
                                <div className="space-y-4">
                                    {['New Lead Received', 'Automated Email Sent', 'Task Assigned to Sales Rep', 'Follow-up Scheduled'].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">
                                                {i + 1}
                                            </div>
                                            <span className="text-slate-700 font-medium">{step}</span>
                                            {i < 3 && <div className="ml-auto w-px h-full bg-slate-200"></div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
