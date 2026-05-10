import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";

const writeups = [
    {
        id: "001",
        date: "Oct 20, 2025",
        read: "8 min",
        title: "Blind SQL Injection: Exploiting the Unseen",
        description: "A practical walkthrough of blind SQL injection, identification techniques, and real-world mitigation strategies.",
        tags: ["SQL Injection", "BurpSuite"],
        link: "#"
    },
    {
        id: "002",
        date: "Oct 10, 2025",
        read: "7 min",
        title: "SSRF Attacks: From Discovery to Exploitation",
        description: "Exploring SSRF vulnerabilities and detection techniques used in high-stakes penetration testing.",
        tags: ["SSRF", "Cybersecurity"],
        link: "#"
    },
    {
        id: "003",
        date: "Sep 28, 2025",
        read: "6 min",
        title: "TryHackMe: Easy CTF Challenges for Beginners",
        description: "A beginner-friendly guide to solving easy CTF challenges and building a solid hacking foundation.",
        tags: ["CTF", "TryHackMe"],
        link: "#"
    },
    {
        id: "004",
        date: "Sep 15, 2025",
        read: "9 min",
        title: "BurpSuite Essentials: Web App Testing Made Simple",
        description: "Mastering the industry-standard tool for web security testing and vulnerability assessment.",
        tags: ["BurpSuite", "Web Sec"],
        link: "#"
    }
];

export const WriteUpsSection = () => {
    return (
        <section id="write-ups" className="py-24 px-4 relative">
            <div className="container">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 tracking-[0.3em]">
                        Knowledge Sharing
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Technical <span className="text-primary">Write-ups.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {writeups.map((writeup, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-8 rounded-3xl group flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                                    <BookOpen size={14} />
                                    <span>#{writeup.id}</span>
                                </div>
                                <div className="flex items-center gap-4 text-zinc-500 text-xs font-medium">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} /> {writeup.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} /> {writeup.read}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {writeup.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                                {writeup.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {writeup.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={writeup.link}
                                className="text-white font-semibold flex items-center gap-2 group/link w-fit"
                            >
                                Read Full Article
                                <ArrowRight size={18} className="text-primary group-hover/link:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="#"
                        className="secondary-button"
                    >
                        Explore All Articles
                    </a>
                </div>
            </div>
        </section>
    );
}