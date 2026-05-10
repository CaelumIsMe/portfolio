import { Shield, Code2, Terminal } from "lucide-react";

export const AboutSection = () => {
    const cards = [
        {
            icon: <Shield className="text-primary" size={32} />,
            title: "Security First",
            description: "Building applications with security as a core principle, ensuring data integrity and user protection from the ground up."
        },
        {
            icon: <Code2 className="text-primary" size={32} />,
            title: "Full Stack",
            description: "Expertise in modern web technologies, from performant frontends to robust and scalable backend architectures."
        },
        {
            icon: <Terminal className="text-primary" size={32} />,
            title: "Vulnerability Research",
            description: "Actively identifying, documenting, and mitigating security risks through thorough penetration testing and audits."
        }
    ];

    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 tracking-[0.3em]">
                        Expertise & Philosophy
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Mindset of a <span className="text-primary">Defender.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {cards.map((card, idx) => (
                        <div 
                            key={idx}
                            className="glass-card p-8 rounded-2xl flex flex-col items-start"
                        >
                            <div className="p-3 rounded-xl bg-primary/10 mb-6">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="glass-card p-8 md:p-12 rounded-3xl border-primary/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                            "I'm a security-focused developer with a passion for creating robust, secure applications. 
                            My background spans penetration testing, vulnerability research, and secure software development. 
                            When I'm not hunting for bugs or building applications, I enjoy sharing my knowledge through 
                            technical write-ups and contributing to the security community."
                        </p>
                        <div className="mt-8 flex justify-center gap-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">4+</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-wider">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">50+</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-wider">Bugs Found</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">20+</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-wider">Projects Built</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}