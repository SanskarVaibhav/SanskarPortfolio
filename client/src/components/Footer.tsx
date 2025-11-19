import { personalInfo } from "@shared/portfolio-data";
import { MapPin, Mail, Clock, Github, Linkedin, Code2, BookOpen } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "November 19, 2025";

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { Icon: Github, url: personalInfo.social.github, label: "GitHub" },
    { Icon: Linkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
    { Icon: SiLeetcode, url: personalInfo.social.leetcode, label: "LeetCode" },
    { Icon: SiGeeksforgeeks, url: personalInfo.social.geeksforgeeks, label: "GeeksforGeeks" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-card/20" data-testid="footer">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">{personalInfo.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {personalInfo.title} passionate about building innovative solutions with cutting-edge technologies.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {personalInfo.currentLocation}, India
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4 flex-wrap">
              {socialLinks.map((link, index) => {
                const IconComponent = link.Icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                    aria-label={link.label}
                    data-testid={`footer-social-${link.label.toLowerCase()}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-primary transition-colors"
                data-testid="footer-email"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p data-testid="text-copyright">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-2" data-testid="text-last-updated">
              <Clock className="w-4 h-4" />
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
