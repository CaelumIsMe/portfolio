import { ArrowUp, Facebook, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";

const socials = [
    { icon: Github, href: "https://github.com/CaelumIsMe", label: "GitHub" },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/joseph-charles-roque-306a96392/",
        label: "LinkedIn",
    },
    { icon: Facebook, href: "https://www.facebook.com/josephcharles.roque", label: "Facebook" },
    { icon: Globe, href: "https://cosedevs.com", label: "Website" },
];

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Contact", href: "#contact" },
];

const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
};

export const Footer = () => {
    return (
        <footer className="relative bg-black pt-10 pb-7 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-[linear-gradient(to_right,transparent,rgba(220,38,38,0.5),transparent)]" />

            <div className="container relative">
                <div className="flex flex-wrap gap-8 mb-[26px]">
                    {/* Brand */}
                    <div className="flex-[2_1_320px] min-w-0">
                        <a href="#hero" className="inline-block mb-6 text-[22px] font-bold">
                            <span className="text-primary">&lt;</span>
                            <span className="text-white">Roque</span>
                            <span className="text-primary">/&gt;</span>
                        </a>
                        <p className="max-w-[24rem] mb-8 text-zinc-500 text-[14.5px] leading-[1.75] text-pretty">
                            DevOps Engineer &amp; Full Stack Developer dedicated to building
                            resilient digital environments and profitable web solutions.
                        </p>
                        <div className="flex gap-3.5">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="inline-flex p-3 rounded-[14px] bg-white/5 border border-white/10 text-zinc-400 transition-all duration-300 hover:text-primary hover:border-primary/50 hover:bg-primary/5"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex-[1_1_150px] min-w-0">
                        <h4 className="mb-6 text-white font-bold uppercase tracking-[0.16em] text-[11px]">
                            Navigation
                        </h4>
                        <ul className="flex flex-col gap-4 list-none p-0 m-0">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-zinc-500 text-sm transition-colors duration-300 hover:text-white"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div className="flex-[1_1_250px] min-w-0">
                        <h4 className="mb-6 text-white font-bold uppercase tracking-[0.16em] text-[11px]">
                            Get In Touch
                        </h4>
                        <ul className="flex flex-col gap-4 list-none p-0 m-0">
                            <li className="flex items-start gap-3">
                                <MapPin size={17} className="flex-none mt-0.5 text-zinc-500" />
                                <span className="text-zinc-400 text-sm leading-[1.5]">
                                    Bacolod City, Negros Occidental, Philippines
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={17} className="flex-none mt-0.5 text-zinc-500" />
                                <a
                                    href="mailto:roque.josephcharles@gmail.com"
                                    className="text-zinc-400 text-sm leading-[1.5] break-all transition-colors duration-300 hover:text-white"
                                >
                                    roque.josephcharles@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe size={17} className="flex-none mt-0.5 text-zinc-500" />
                                <a
                                    href="https://cosedevs.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 text-sm leading-[1.5] transition-colors duration-300 hover:text-white"
                                >
                                    COS Devs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/6 flex flex-wrap justify-between items-center gap-5">
                    <p className="text-zinc-600 text-xs">
                        © {new Date().getFullYear()} Charles Roque. Crafted with passion &amp;
                        security.
                    </p>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="group inline-flex items-center gap-2.5 text-[11.5px] font-bold text-zinc-400 tracking-[0.08em] whitespace-nowrap transition-colors duration-300 hover:text-white"
                    >
                        BACK TO TOP
                        <span className="inline-flex p-2 rounded-[10px] bg-white/5 border border-white/10 transition-colors duration-300 group-hover:border-primary/50">
                            <ArrowUp size={14} className="text-primary" />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};
