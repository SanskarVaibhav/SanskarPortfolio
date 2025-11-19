import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@shared/portfolio-data";
import { Download, Mail, ChevronDown, Github, Linkedin, Code2, BookOpen } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = personalInfo.tagline;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const socialLinks = [
    { Icon: Github, url: personalInfo.social.github, label: "GitHub" },
    { Icon: Linkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
    { Icon: SiLeetcode, url: personalInfo.social.leetcode, label: "LeetCode" },
    { Icon: SiGeeksforgeeks, url: personalInfo.social.geeksforgeeks, label: "GeeksforGeeks" }
  ];

  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in-up">
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient" data-testid="text-name">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6" data-testid="text-title">
              {personalInfo.title} from {personalInfo.location}
            </h2>
          </div>

          <div className="mb-8 animate-fade-in-up min-h-[60px]" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-muted-foreground" data-testid="text-tagline">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="px-8 py-6 text-base"
              onClick={handleDownloadResume}
              data-testid="button-download-resume"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base glassmorphism"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-contact"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }} data-testid="social-links">
            {socialLinks.map((link, index) => {
              const IconComponent = link.Icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                  aria-label={link.label}
                  data-testid={`link-social-${link.label.toLowerCase()}`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <div className="mt-16 animate-bounce">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to About"
              data-testid="button-scroll-down"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
