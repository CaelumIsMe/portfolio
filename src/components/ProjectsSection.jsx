import { ArrowRight, ExternalLink, Github, Layers } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Inventory Management System",
        description: "A professional-grade system for tracking stock levels, orders, and sales with real-time analytics and secure authentication.",
        image: "/projects/project1.png",
        tags: ["Python", "Django", "Bootstrap", "SQLite"],
        demoUrl: "#",
        githubUrl: "#",
        category: "Full Stack"
    },
    {
        id: 2,
        title: "Sentinels: 2D Learning Platform",
        description: "An immersive, gamified experience designed to teach cybersecurity fundamentals through interactive missions and challenges.",
        image: "/projects/project2.png",
        tags: ["Unity", "C#", "Game Dev", "Firebase"],
        demoUrl: "#",
        githubUrl: "#",
        category: "Game Dev"
    },
    {
        id: 3,
        title: "CVE-2019-9053 POC Exploit",
        description: "Advanced proof-of-concept exploit demonstrating RCE vulnerabilities, developed for educational and research purposes.",
        image: "/projects/project3.png",
        tags: ["Python", "Ethical Hacking", "Exploit"],
        demoUrl: "#",
        githubUrl: "#",
        category: "Cybersecurity"
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                            Portfolio
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Selected <span className="text-primary">Projects.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 max-w-md">
                        A showcase of my recent work in web development, security research, and interactive platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <article
                            key={key}
                            className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full"
                        >
                            {/* Project Image */}
                            <div className="aspect-video overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 right-4 flex gap-2 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors"
                                        title="View Source"
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors"
                                        title="Live Demo"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[11px] font-medium text-zinc-500 bg-white/5 px-2 py-1 rounded-md"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <a
                        href="https://github.com/CaelumIsMe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button flex items-center gap-2"
                    >
                        View More on GitHub
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}

