import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SpecializationsSection } from "@/components/SpecializationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
        <div className="relative min-h-screen">
            <Background />

            <div className="relative z-10">
                <Navbar />

                <main>
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <SpecializationsSection />
                    <ContactSection />
                </main>

                <Footer />
            </div>
        </div>
    );
};
