import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Inventory Management System",
        description: "A web application to manage inventory levels, orders, sales and  using Python-Django and Bootstrap.",
        image: "/projects/project1.png",
        tags: ["Python", "Django", "Bootstrap", "SQLite"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Sentinels: A 2D Gamified Learning Platform",
        description: "A 2D gamified learning platform that teaches the fundamentals of cybersecurity using Unity and C#.",
        image: "/projects/project2.png",
        tags: ["Unity", "C#", "Game Development", "Cybersecurity", "Firebase"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "CVE-2019-9053 POC Exploit",
        description: "A proof of concept exploit for CVE-2019-9053, a vulnerability in CMS Made Simple versions < 2.2.10 that allows remote code execution.",
        image: "/projects/project3.png",
        tags: ["Python", "Cybersecurity", "REST API", "Exploit", "Ethical Hacking"],
        demoUrl: "#",
        githubUrl: "#"
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-center text-primary text-xl font-semibold mb-10">
                    &lt;<span className="text-white">Projects</span>/&gt;
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="bg-card border border-border rounded-md overflow-hidden card-hover hover:border-primary flex flex-col"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 card-hover"
                                />
                                <div className="absolute top-3 right-3 flex gap-2">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 hover:text-primary"
                                    >
                                        <ExternalLink size={22} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 hover:text-primary"
                                    >
                                        <Github size={22} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-white text-lg font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 rounded border border-primary text-xs text-white transition-colors duration-200 hover:bg-primary hover:text-white cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="http://github.com/CaelumIsMe"
                        className="bg-primary text-primary-foreground px-8 py-3 rounded font-medium hover:scale-105 transition-transform duration-200 flex items-center gap-2 mx-auto w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}

