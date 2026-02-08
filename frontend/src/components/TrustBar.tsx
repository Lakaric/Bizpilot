const imgGroup = "/assets/trust-bar/getapp-logo.svg";
const imgSvg = "/assets/trust-bar/star-filled.svg";
const imgStar = "/assets/trust-bar/trustpilot-star.svg";
const imgCapterraSymbolSvg = "/assets/trust-bar/capterra-logo.svg";
const imgG2LogoSvg = "/assets/trust-bar/g2-logo.svg";

export default function TrustBar() {
    return (
        <div className="bg-white flex flex-col gap-0 items-center pb-[60px] pt-[40px] px-[32px] relative w-full" data-name="Trust Bar">
            <div className="flex flex-col gap-[20px] items-center max-w-[1204px] relative shrink-0 w-full" data-name="Container">
                <p className="font-['Inter'] font-normal leading-[1.6] min-w-full not-italic opacity-80 relative shrink-0 text-[16px] text-[#4b5162] text-center w-min whitespace-pre-wrap">
                    Trusted by small businesses and growing teams across industries
                </p>
                <div className="flex gap-[48px] items-center justify-center relative shrink-0 flex-wrap">
                    {/* GetApp Section */}
                    <div className="h-[64px] relative shrink-0 w-[260px]" data-name="Container">
                        <div className="absolute flex gap-[16px] items-center left-0 top-0">
                            <div className="bg-white border border-[#eaeefa] border-solid relative rounded-[16px] shrink-0 size-[64px]" data-name="Background+Border">
                                <div className="absolute inset-[calc(31.76%-0.36px)_calc(18.75%-0.62px)_calc(31.76%-0.36px)_calc(18.75%-0.63px)]" data-name="Group">
                                    <img alt="GetApp Logo" className="block max-w-none size-full" src={imgGroup} />
                                </div>
                            </div>
                            <div className="flex flex-col items-start relative shrink-0 w-[180px]">
                                <div className="flex gap-[3px] items-center relative shrink-0 w-full">
                                    <div className="flex flex-[1_0_0] gap-[4px] items-center leading-[0] min-h-px min-w-px not-italic relative text-[#20262e]">
                                        <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[20px] whitespace-nowrap">
                                            <p className="leading-[28px]">4.9</p>
                                        </div>
                                        <div className="flex flex-col font-bold h-[28px] justify-center relative shrink-0 text-[14px] w-[6px]">
                                            <p className="leading-[28px] whitespace-pre-wrap">/</p>
                                        </div>
                                        <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[20px] whitespace-nowrap">
                                            <p className="leading-[28px]">5.0</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative shrink-0">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="relative shrink-0 size-[20px]" data-name="SVG">
                                                <img alt="Star" className="block max-w-none size-full" src={imgSvg} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#545c66] text-[16px] w-full">
                                    <p className="leading-[1.6] whitespace-pre-wrap">On GetApp</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trustpilot Section */}
                    <div className="h-[64px] relative shrink-0 w-[260px]" data-name="Container">
                        <div className="absolute flex gap-[16px] items-center left-0 top-0">
                            <div className="bg-white border border-[#eaeefa] border-solid relative rounded-[16px] shrink-0 size-[64px]" data-name="Background+Border">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[38px] left-1/2 overflow-clip top-1/2 w-[40px]" data-name="trustpilot_symbol.svg">
                                    <div className="absolute contents inset-0" data-name="Star">
                                        <img alt="Trustpilot Star" className="block max-w-none size-full" src={imgStar} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start relative shrink-0 w-[180px]">
                                <div className="flex gap-[3px] items-center relative shrink-0 w-full">
                                    <div className="flex flex-[1_0_0] gap-[4px] items-center leading-[0] min-h-px min-w-px not-italic relative text-[#20262e]">
                                        <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[20px] whitespace-nowrap">
                                            <p className="leading-[28px]">4.9</p>
                                        </div>
                                        <div className="flex flex-col font-bold h-[28px] justify-center relative shrink-0 text-[14px] w-[6px]">
                                            <p className="leading-[28px] whitespace-pre-wrap">/</p>
                                        </div>
                                        <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[20px] whitespace-nowrap">
                                            <p className="leading-[28px]">5.0</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative shrink-0">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="relative shrink-0 size-[20px]" data-name="SVG">
                                                <img alt="Star" className="block max-w-none size-full" src={imgSvg} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#545c66] text-[16px] w-full">
                                    <p className="leading-[1.6] whitespace-pre-wrap">On Trustpilot</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Capterra Section */}
                    <div className="h-[64px] relative shrink-0 w-[260px]" data-name="Container">
                        <div className="absolute flex gap-[16px] items-center left-0 top-0">
                            <div className="bg-white border border-[#eaeefa] border-solid relative rounded-[16px] shrink-0 size-[64px]" data-name="Background+Border">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2" data-name="SVG">
                                    <div className="absolute inset-[10%_11.25%] overflow-clip" data-name="capterra_symbol.svg">
                                        <img alt="Capterra Logo" className="block max-w-none size-full" src={imgCapterraSymbolSvg} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start relative shrink-0 w-[180px]">
                                <div className="flex gap-[3px] items-center relative shrink-0 w-full">
                                    <div className="flex flex-[1_0_0] gap-[4px] items-center leading-[0] min-h-px min-w-px not-italic relative text-[#20262e]">
                                        <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[20px] whitespace-nowrap">
                                            <p className="leading-[28px]">4.9</p>
                                        </div>
                                        <div className="flex flex-col font-bold h-[28px] justify-center relative shrink-0 text-[14px] w-[6px]">
                                            <p className="leading-[28px] whitespace-pre-wrap">/</p>
                                        </div>
                                        <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[20px] whitespace-nowrap">
                                            <p className="leading-[28px]">5.0</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative shrink-0">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="relative shrink-0 size-[20px]" data-name="SVG">
                                                <img alt="Star" className="block max-w-none size-full" src={imgSvg} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#545c66] text-[16px] w-full">
                                    <p className="leading-[1.6] whitespace-pre-wrap">On Capterra</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* G2 Section */}
                    <div className="h-[64px] relative shrink-0 w-[260px]" data-name="Container">
                        <div className="absolute flex gap-[16px] items-center left-0 top-0">
                            <div className="bg-white border border-[#eaeefa] border-solid relative rounded-[16px] shrink-0 size-[64px]" data-name="Background+Border">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2" data-name="SVG">
                                    <div className="absolute inset-[10%]" data-name="g2_logo.svg">
                                        <img alt="G2 Logo" className="block max-w-none size-full" src={imgG2LogoSvg} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start relative shrink-0 w-[180px]">
                                <div className="flex gap-[3px] items-center relative shrink-0 w-full">
                                    <div className="flex flex-[1_0_0] gap-[4px] items-center leading-[0] min-h-px min-w-px not-italic relative text-[#20262e]">
                                        <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[20px] whitespace-nowrap">
                                            <p className="leading-[28px]">4.5</p>
                                        </div>
                                        <div className="flex flex-col font-bold h-[28px] justify-center relative shrink-0 text-[14px] w-[6px]">
                                            <p className="leading-[28px] whitespace-pre-wrap">/</p>
                                        </div>
                                        <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[20px] whitespace-nowrap">
                                            <p className="leading-[28px]">5.0</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative shrink-0">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="relative shrink-0 size-[20px]" data-name="SVG">
                                                <img alt="Star" className="block max-w-none size-full" src={imgSvg} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#545c66] text-[16px] w-full">
                                    <p className="leading-[1.6] whitespace-pre-wrap">On G2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
