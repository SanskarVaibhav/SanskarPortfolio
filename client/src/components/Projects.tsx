import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@shared/portfolio-data";

export default function Projects() {
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

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 md:py-32"
      data-testid="section-projects"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient" data-testid="heading-projects">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my best work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden glassmorphism hover-elevate transition-all group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <i className="fas fa-code text-6xl text-primary/40 relative z-10"></i>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="text-xl font-semibold flex-1" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3" data-testid={`text-project-desc-${index}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4" data-testid={`tech-stack-${index}`}>
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                      data-testid={`badge-tech-${tech.toLowerCase().replace(/[.\s]/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    asChild
                    data-testid={`button-github-${index}`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github mr-2"></i>
                      GitHub
                    </a>
                  </Button>
                  {project.liveDemo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                      data-testid={`button-demo-${index}`}
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt mr-2"></i>
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
