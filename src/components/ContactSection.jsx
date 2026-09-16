import { useState } from "react";
import { Mail, MessageSquare, Send, User } from "lucide-react";

const formId = import.meta.env.VITE_FORMSPREE_ID;

/*
  max-sm:text-base is not cosmetic: iOS Safari force-zooms the whole page when a
  focused input is under 16px, and the user then has to pinch back out.
*/
const inputClasses =
    "w-full bg-black/40 border border-white/10 rounded-[14px] py-[13px] text-white text-[14.5px] max-sm:text-base outline-none transition-colors duration-300 focus:border-primary/60";

const labelClasses =
    "text-[11px] font-semibold text-zinc-400 uppercase tracking-[0.12em] ml-1";

const submitLabels = {
    sending: "Sending...",
    success: "Message Sent!",
    error: "Error Sending",
};

export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formId) {
            setStatus("error");
            console.error("Formspree form ID is not configured");
            setTimeout(() => setStatus(null), 3000);
            return;
        }

        setStatus("sending");

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        } finally {
            setTimeout(() => setStatus(null), 3000);
        }
    };

    const handleChange = (e) => {
        setFormData((previous) => ({ ...previous, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="relative py-10">
            <div className="container">
                <div className="max-w-[62rem] mx-auto">
                    <div className="flex flex-col items-center text-center mb-[26px]">
                        <span className="eyebrow text-xs tracking-[0.3em] mb-4">Contact</span>
                        <h2 className="text-[clamp(28px,3.4vw,48px)] font-bold tracking-[-0.03em] text-white">
                            Start a <span className="text-primary">Conversation.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-9">
                        {/* Contact info */}
                        <div className="flex flex-col justify-center min-w-0">
                            <h3 className="text-[25px] font-bold text-white tracking-[-0.02em] mb-5 text-balance">
                                Let's build something secure together.
                            </h3>
                            <p className="text-zinc-400 text-[15px] leading-[1.75] mb-8 text-pretty">
                                Whether you have a question about security audits, want to
                                collaborate on a project, or just want to say hi, my inbox is
                                always open.
                            </p>

                            <div className="flex flex-col gap-[18px]">
                                <div className="group flex items-center gap-4">
                                    <div className="flex-none inline-flex p-3 rounded-[14px] bg-white/5 border border-white/10 transition-colors duration-300 group-hover:border-primary/50">
                                        <Mail size={24} className="text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[11px] text-zinc-500 uppercase tracking-[0.12em]">
                                            Email Me
                                        </div>
                                        <a
                                            href="mailto:roque.josephcharles@gmail.com"
                                            className="text-white font-medium text-[14.5px] break-all transition-colors duration-300 hover:text-primary"
                                        >
                                            roque.josephcharles@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-4">
                                    <div className="flex-none inline-flex p-3 rounded-[14px] bg-white/5 border border-white/10 transition-colors duration-300 group-hover:border-primary/50">
                                        <MessageSquare size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] text-zinc-500 uppercase tracking-[0.12em]">
                                            Socials
                                        </div>
                                        <div className="text-white font-medium text-[14.5px]">
                                            LinkedIn, GitHub, Twitter
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="glass-card flex flex-col gap-[18px] p-8 rounded-[28px] min-w-0"
                        >
                            {/* Honeypot — hidden from sight, tab order and assistive tech */}
                            <input
                                type="text"
                                name="_gotcha"
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                className="hidden"
                            />

                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-name" className={labelClasses}>
                                    Name
                                </label>
                                <div className="relative">
                                    <User
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                                    />
                                    <input
                                        required
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        maxLength={100}
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className={`${inputClasses} pl-[46px] pr-4`}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-email" className={labelClasses}>
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                                    />
                                    <input
                                        required
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        maxLength={254}
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className={`${inputClasses} pl-[46px] pr-4`}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-message" className={labelClasses}>
                                    Message
                                </label>
                                <textarea
                                    required
                                    id="contact-message"
                                    name="message"
                                    rows="4"
                                    maxLength={5000}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can I help you?"
                                    className={`${inputClasses} px-4 resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                aria-live="polite"
                                className="btn-base btn-primary w-full px-[30px] py-3.5"
                            >
                                {submitLabels[status] ?? "Send Message"}
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
