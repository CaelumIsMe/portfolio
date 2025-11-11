import { Facebook, Instagram, Globe, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border text-foreground pt-10 pb-4">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Profile Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Charles Roque</h2>
          <p className="text-muted-foreground mb-4">
            Junior Pentester | Bug Bounty Hunter | Cybersecurity Enthusiast that is passionate about keeping the digital world safe.
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-[#18181b] p-2 rounded-md hover:bg-primary transition-colors"
            >
              <Github className="text-white" size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-[#18181b] p-2 rounded-md hover:bg-primary transition-colors"
            >
              <Facebook className="text-white" size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-[#18181b] p-2 rounded-md hover:bg-primary transition-colors"
            >
              <Instagram className="text-white" size={22} />
            </a>
            <a
              href="https://cosdevsph.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="bg-[#18181b] p-2 rounded-md hover:bg-primary transition-colors"
            >
              <Globe className="text-white" size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-default">
                About
              </span>
            </li>
            <li>
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-default">
                Experience
              </span>
            </li>
            <li>
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-default">
                Projects
              </span>
            </li>
            <li>
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-default">
                Tech Stack
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Get In Touch</h2>
          <ul className ="space-y-2">
            <li className="flex items-center gap-2">
              <span role="img" aria-label="location">
                📍
              </span>
              <span className="text-muted-foreground">Bacolod City, Negros Occidental, Philippines</span>
            </li>
            <li className="flex items-center gap-2">
              <span role="img" aria-label="email">
                ✉️
              </span>
              <a
                className="text-muted-foreground hover:text-primary transition-colors transition-duration-200"
                href="mailto:roque.josephcharles@gmail.com"
              >
                {" "}
                roque.josephcharles@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="text-primary" size={18} />
              <a 
                className="text-muted-foreground hover:text-primary transition-colors transition-duration-200"
                href="https://cosdevsph.vercel.app/"
                target="_blank"
              >
                COS Devs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-4 text-center text-muted-foreground text-sm">
        © 2025 Charles Roque. All rights reserved.
      </div>
    </footer>
  );
};