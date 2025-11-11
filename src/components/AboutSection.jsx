import { Shield, Code2, Terminal } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="relative flex flex-col items-center justify-center min-h-screen w-full py-24 px-4">
            <h2 className="text-center text-primary text-xl font-semibold mb-10">
                &lt;<span className="text-white">About Me</span>/&gt;
            </h2>
            <div className="flex flex-col md:flex-row gap-8 mb-10 w-full max-w-5xl justify-center">
                {/* Security First */}
                <div className="bg-card border border-border rounded-md p-8 flex flex-col items-center w-full md:w-1/3 card-hover hover:border-primary">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Shield className="text-primary" size={40} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Security First</h3>
                    <p className="text-gray-300 text-center">
                        Building applications with security as a core principle
                    </p>
                </div>
                {/* Full Stack */}
                <div className="bg-card border border-border rounded-md p-8 flex flex-col items-center w-full md:w-1/3 card-hover hover:border-primary">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Code2 className="text-primary" size={40} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Full Stack</h3>
                    <p className="text-gray-300 text-center">
                        Experienced in modern web technologies and frameworks
                    </p>
                </div>
                {/* Research */}
                <div className="bg-card border border-border rounded-md p-8 flex flex-col items-center w-full md:w-1/3 card-hover hover:border-primary">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Terminal className="text-primary" size={40} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Research</h3>
                    <p className="text-gray-300 text-center">
                        Actively researching and documenting security vulnerabilities
                    </p>
                </div>
            </div>
            <div className="bg-card border border-border rounded-md p-8 w-full max-w-5xl text-gray-300 text-center">
                <p>
                    I'm a security-focused developer with a passion for creating robust, secure applications. My background spans penetration testing, vulnerability research, and secure software development.
                </p>
                <p className="mt-4">
                    When I'm not hunting for bugs or building applications, I enjoy sharing my knowledge through technical write-ups and contributing to the security community.
                </p>
            </div>
        </section>
    );
}