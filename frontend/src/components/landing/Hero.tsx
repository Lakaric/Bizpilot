import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-medium mb-8">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary"></span>
                    New: AI-Powered Analytics
                </div>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900 max-w-4xl">
                    AI-Powered Analytics and Business Management for SMEs and SMBs
                </h1>

                {/* Subhead */}
                <p className="max-w-2xl text-lg sm:text-xl text-slate-500 mb-10 leading-relaxed">
                    BizPilot provides all the tools you need to streamline operations, manage finances, and grow your team—securely and efficiently.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
                    <Link href="/signup"
                        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-primary hover:bg-blue-700 rounded-full shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                    >
                        Start Free Trial
                    </Link>
                    <Link href="#demo"
                        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-all"
                    >
                        <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                        Watch Demo
                    </Link>
                </div>

                {/* Visual / Screenshot placeholder */}
                <div className="relative w-full max-w-5xl group">
                    {/* Decorative blob behind */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

                    <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center">
                        {/* This would be the dashboard image */}
                        <div className="text-center p-8">
                            <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto flex items-center justify-center mb-4">
                                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-slate-400 font-medium">Dashboard Preview Image</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
