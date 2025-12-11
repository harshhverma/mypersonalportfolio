"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Award } from "lucide-react"

export default function Achievements() {
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

  const achievements = [
    { icon: Trophy, label: "Smart India Hackathon 2024 – Winner", category: "Achievement" },
    { icon: Award, label: "NEC IIT Bombay Top 21 (2023 & 2024)", category: "Recognition" },
    { icon: Trophy, label: "Founder – InspireX E-Cell GGCT", category: "Leadership" },
  ]

  const certifications = [
    "20 Salesforce Superbadges — Ranger",
    "CCNA 1, 2, 3",
    "AWS Academy Cloud Foundations",
    "Python (Basic)",
    "Google Cloud Networking Fundamentals",
  ]

  return (
    <section id="achievements" ref={ref} className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Achievements & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Awards & Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="glass rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{achievement.label}</p>
                        <p className="text-sm text-foreground/60">{achievement.category}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-secondary">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
                  style={{ transitionDelay: `${(index + achievements.length) * 100}ms` }}
                >
                  <div className="glass rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                    <p className="font-medium text-foreground">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold mb-6 text-center">Verify My Credentials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="https://linkedin.com/in/harsh-verma-31a91b257"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-lg p-4 text-center hover:shadow-lg transition-shadow group"
            >
              <p className="font-semibold mb-1 group-hover:text-primary transition-colors">LinkedIn</p>
              <p className="text-sm text-foreground/60">Professional Profile</p>
            </a>
            <a
              href="https://salesforce.com/trailblazer/o543ou0ptpws7wid4z"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-lg p-4 text-center hover:shadow-lg transition-shadow group"
            >
              <p className="font-semibold mb-1 group-hover:text-primary transition-colors">Trailblazer</p>
              <p className="text-sm text-foreground/60">Salesforce Profile</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
