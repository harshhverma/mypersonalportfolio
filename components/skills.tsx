"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
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

  const skillCategories = [
    {
      name: "Salesforce Platform",
      color: "from-blue-500 to-cyan-500",
      skills: ["Apex", "Lightning Web Components", "CRM Workflows", "Validation Rules", "Flows", "Salesforce Admin"],
    },
    {
      name: "Full-Stack & Programming",
      color: "from-purple-500 to-pink-500",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Python", "C++", "SOQL/SOSL"],
    },
    {
      name: "Cloud & Dev Tools",
      color: "from-orange-500 to-red-500",
      skills: ["AWS (EC2, S3)", "Git & GitHub", "Docker", "Postman", "LDAP"],
    },
    {
      name: "Core CS",
      color: "from-green-500 to-emerald-500",
      skills: ["DBMS", "System Design", "Computer Networks", "REST APIs", "Security"],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all h-full">
                <h3
                  className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
