import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { certifications } from "@shared/portfolio-data";

export default function Certifications() {
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
      id="certifications"
      className="py-20 md:py-32"
      data-testid="section-certifications"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient" data-testid="heading-certifications">
            Courses & Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Continuous learning and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`cert-item-${index}`}
                >
                  <div className="md:pl-20">
                    <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                    
                    <Card className="p-6 glassmorphism hover-elevate transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <i className={`${cert.icon} text-2xl text-primary`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                            <h3 className="text-lg font-semibold" data-testid={`text-cert-title-${index}`}>
                              {cert.title}
                            </h3>
                            <span className="text-sm text-muted-foreground whitespace-nowrap">
                              {cert.date}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground flex items-center gap-2" data-testid={`text-cert-issuer-${index}`}>
                            <i className="fas fa-building text-xs"></i>
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
