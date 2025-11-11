import { AlertTriangle, Database, Globe, Lock, Server, Bug } from "lucide-react";

export const SpecializationsSection = () => {
    return (
        <section id="specializations" className="relative flex flex-col items-center justify-center min-h-screen w-full py-20 px-4">
            <h2 className="text-center text-primary text-xl font-semibold mb-10">
                &lt;<span className="text-white">Specializations</span>/&gt;
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full max-w-5xl justify-center">
                {/* SSRF Vulnerabilities */}
                <div className="bg-card border border-border rounded-md p-6 flex flex-col items-start card-hover hover:border-primary">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                        <AlertTriangle className="text-primary" size={28} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">SSRF Vulnerabilities</h3>
                    <p className="text-gray-300 text-sm">
                        Server-Side Request Forgery detection and prevention
                    </p>
                </div>
                {/* SQL Injection */}
                <div className="bg-card border border-border rounded-md p-6 flex flex-col items-start card-hover hover:border-primary">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                        <Database className="text-primary" size={28} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">SQL Injection</h3>
                    <p className="text-gray-300 text-sm">
                        Database security and injection attack mitigation
                    </p>
                </div>
                {/* Web App Security */}
                <div className="bg-card border border-border rounded-md p-6 flex flex-col items-start card-hover hover:border-primary">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                        <Globe className="text-primary" size={28} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Web App Security</h3>
                    <p className="text-gray-300 text-sm">
                        Comprehensive web application security testing
                    </p>
                </div>
                {/* Secure by Design */}
                <div className="bg-card border border-border rounded-md p-6 flex flex-col items-start card-hover hover:border-primary">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                        <Lock className="text-primary" size={28} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Secure by Design</h3>
                    <p className="text-gray-300 text-sm">
                        Building security into the development lifecycle
                    </p>
                </div>
                {/* API Security */}
                <div className="bg-card border border-border rounded-md p-6 flex flex-col items-start card-hover hover:border-primary">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                        <Server className="text-primary" size={28} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">API Security</h3>
                    <p className="text-gray-300 text-sm">
                        RESTful and GraphQL API security assessment
                    </p>
                </div>
                {/* Bug Bounty */}
                <div className="bg-card border border-border rounded-md p-6 flex flex-col items-start card-hover hover:border-primary">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                        <Bug className="text-primary" size={28} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Bug Bounty</h3>
                    <p className="text-gray-300 text-sm">
                        Responsible disclosure and vulnerability reporting
                    </p>
                </div>
            </div>
            {/* Core Competencies */}
            <div className="bg-card border border-border rounded-md p-6 w-full max-w-5xl text-center">
                <h3 className="text-white font-semibold mb-3 text-base">Core Competencies</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {[
                        "#OWASP Top 10",
                        "#Penetration Testing",
                        "#Security Audits",
                        "#Threat Modeling",
                        "#Authentication",
                        "#Authorization",
                        "#CSRF Protection",
                        "#Security Headers",
                        "#Input Validation",
                        "#Cryptography",
                        "#Session Management",
                        "#Secure APIs"
                    ].map((item, idx) => (
                        <span
                            key={idx}
                            className="px-2 py-1 rounded border border-primary text-xs text-white transition-colors duration-200 hover:bg-primary hover:text-white cursor-pointer"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}