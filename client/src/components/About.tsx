import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { personalInfo } from "@shared/portfolio-data";
import { GraduationCap, MapPin, Calendar, School } from "lucide-react";

export default function About() {
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

  const highlights = [
    {
      Icon: GraduationCap,
      label: "CGPA",
      value: personalInfo.cgpa,
      description: "Current Academic Performance"
    },
    {
      Icon: School,
      label: "University",
      value: personalInfo.university,
      description: personalInfo.education
    },
    {
      Icon: MapPin,
      label: "Location",
      value: personalInfo.currentLocation,
      description: "Currently Based In"
    },
    {
      Icon: Calendar,
      label: "Graduation",
      value: personalInfo.graduationYear,
      description: "Expected Completion"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 relative"
      data-testid="section-about"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient" data-testid="heading-about">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg">
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glassmorphism p-2">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gradient">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gradient">{personalInfo.name}</p>
                  <p className="text-muted-foreground">{personalInfo.title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex flex-col justify-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="prose prose-invert max-w-none">
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6" data-testid="text-bio">
                {personalInfo.bio}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Currently pursuing my B.Tech in Computer Science and Engineering with specialization in AIML at {personalInfo.university}. 
                I have hands-on experience through internships at AWS Cloud and Google AIML programs, where I've worked on real-world projects 
                involving cloud computing, machine learning, and full-stack development.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <Card
                key={index}
                className={`p-6 glassmorphism hover-elevate transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                data-testid={`card-highlight-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xl font-bold mb-1" data-testid={`text-${item.label.toLowerCase()}`}>
                    {item.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
