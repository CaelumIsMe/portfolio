import { AlertTriangle, Database, Globe, Lock, Server, Bug } from "lucide-react";

export const SpecializationsSection = () => {
    const specs = [
        { icon: <AlertTriangle size={24} />, title: "SSRF Attacks", desc: "Detection and prevention of Server-Side Request Forgery." },
        { icon: <Database size={24} />, title: "SQL Injection", desc: "Database security and injection attack mitigation." },
        { icon: <Globe size={24} />, title: "Web App Security", desc: "Comprehensive security testing and vulnerability assessment." },
        { icon: <Lock size={24} />, title: "Secure by Design", desc: "Integrating security into the dev lifecycle (DevSecOps)." },
        { icon: <Server size={24} />, title: "API Security", desc: "Restful and GraphQL API security assessments." },
        { icon: <Bug size={24} />, title: "Bug Bounty", desc: "Responsible disclosure and vulnerability research." }
    ];

    return (
        <section id="specializations" className="py-24 px-4 relative">
            <div className="container">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 tracking-[0.3em]">
                        Focus Areas
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Deep <span className="text-primary">Specializations.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                    {specs.map((spec, idx) => (
                        <div 
                            key={idx}
                            className="glass-card p-6 rounded-2xl flex items-start gap-4 group"
                        >
                            <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {spec.icon}
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">{spec.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{spec.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        "OWASP Top 10", "Penetration Testing", "Security Audits", 
                        "Threat Modeling", "Authentication", "Authorization", 
                        "CSRF Protection", "Security Headers", "Input Validation", 
                        "Cryptography", "Session Management", "Secure APIs"
                    ].map((skill, idx) => (
                        <span 
                            key={idx}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-400 hover:text-white hover:border-primary/50 transition-all cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}