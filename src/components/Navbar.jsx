import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Contact", href: "#contact" },
];

/*
  The design switches to the hamburger at a 860px viewport, which sits between
  Tailwind's md (768px) and lg (1024px) stops — so the breakpoint lives in JS.
*/
const DESKTOP_QUERY = "(min-width: 860px)";

const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(
        () => typeof window === "undefined" || window.matchMedia(DESKTOP_QUERY).matches
    );

    useEffect(() => {
        const query = window.matchMedia(DESKTOP_QUERY);
        const handleChange = (event) => setIsDesktop(event.matches);

        setIsDesktop(query.matches);
        query.addEventListener("change", handleChange);
        return () => query.removeEventListener("change", handleChange);
    }, []);

    return isDesktop;
};

export const Navbar = () => {
    const isDesktop = useIsDesktop();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Growing past the breakpoint with the overlay open would trap it open.
    useEffect(() => {
        if (isDesktop) setIsMenuOpen(false);
    }, [isDesktop]);

    // While the full-screen overlay is up, Escape closes it and the page behind
    // it must not scroll away under the user's thumb.
    useEffect(() => {
        if (!isMenuOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 py-[18px] bg-black/86 backdrop-blur-[20px] border-b border-border">
                <div className="container flex items-center justify-between gap-4">
                    <a
                        href="#hero"
                        className="text-[22px] font-bold tracking-[-0.02em] flex items-center"
                    >
                        <span className="text-primary">&lt;</span>
                        <span className="text-white">Roque</span>
                        <span className="text-primary">/&gt;</span>
                    </a>

                    {isDesktop ? (
                        <div className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="px-3.5 py-2 text-[13.5px] font-medium text-zinc-400 whitespace-nowrap transition-colors duration-300 hover:text-white"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="ml-2.5 px-[22px] py-[9px] rounded-full bg-white/5 border border-white/10 text-[13.5px] font-semibold text-white whitespace-nowrap transition-all duration-300 hover:bg-primary hover:border-primary"
                            >
                                Let's Talk
                            </a>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((open) => !open)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            className="relative z-[60] inline-flex items-center justify-center w-12 h-12 text-white"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    )}
                </div>
            </nav>

            {/*
              This overlay MUST stay a sibling of <nav>, never a child. The nav has
              backdrop-blur, and an element with a backdrop-filter becomes the
              containing block for its position:fixed descendants — nested inside,
              `inset-0` would resolve to the ~84px-tall navbar rather than the
              viewport and collapse this menu into an invisible sliver.

              It sits at z-40, below the nav's z-50, so the bar and its close
              button stay visible and tappable on top of the overlay.
            */}
            {!isDesktop && isMenuOpen && (
                <div
                    id="mobile-menu"
                    className="fixed inset-0 z-40 bg-black/97 backdrop-blur-[24px] overflow-y-auto"
                >
                    {/*
                      min-h-full + justify-center centres the links on a tall screen
                      but lets them grow and scroll on a short one (landscape phones),
                      instead of clipping the top out of reach.
                    */}
                    <div className="min-h-full flex flex-col items-center justify-center gap-8 px-6 py-24">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className="text-[30px] font-bold text-zinc-400 transition-colors duration-300 hover:text-white"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
