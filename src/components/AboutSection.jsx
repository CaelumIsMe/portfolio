import { Code2, Quote, Shield, Terminal } from "lucide-react";

const cards = [
    {
        icon: Shield,
        title: "Security First",
        description:
            "Building applications with security as a core principle, ensuring data integrity and user protection from the ground up.",
    },
    {
        icon: Code2,
        title: "Full Stack",
        description:
            "Expertise in modern web technologies, from performant frontends to robust and scalable backend architectures.",
    },
    {
        icon: Terminal,
        title: "Robust and Scalable",
        description:
            "Designing systems that hold up under load and keep growing — clean architecture, containerised delivery, and dependable pipelines.",
    },
];

export const AboutSection = () => {
    return (
        <section id="about" className="relative py-10">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-[26px]">
                    <span className="eyebrow text-xs tracking-[0.3em] mb-4">
                        Expertise &amp; Philosophy
                    </span>
                    <h2 className="text-[clamp(28px,3.4vw,48px)] font-bold tracking-[-0.03em] text-white">
                        Mindset of a <span className="text-primary">Defender.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-6 mb-12">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="glass-card p-6 rounded-[20px] transition-all duration-300 ease-lift hover:border-primary/50 hover:-translate-y-1"
                        >
                            <div className="inline-flex p-3 mb-4 rounded-[14px] bg-primary/10">
                                <card.icon size={32} className="text-primary" />
                            </div>
                            <h3 className="text-[19px] font-bold text-white mb-3.5">{card.title}</h3>
                            <p className="text-zinc-400 text-sm leading-[1.7] text-pretty">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="relative p-[clamp(24px,3vw,40px)] rounded-[26px] bg-zinc-900/50 backdrop-blur-[12px] border border-primary/12 overflow-hidden">
                    <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[60%] h-[120%] bg-[radial-gradient(circle,rgba(220,38,38,0.12),transparent_65%)] blur-[40px]" />
                    <div className="relative max-w-[56rem] mx-auto text-center">
                        <Quote size={28} className="mx-auto text-primary/70" />
                        <p className="mt-5 text-zinc-300 text-[clamp(16px,1.4vw,20px)] leading-[1.75] text-pretty">
                            &ldquo;I build backends that hold their shape under pressure and payment
                            flows that settle every time — then I make the pipeline that ships them
                            boring, repeatable, and fast. Reliable processes are the
                            product.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
