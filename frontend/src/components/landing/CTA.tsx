import Link from 'next/link';

const CTA = () => {
    return (
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="bg-primary rounded-3xl p-8 sm:p-16 relative overflow-hidden text-center shadow-xl shadow-blue-500/20 group">

                    {/* Background Decoration */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/15 transition-colors duration-500"></div>
                        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/15 transition-colors duration-500"></div>

                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                            Limited Time Offer
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                            Run your Business the Smart Way!
                        </h2>
                        <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
                            Join thousands of businesses already using BizPilot to streamline their operations. Start your 14-day free trial today.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/signup" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-white hover:bg-blue-50 rounded-full shadow-lg transition-transform hover:scale-105">
                                Get Started Free
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/30 hover:bg-white/10 rounded-full transition-colors">
                                Talk to Sales
                            </Link>
                        </div>

                        <p className="mt-6 text-sm text-blue-200 opacity-80">
                            No credit card required • Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
