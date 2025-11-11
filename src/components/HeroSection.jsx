import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative flex flex-col items-center justify-center min-h-screen w-full"
        >
                {/* Hero Section */}
                {" "}
                <div className="flex flex-col items-center justify-center flex-1 mt-12 mb-12">
                    <img
                        src="/logo/icon_me.png"
                        alt="Profile"
                        className="w-40 h-40 rounded-full border-4 border-primary mb-6 animate-fade-in-delay-1"
                    />
                    <h1 className="text-2xl text-white font-semibold mb-2 animate-fade-in-delay-2">
                        <span className="text-primary">&lt;</span>Caelum Cloud<span className="text-primary">/&gt;</span>
                    </h1>
                    <h2 className="text-gray-300 mb-2 animate-fade-in-delay-3">
                        Security Researcher &amp; Full Stack Developer
                    </h2>
                    <p className="text-gray-300 max-w-2xl text-center mb-8 animate-fade-in-delay-4">
                        Specializing in web application security, penetration testing, and secure software development.<br />
                        Passionate about finding vulnerabilities and building resilient systems.
                    </p>
                    <div className="flex gap-6 mb-8 animate-fade-in-delay-4">
                        <a href="#projects" className="bg-primary text-primary-foreground px-8 py-3 rounded font-medium hover:scale-105 transition-transform duration-200"
                        >
                            {" "}
                            View Projects
                        </a>
                        <a href="#write-ups" className="border border-primary text-primary px-8 py-3 rounded font-medium hover:bg-primary hover:text-white transition-colors duration-200">
                            Read Write-ups
                        </a>
                    </div>
                </div>
                {/* Arrow at the bottom */}
                <div className="flex justify-center w-full mb-6">
                    <span>
                        <ChevronDown
                            className="text-primary rounded-full border border-primary p-1 animate-bounce"
                            size={32}
                        />
                    </span>
                </div>
        </section>
    );
}