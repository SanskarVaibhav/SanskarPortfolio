import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { internships } from "@shared/portfolio-data";

export default function Internships() {
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
      id="internships"
      className="py-20 md:py-32 bg-card/20"
      data-testid="section-internships"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient" data-testid="heading-internships">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Internships and work experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {internships.map((internship, index) => (
            <Card
              key={internship.id}
              className={`p-8 glassmorphism hover-elevate transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`card-internship-${index}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <i className={`${internship.logo} text-3xl text-primary`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1" data-testid={`text-internship-role-${index}`}>
                    {internship.role}
                  </h3>
                  <p className="text-base font-medium text-muted-foreground mb-1" data-testid={`text-internship-company-${index}`}>
                    {internship.company}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <i className="fas fa-calendar text-xs"></i>
                    {internship.duration}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2" data-testid={`list-responsibilities-${index}`}>
                  {internship.responsibilities.map((responsibility, respIndex) => (
                    <li
                      key={respIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                      data-testid={`item-responsibility-${index}-${respIndex}`}
                    >
                      <i className="fas fa-check-circle text-primary mt-1 flex-shrink-0"></i>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
