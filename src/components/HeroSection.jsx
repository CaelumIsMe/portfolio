import { ChevronDown, ShieldCheck, Zap } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden"
        >
            <div className="container relative z-10 flex flex-col items-center">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-8 animate-fade-in">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for new projects
                </div>

                {/* Profile Image with Glow */}
                <div className="relative mb-10 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
                    <img
                        src="/logo/icon_me.png"
                        alt="Charles Roque"
                        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 p-1 bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-black border border-white/10 p-2 rounded-xl">
                        <ShieldCheck className="text-primary" size={20} />
                    </div>
                </div>

                {/* Typography with High Contrast */}
                <h1 className="text-4xl md:text-7xl font-bold text-center tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    Securing the <span className="text-primary italic">Digital</span> <br /> 
                    <span className="text-white">Frontier.</span>
                </h1>

                <p className="max-w-2xl text-center text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    I'm <span className="text-white font-semibold">Charles Roque</span>, a Security Researcher and Full Stack Developer. 
                    I build resilient systems and hunt for vulnerabilities to make the web a safer place.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <a href="#projects" className="cosmic-button flex items-center justify-center gap-2">
                        Explore Work
                        <Zap size={18} />
                    </a>
                    <a href="#contact" className="secondary-button">
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <ChevronDown size={24} className="text-zinc-500" />
            </div>
        </section>
    );
}