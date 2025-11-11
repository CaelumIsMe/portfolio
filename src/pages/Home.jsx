import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SpecializationsSection } from "@/components/SpecializationsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WriteUpsSection } from "@/components/WriteUpsSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
        <div>
            {/* Background Effects*/}
            <Background />
            {/* Navbar */}
            <Navbar />
            {/* Main Section */}
            <main>
                {/* Hero Section */}
                <HeroSection />
                <AboutSection />
                <SpecializationsSection />
                <ProjectsSection />
                <WriteUpsSection />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}