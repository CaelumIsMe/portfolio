import { ChevronDown, Download, MessageCircle, ShieldCheck, Zap } from "lucide-react";

// Configurable so the PDF can be renamed/versioned without touching the markup.
const resumeUrl = import.meta.env.VITE_RESUME_URL || "/resume-2026.pdf";

const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "50+", label: "Bugs Found" },
    { value: "20+", label: "Projects Built" },
];

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center pt-[104px] pb-10 overflow-hidden"
        >
            <div className="container grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-9 items-center">
                {/* Left column */}
                <div className="flex flex-col items-start min-w-0">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-7 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 opacity-0 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping-dot" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        Available for new projects
                    </div>

                    <h1
                        className="text-[clamp(38px,5.2vw,72px)] leading-[1.04] font-bold tracking-[-0.035em] mb-6 text-balance opacity-0 animate-fade-in-up"
                        style={{ animationDelay: "0.15s" }}
                    >
                        Securing the <span className="text-primary italic">Digital</span> <br />
                        <span className="text-white">Frontier.</span>
                    </h1>

                    <p
                        className="max-w-[34rem] text-zinc-400 text-[clamp(16px,1.3vw,19px)] leading-[1.7] mb-9 text-pretty opacity-0 animate-fade-in-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        I'm <span className="text-white font-semibold">Charles Roque</span>, a
                        DevOps Engineer and Full Stack Developer. I build resilient systems and
                        hunt for vulnerabilities to make the web a safer place.
                    </p>

                    <div
                        className="flex flex-wrap gap-3.5 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: "0.45s" }}
                    >
                        <a href={resumeUrl} download className="btn-base btn-hero btn-primary">
                            <Download size={18} />
                            Download Resume
                        </a>
                        <a href="#projects" className="btn-base btn-hero btn-secondary">
                            Explore Work
                            <Zap size={18} />
                        </a>
                        <a href="#contact" className="btn-base btn-hero btn-secondary">
                            Get in Touch
                            <MessageCircle size={18} />
                        </a>
                    </div>

                    <div
                        className="flex flex-wrap gap-x-10 gap-y-4 mt-6 pt-[18px] w-full max-w-[34rem] border-t border-white/7 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: "0.6s" }}
                    >
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-[26px] font-bold text-white">{stat.value}</div>
                                <div className="mt-0.5 text-[11px] text-zinc-500 uppercase tracking-[0.12em]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column — portrait card */}
                <div
                    className="relative flex justify-center min-w-0 opacity-0 animate-fade-in-up"
                    style={{ animationDuration: "0.9s", animationDelay: "0.3s" }}
                >
                    <div className="group relative w-full max-w-[460px] aspect-[4/5] rounded-[32px] border border-white/10 bg-[linear-gradient(160deg,rgba(39,39,42,0.55),rgba(0,0,0,0.65))] backdrop-blur-[14px] overflow-hidden transition-all duration-500 ease-lift hover:-translate-y-1.5 hover:border-primary/45">
                        {/* Red glow behind the subject */}
                        <div className="absolute left-1/2 top-[58%] w-[115%] h-[80%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(220,38,38,0.32),transparent_62%)] blur-[34px]" />

                        {/* 28px grid overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:28px_28px]" />

                        {/* Bottom fade */}
                        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/85 to-transparent" />

                        <img
                            src="/roque-profile.webp"
                            alt="Charles Roque, DevOps Engineer and Full Stack Developer, working on a laptop"
                            className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[96%] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                        />

                        <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-[13px] py-[7px] rounded-full bg-black/60 backdrop-blur-[10px] border border-white/12 font-mono text-[10.5px] font-bold tracking-[0.16em] uppercase text-white">
                            <ShieldCheck size={14} className="text-primary" />
                            Charles Roque
                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 px-4 py-3 rounded-[18px] bg-black/55 backdrop-blur-[12px] border border-white/10">
                            <span className="font-mono text-[11px] tracking-[0.1em] text-zinc-400">
                                DEVOPS ENGINEER
                            </span>
                            <span className="font-mono text-[11px] tracking-[0.1em] text-primary">
                                FULL STACK
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-9 left-1/2 -translate-x-1/2 opacity-50 animate-bounce-y">
                <ChevronDown size={24} className="text-zinc-500" />
            </div>
        </section>
    );
};
