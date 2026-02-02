const Clients = () => {
    const logos = [
        { name: "Acme Corp", initial: "A" },
        { name: "GlobalTech", initial: "G" },
        { name: "Nebula", initial: "N" },
        { name: "CloudScale", initial: "C" },
        { name: "Velocity", initial: "V" },
        { name: "FoxHub", initial: "F" },
    ];

    return (
        <div className="py-10 border-b border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    <p className="text-sm font-medium text-slate-500 whitespace-nowrap">
                        Trusted by 25,000+ teams including:
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {logos.map((logo, index) => (
                            <div key={index} className="flex items-center gap-2 text-xl font-bold text-slate-700">
                                <div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center text-[10px] text-slate-500">{logo.initial}</div>
                                <span>{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
