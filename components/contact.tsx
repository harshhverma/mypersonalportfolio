"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const contacts = [
    { icon: Mail, label: "Email", value: "harshverma8305@gmail.com", href: "mailto:harshverma8305@gmail.com" },
    // { icon: Phone, label: "Phone", value: "+91 8305259556", href: "tel:+918305259556" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "harsh-verma-31a91b257",
      href: "https://linkedin.com/in/harsh-verma-31a91b257",
    },
    { icon: Github, label: "GitHub", value: "@harshhverma", href: "https://github.com/harshhverma" },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Let's Connect</h2>
        <p className="text-center text-foreground/60 mb-16 text-lg">
          Reach out anytime-I'd be glad to collaborate, discuss ideas, or answer questions. I’m currently seeking an entry-level Salesforce Developer role to begin my career.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass rounded-lg p-4 flex items-center gap-4 hover:shadow-lg hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{contact.label}</p>
                      <p className="text-sm text-foreground/60">{contact.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <h3 className="text-2xl font-bold mb-8">Send me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
