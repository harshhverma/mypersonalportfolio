"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

export default function Projects() {
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

  const projects = [
    {
      title: "CleanRoute360 – Smart Waste Collection CRM",
      description:
        "Enterprise Salesforce CRM solution for smart waste management with complaint tracking and supervisor analytics",
      tech: ["Salesforce", "Apex", "LWC", "Flows", "SOQL"],
      highlights: ["7+ Custom Objects", "Apex Automations", "LWC Portal", "Analytics Dashboard"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "GitGlimpse — MERN + AI Analytics Platform",
      description:
        "Comprehensive GitHub activity analyzer with AI-powered summaries and developer karma scoring system",
      tech: ["React", "Node.js", "MongoDB", "OpenAI", "GitHub API"],
      highlights: ["GitHub REST API", "AI Summaries", "Karma Scoring", "Portfolio Generator"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Real-Time DDoS Protection System — DRDO | SIH 2024",
      description:
        "AI-powered DDoS detection system with 90%+ accuracy, handling 5K+ requests/sec with real-time alerts",
      tech: ["MERN", "ML/AI", "Networking", "Security", "Real-time Alerts"],
      highlights: ["90%+ Accuracy", "5K+ req/sec", "Real-time Dashboard", "<5% False Positives"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Lightning Web Components Portal",
      description: "Public citizen portal built with Experience Cloud for complaint submission and real-time tracking",
      tech: ["LWC", "Salesforce", "Experience Cloud", "SOQL", "Flows"],
      highlights: ["Public Portal", "Real-time Updates", "Responsive Design", "Data Validation"],
      color: "from-green-500/20 to-emerald-500/20",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`glass rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all h-full bg-gradient-to-br ${project.color}`}
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-primary mb-2 uppercase">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground/60 mb-2 uppercase">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <button className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
