import { useState } from "react";
import { Mail, MessageSquare, Send, User } from "lucide-react";

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus(null), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 tracking-[0.3em]">
                            Contact
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Start a <span className="text-primary">Conversation.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-6">Let's build something secure together.</h3>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                Whether you have a question about security audits, want to collaborate on a project, 
                                or just want to say hi, my inbox is always open.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                                        <Mail className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-wider">Email Me</div>
                                        <a href="mailto:roque.josephcharles@gmail.com" className="text-white font-medium hover:text-primary transition-colors">
                                            roque.josephcharles@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                                        <MessageSquare className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-wider">Socials</div>
                                        <div className="text-white font-medium">LinkedIn, GitHub, Twitter</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider ml-1">Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider ml-1">Message</label>
                                <textarea
                                    required
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can I help you?"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="cosmic-button w-full flex items-center justify-center gap-2 group"
                            >
                                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};