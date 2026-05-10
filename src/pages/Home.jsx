import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SpecializationsSection } from "@/components/SpecializationsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WriteUpsSection } from "@/components/WriteUpsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
        <div className="relative min-h-screen">
            {/* Background Effects*/}
            <Background />
            
            {/* Navbar */}
            <Navbar />
            
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SpecializationsSection />
                <ProjectsSection />
                <WriteUpsSection />
                <ContactSection />
            </main>
            
            {/* Footer */}
            <Footer />
        </div>
    )
}