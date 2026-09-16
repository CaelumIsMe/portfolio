import { CreditCard, Database, Globe, KeyRound, Lock, Server } from "lucide-react";

const specializations = [
    {
        num: "01",
        icon: KeyRound,
        title: "Broken Access Control Mitigation",
        desc: "Enforcing correct authorization at every layer, from route guards to row-level rules.",
    },
    {
        num: "02",
        icon: Database,
        title: "Data Privacy",
        desc: "Encryption at rest and in transit, least-privilege access, and disciplined retention.",
    },
    {
        num: "03",
        icon: Globe,
        title: "Web App Security",
        desc: "Comprehensive security testing and vulnerability assessment.",
    },
    {
        num: "04",
        icon: Lock,
        title: "Secure by Design",
        desc: "Integrating security into the dev lifecycle (DevSecOps).",
    },
    {
        num: "05",
        icon: Server,
        title: "API Security",
        desc: "Restful and GraphQL API security assessments.",
    },
    {
        num: "06",
        icon: CreditCard,
        title: "Secure Payment Integration",
        desc: "Hardened checkout flows, signed webhooks, and payment integrations that fail safely.",
    },
];

const specTags = [
    "OWASP Top 10",
    "Threat Modeling",
    "Authentication",
    "Authorization",
    "Input Validation",
    "Session Management",
];

const techGroups = [
    {
        label: "Backend",
        items: [
            {
                num: "01",
                name: "Python / Django",
                desc: "Batteries-included APIs, ORM-backed data models, and admin tooling for production services.",
            },
            {
                num: "02",
                name: "Laravel",
                desc: "Expressive PHP application development with queues, auth, and clean service layers.",
            },
            {
                num: "03",
                name: "Node.js",
                desc: "Event-driven services, REST and realtime APIs, and tooling across the JavaScript ecosystem.",
            },
        ],
    },
    {
        label: "Frontend",
        items: [
            {
                num: "04",
                name: "Next.js",
                desc: "Server-rendered React applications with routing, data fetching, and edge-ready delivery.",
            },
        ],
    },
    {
        label: "Tools & DevOps",
        items: [
            {
                num: "05",
                name: "Docker",
                desc: "Containerised environments and reproducible builds from local development through deployment.",
            },
        ],
    },
];

const stackTags = [
    "CI/CD Pipelines",
    "Containerisation",
    "REST APIs",
    "Relational Databases",
    "Server-Side Rendering",
    "Queues & Background Jobs",
];

const TagRow = ({ tags }) => (
    <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
            <span key={tag} className="chip">
                {tag}
            </span>
        ))}
    </div>
);

export const SpecializationsSection = () => {
    return (
        <section id="specializations" className="relative py-10">
            <div className="container grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8 items-start">
                {/* Left — Deep Specializations */}
                <div className="min-w-0">
                    <span className="eyebrow text-[11px] tracking-[0.3em] mb-3">Focus Areas</span>
                    <h2 className="text-[clamp(26px,2.6vw,36px)] font-bold tracking-[-0.03em] text-white mb-[18px]">
                        Deep <span className="text-primary">Specializations.</span>
                    </h2>

                    <div className="flex flex-col gap-2.5">
                        {specializations.map(({ num, icon: Icon, title, desc }) => (
                            <div key={num} className="stack-row">
                                <span className="flex-none inline-flex p-[9px] rounded-xl bg-primary/12 border border-primary/22 text-primary">
                                    <Icon size={18} />
                                </span>
                                <div className="min-w-0">
                                    <div className="flex items-baseline gap-2.5">
                                        <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-zinc-600">
                                            {num}
                                        </span>
                                        <h3 className="text-white font-semibold text-[15px] tracking-[-0.01em] text-balance">
                                            {title}
                                        </h3>
                                    </div>
                                    <p className="mt-[5px] text-zinc-400 text-[13px] leading-[1.6] text-pretty">
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <TagRow tags={specTags} />
                </div>

                {/* Right — Technologies Used */}
                <div id="stack" className="min-w-0 scroll-mt-24">
                    <span className="eyebrow text-[11px] tracking-[0.3em] mb-3">Toolchain</span>
                    <h2 className="text-[clamp(26px,2.6vw,36px)] font-bold tracking-[-0.03em] text-white mb-[18px]">
                        Technologies <span className="text-primary">Used.</span>
                    </h2>

                    <div className="flex flex-col gap-[18px]">
                        {techGroups.map((group) => (
                            <div key={group.label} className="flex flex-col gap-2.5">
                                <div className="flex items-center gap-3.5">
                                    <span className="font-mono text-[10px] font-bold tracking-[0.26em] uppercase text-primary">
                                        {group.label}
                                    </span>
                                    <span className="flex-1 h-px bg-[linear-gradient(to_right,rgba(220,38,38,0.35),rgba(255,255,255,0.06))]" />
                                </div>

                                {group.items.map((tech) => (
                                    <div key={tech.num} className="stack-row">
                                        <span className="flex-none pt-1 font-mono text-[10px] font-bold tracking-[0.2em] text-primary">
                                            {tech.num}
                                        </span>
                                        <div className="min-w-0">
                                            <h3 className="text-white font-semibold text-[15px]">
                                                {tech.name}
                                            </h3>
                                            <p className="mt-[5px] text-zinc-400 text-[13px] leading-[1.6] text-pretty">
                                                {tech.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <TagRow tags={stackTags} />
                </div>
            </div>
        </section>
    );
};
