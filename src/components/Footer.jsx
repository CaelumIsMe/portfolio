import { Facebook, Instagram, Globe, Github, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
            {/* Subtle Gradient background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <a href="#hero" className="text-2xl font-bold inline-block mb-6 group">
                            <span className="text-primary">&lt;</span>
                            <span className="text-white">Roque</span>
                            <span className="text-primary">/&gt;</span>
                        </a>
                        <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
                            Security Researcher & Full Stack Developer dedicated to building 
                            resilient digital environments and innovative web solutions.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Github size={20} />, href: "https://github.com/CaelumIsMe", label: "GitHub" },
                                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/joseph-charles-roque-306a96392/", label: "LinkedIn" },
                                { icon: <Facebook size={20} />, href: "https://www.facebook.com/josephcharles.roque", label: "Facebook" },
                                { icon: <Globe size={20} />, href: "https://cosedevs.com", label: "Website" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
                        <ul className="space-y-4">
                            {['About', 'Projects', 'Write-Ups', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a 
                                        href={`#${link.toLowerCase().replace(' ', '-')}`} 
                                        className="text-zinc-500 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-xs">
                        © {new Date().getFullYear()} Charles Roque. Crafted with passion & security.
                    </p>
                    
                    <button 
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                    >
                        BACK TO TOP
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                            <ArrowUp size={14} className="text-primary" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};