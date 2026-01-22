"use client"

import { Download, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-sm font-medium text-primary">
            Welcome to my portfolio
          </div>

          <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Harsh Verma</span>
          </h1>

          <p className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground/80">
            Software Developer | DRDO Intern | SIH 2024 Winner
          </p>

          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Final-year CSE student skilled in Software Development, Salesforce development, and AI-driven security
            systems. Building scalable solutions that make an impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://drive.google.com/file/d/18yjiOVvhvroVtp4pCP0mfzt6rgQwNf0T/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download size={20} />
             View Resume
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-secondary/10 text-secondary border border-secondary/20 rounded-lg font-semibold hover:bg-secondary/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-6 text-foreground/60">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-lg group-hover:text-primary transition-colors">
                ⚡
              </div>
              <span className="text-xs">Salesforce</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-lg group-hover:text-primary transition-colors">
                ⚛️
              </div>
              <span className="text-xs">MERN</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-lg group-hover:text-primary transition-colors">
                🛡️
              </div>
              <span className="text-xs">AI Security</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-lg group-hover:text-primary transition-colors">
                ☁️
              </div>
              <span className="text-xs">AWS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
