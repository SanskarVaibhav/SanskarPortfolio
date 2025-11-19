import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { skills } from "@shared/portfolio-data";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    { title: "Primary Languages", skills: skills.primary, color: "primary" },
    { title: "Web Development", skills: skills.webDev, color: "accent" },
    { title: "AI/ML Tools", skills: skills.aiml, color: "chart-2" },
    { title: "Cloud & DevOps", skills: skills.cloud, color: "chart-4" },
    { title: "Developer Tools", skills: skills.tools, color: "chart-5" },
    { title: "Databases", skills: skills.databases, color: "chart-3" }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-32 bg-card/20"
      data-testid="section-skills"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient" data-testid="heading-skills">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`p-6 glassmorphism hover-elevate transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              data-testid={`card-skill-category-${categoryIndex}`}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/[.\s]/g, '-')}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center flex-shrink-0">
                      <i className={`${skill.icon} text-lg`} style={{ color: `hsl(var(--${category.color}))` }}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-card rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            backgroundColor: `hsl(var(--${category.color}))`,
                            transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
