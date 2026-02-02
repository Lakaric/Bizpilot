const Integrations = () => {
    return (
        <section className="py-24 bg-surface/50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-medium mb-6">
                            Seamless Connectivity
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                            Integrate All Your Workflows
                        </h2>
                        <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                            Connect BizPilot with your favorite tools. Whether it's Slack for communication, Stripe for payments, or Google Workspace for collaboration, we've got you covered.
                        </p>
                        <button className="bg-white border border-slate-200 text-slate-700 hover:border-primary hover:text-primary px-6 py-3 rounded-full font-medium transition-colors shadow-sm">
                            View All Integrations
                        </button>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Slack", icon: "S", color: "bg-purple-100 text-purple-700" },
                                { name: "Drive", icon: "D", color: "bg-blue-100 text-blue-700" },
                                { name: "Stripe", icon: "$", color: "bg-indigo-100 text-indigo-700" },
                                { name: "Notion", icon: "N", color: "bg-slate-100 text-slate-700" }
                            ].map((tool, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`w-10 h-10 rounded-lg ${tool.color} flex items-center justify-center font-bold text-xl`}>
                                        {tool.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{tool.name}</p>
                                        <p className="text-xs text-slate-500">Connected</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Center connector visual - simplified */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-4 border-slate-50 z-10">
                            <div className="w-8 h-8 bg-primary rounded-lg"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Integrations;
