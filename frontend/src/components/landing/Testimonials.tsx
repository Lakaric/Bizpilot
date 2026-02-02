const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h2 className="text-3xl font-bold text-slate-900 mb-16">
                    More than 1,000 users trust us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-slate-50 p-8 rounded-2xl text-left border border-slate-100 relative overflow-hidden group hover:border-blue-100 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xl">
                                E
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Effective</h4>
                                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed italic">
                            "The analytics dashboard is a game-changer. We can finally see where our money is going in real-time."
                        </p>
                        <p className="mt-4 text-sm font-medium text-slate-900">— Sarah J., CEO of TechStart</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-50 p-8 rounded-2xl text-left border border-slate-100 relative overflow-hidden group hover:border-green-100 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                                F
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Fastest Growth</h4>
                                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed italic">
                            "BizPilot helped us scale from 10 to 50 employees without breaking our operational workflow."
                        </p>
                        <p className="mt-4 text-sm font-medium text-slate-900">— Mike T., Founder</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
