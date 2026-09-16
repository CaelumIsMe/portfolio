import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Orki",
        category: "Payments · SaaS",
        description:
            "An AI board exam companion for LEPT, CSE, PmLE and CLE — flashcards, mock exams, and progress tracking for 500+ students. I own the money layer: a PayMongo checkout and subscription flow that has collected every peso it was asked to, without a single dropped payment.",
        image: "/orki-cosedevs.png",
        tags: ["PayMongo", "Subscriptions", "Next.js", "SaaS"],
        demoUrl: "https://orki.cosedevs.com",
        githubUrl: "https://orki.cosedevs.com",
        showSource: false,
    },
    {
        id: 2,
        title: "Sentinels: 2D Learning Platform",
        category: "Game Dev",
        description:
            "An immersive, gamified experience designed to teach cybersecurity fundamentals through interactive missions and challenges.",
        image: "/projects/project2.png",
        tags: ["Unity", "C#", "Game Dev", "Firebase"],
        demoUrl: "#",
        githubUrl: "#",
        showSource: true,
    },
    {
        id: 3,
        title: "ProSupport Squad",
        category: "Payments · Marketplace",
        description:
            "A US-facing marketplace to find, interview, hire, manage and pay virtual assistants. I built the backend — Stripe billing and Wise cross-border payouts that have yet to fail a transfer, part-time and full-time contract logic, scheduling, time tracking, and the cron jobs that keep it all settling on time — and managed the DigitalOcean server it runs on.",
        image: "/prosupport-squad.png",
        tags: ["Stripe", "Wise", "Laravel", "DigitalOcean", "Cron Jobs", "Server Management"],
        demoUrl: "https://prosupportsquad.com",
        githubUrl: "https://prosupportsquad.com",
        showSource: false,
    },
];

// Placeholder hrefs ("#") must not open a blank tab, so only real links get a target.
const externalLinkProps = (href) =>
    /^https?:\/\//i.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

export const ProjectsSection = () => {
    return (
        <section id="projects" className="relative py-10">
            <div className="container">
                <div className="flex flex-wrap items-end justify-between gap-5 mb-[26px]">
                    <div>
                        <span className="eyebrow text-xs tracking-[0.3em] mb-4">Portfolio</span>
                        <h2 className="text-[clamp(28px,3.4vw,48px)] font-bold tracking-[-0.03em] text-white">
                            Selected <span className="text-primary">Projects.</span>
                        </h2>
                    </div>
                    <p className="max-w-[28rem] text-zinc-500 text-[15px] leading-[1.7] text-pretty">
                        A showcase of my recent work in web development, payment integration, and
                        interactive platforms.
                    </p>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-5">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group glass-card flex flex-col rounded-[28px] overflow-hidden transition-all duration-400 ease-lift hover:border-primary/50 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent_55%)]" />

                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-[5px] rounded-full bg-black/60 backdrop-blur-[10px] border border-white/12 text-[10px] font-bold text-white uppercase tracking-[0.12em] whitespace-nowrap">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Revealed on hover, and on keyboard focus so the links stay reachable */}
                                <div className="absolute bottom-4 right-4 flex gap-2 translate-y-10 opacity-0 transition-all duration-500 ease-lift group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                    {project.showSource && (
                                        <a
                                            href={project.githubUrl}
                                            {...externalLinkProps(project.githubUrl)}
                                            title="View Source"
                                            aria-label={`View source of ${project.title}`}
                                            className="inline-flex p-[9px] rounded-full bg-white text-black transition-colors duration-300 hover:bg-primary hover:text-white"
                                        >
                                            <Github size={18} />
                                        </a>
                                    )}
                                    <a
                                        href={project.demoUrl}
                                        {...externalLinkProps(project.demoUrl)}
                                        title="Live Demo"
                                        aria-label={`Open the live demo of ${project.title}`}
                                        className="inline-flex p-[9px] rounded-full bg-white text-black transition-colors duration-300 hover:bg-primary hover:text-white"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 p-[22px]">
                                <h3 className="text-[19px] font-bold text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="flex-1 mb-4 text-zinc-400 text-sm leading-[1.7] text-pretty">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-[9px] py-1 rounded-[7px] bg-white/5 font-mono text-[11px] font-medium text-zinc-500 whitespace-nowrap"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-7 flex justify-center">
                    <a
                        href="https://github.com/CaelumIsMe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-base btn-secondary px-[30px] py-3.5"
                    >
                        View More on GitHub
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};
