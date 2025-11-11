import { cn } from "@/lib/utils";
import { Menu, X} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { name: 'Home', href: "#hero" },
    { name: 'About', href: "#about" },
    { name: 'Specializations', href: "#specializations" },
    { name: 'Projects', href: "#projects" },
    { name: 'Write-Ups', href: "#write-ups" },
];

export const Navbar = () => {
        const [isScrolled, setIsScrolled] = useState(false);
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    return (
        <nav
            className={cn(
                // py-5 bg-black/40 backdrop-blur-md border-b border-border"
                "fixed w-full z-50 transition-all duration-300 py-5 bg-black/100 border-b border-border",  
                // isScrolled ? "py-3 bg-black/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >


            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-primary font-semibold tracking-wide">
                            &lt;<span className="text-white">Portfolio</span><span className="text-primary font-semibold tracking-wide">/&gt;</span>
                        </span>
                    </span>
                </a>

                {/* desktop version */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-white hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            // aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav version */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-white z-50"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    {/* MENU ITEMS */}
                    <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-white hover:text-primary transition-colors duration-300"
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