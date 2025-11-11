import { ArrowRight, Calendar, Clock } from "lucide-react";

const writeups = [
    {
        id: "001",
        date: "October 20, 2025",
        read: "8 min read",
        title: "Blind SQL Injection: Exploiting the Unseen",
        description: "A practical walkthrough of blind SQL injection, how to identify it, exploit it, and mitigate risks. Includes hands-on examples using BurpSuite and vulnerable labs.",
        tags: ["SQL Injection", "Blind SQLi", "BurpSuite", "JuiceShop"],
        link: "#"
    },
    {
        id: "002",
        date: "October 10, 2025",
        read: "7 min read",
        title: "SSRF Attacks: From Discovery to Exploitation",
        description: "Exploring Server-Side Request Forgery (SSRF) vulnerabilities, detection techniques, exploitation using BurpSuite, and real-world scenarios from CTFs and labs.",
        tags: ["SSRF", "BurpSuite", "DVWA", "CTF"],
        link: "#"
    },
    {
        id: "003",
        date: "September 28, 2025",
        read: "6 min read",
        title: "TryHackMe: Easy CTF Challenges for Beginners",
        description: "A beginner-friendly guide to solving easy CTF challenges on TryHackMe, covering basic enumeration, exploitation, and flag hunting strategies.",
        tags: ["TryHackMe", "CTF", "Enumeration", "Beginner"],
        link: "#"
    },
    {
        id: "004",
        date: "September 15, 2025",
        read: "9 min read",
        title: "BurpSuite Essentials: Web App Testing Made Simple",
        description: "An introduction to BurpSuite for web application security testing, with tips, tricks, and lab exercises using DVWA and JuiceShop.",
        tags: ["BurpSuite", "DVWA", "JuiceShop", "Web Security"],
        link: "#"
    }
];

export const WriteUpsSection = () => {
    return (
        <section id="write-ups" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-center text-primary text-xl font-semibold mb-10">
                    &lt;<span className="text-white">Write-ups</span>/&gt;
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {writeups.map((writeup, idx) => (
                        <div
                            key={idx}
                            className="bg-card border border-border rounded-md p-8 flex flex-col card-hover hover:border-primary group"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-primary font-semibold">ID: {writeup.id}</span>
                                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={16} /> {writeup.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={16} /> {writeup.read}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                                {writeup.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{writeup.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {writeup.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-3 py-1 rounded border border-primary text-xs text-white">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={writeup.link}
                                className="text-primary font-medium flex items-center gap-1 w-fit transition-all duration-300"
                            >
                                Read More
                                <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                                    <ArrowRight size={16} />
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <a
                        href="#"
                        className="border border-primary text-primary px-8 py-3 rounded font-medium hover:bg-primary hover:text-white transition-colors duration-200 w-fit mx-auto flex items-center"
                    >
                        View All Write-ups
                    </a>
                </div>
            </div>
        </section>
    );
}