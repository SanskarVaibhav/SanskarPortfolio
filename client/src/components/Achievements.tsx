import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { achievements } from "@shared/portfolio-data";
import { Trophy } from "lucide-react";

export default function Achievements() {
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
      id="achievements"
      className="py-20 md:py-32 bg-card/20"
      data-testid="section-achievements"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient" data-testid="heading-achievements">
            Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Hackathons and notable accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`achievement-item-${index}`}
                >
                  <div className="md:pl-20">
                    <div className="absolute left-6 w-5 h-5 rounded-full bg-accent border-4 border-background hidden md:block"></div>
                    
                    <Card className="p-6 glassmorphism hover-elevate transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                          <Trophy className="w-7 h-7 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                            <h3 className="text-lg font-semibold" data-testid={`text-achievement-title-${index}`}>
                              {achievement.title}
                            </h3>
                            <span className="text-sm text-muted-foreground whitespace-nowrap" data-testid={`text-achievement-date-${index}`}>
                              {achievement.date}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground" data-testid={`text-achievement-description-${index}`}>
                            {achievement.description}
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
