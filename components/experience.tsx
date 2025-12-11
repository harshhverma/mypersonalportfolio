"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "Software Development Intern",
      company: "DRDO (SAG)",
      period: "June 2025 – Present",
      description:
        "Built scalable AI DDoS protection system with 90%+ accuracy. Optimized ML models and incident pipeline for production deployment.",
      tech: ["MERN", "LDAP", "Tailwind CSS", "GitHub", "ML/AI"],
      color: "from-blue-500",
    },
    {
      title: "Web Developer Intern",
      company: "CipherByte Technologies",
      period: "Oct 2024 – Nov 2024",
      description:
        "Built responsive UI components and implemented performance optimizations including lazy loading. Reduced load time by 25%.",
      tech: ["React", "Tailwind CSS", "Performance Optimization"],
      color: "from-purple-500",
    },
    {
      title: "Founder & Leader",
      company: "InspireX E-Cell GGCT",
      period: "June 2023 – June 2025",
      description:
        "Led innovation ecosystem, mentored student startups, organized hackathons and tech events. Fostered entrepreneurial culture on campus.",
      tech: ["Leadership", "Event Management", "Mentorship", "Entrepreneurship"],
      color: "from-green-500",
    },
    {
      title: "Web Developer Intern",
      company: "GrowIntern",
      period: "Oct 2023 – Nov 2023",
      description: "Built responsive web pages and performed API integrations for multiple client projects.",
      tech: ["React", "REST APIs", "Responsive Design"],
      color: "from-orange-500",
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent md:transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="glass rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div
                      className={`absolute left-0 top-8 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} to-accent md:left-1/2 md:transform md:-translate-x-2 ring-4 ring-background`}
                    />

                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase size={20} className="text-primary" />
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                    </div>
                    <p className="text-primary font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-foreground/60 mb-4">{exp.period}</p>
                    <p className="text-foreground/70 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-muted text-foreground/70 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
