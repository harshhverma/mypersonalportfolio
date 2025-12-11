"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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

  const stats = [
    { number: "20+", label: "Salesforce Superbadges" },
    { number: "7+", label: "Major Projects" },
    { number: "3+", label: "Years Leadership" },
    { number: "Top 21", label: "NEC E-Cell IIT Bombay" },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Harsh Verma</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                I'm a final-year CSE student, Salesforce Developer, and Smart India Hackathon 2024 Winner, currently
                working as a Software Development Intern at DRDO (SAG) where I'm building a scalable AI-based DDoS
                protection system.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                I have hands-on 6+ month of training experience in Apex, Lightning Web Components, CRM workflows, 6 month of internship experience in MERN stack, integrations,
                security, networking, and have built production-level solutions like CleanRoute360 CRM and GitGlimpse
                analytics platform and DRDO solutions.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                I also founded InspireX E-Cell GGCT, leading innovation programs, hackathons, and peer mentorship to
                foster the entrepreneurial spirit on campus.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 glass rounded-xl p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h4 className="font-bold mb-3 text-primary">Key Highlights</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  SIH 2024 Winner for AI DDoS Protection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  20+ Salesforce Superbadges (Ranger)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  NEC IIT Bombay Top 21 (2023 & 2024)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
