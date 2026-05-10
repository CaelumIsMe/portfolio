import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { name: 'Home', href: "#hero" },
    { name: 'About', href: "#about" },
    { name: 'Projects', href: "#projects" },
    { name: 'Write-Ups', href: "#write-ups" },
    { name: 'Contact', href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300 py-5 bg-black/100 border-b border-border",
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    className="text-2xl font-bold group flex items-center"
                    href="#hero"
                >
                    <span className="text-primary group-hover:text-white transition-colors duration-300">&lt;</span>
                    <span className="text-white tracking-tight">Roque</span>
                    <span className="text-primary group-hover:text-white transition-colors duration-300">/&gt;</span>
                </a>

                {/* desktop version */}
                <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 relative group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        className="ml-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-primary hover:border-primary transition-all duration-300"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* mobile nav trigger */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-white hover:text-primary transition-colors z-50"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* mobile nav overlay */}
                <div
                    className={cn(
                        "fixed inset-0 bg-black/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden",
                        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-center">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-3xl font-bold text-zinc-500 hover:text-white transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};