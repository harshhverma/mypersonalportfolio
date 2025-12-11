"use client"

import { Linkedin, Github, Mail, ExternalLink } from "lucide-react"

interface FooterProps {
  isDark: boolean
}

export default function Footer({ isDark }: FooterProps) {
  const socials = [
    { icon: Mail, href: "mailto:harshverma8305@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/harsh-verma-31a91b257", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/harshhverma", label: "GitHub" },
    { icon: ExternalLink, href: "https://salesforce.com/trailblazer/o543ou0ptpws7wid4z", label: "Trailblazer" },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-2 gradient-text">Harsh Verma</h3>
            <p className="text-sm text-foreground/60">Salesforce Developer | DRDO Intern | SIH 2024 Winner</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/60 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-foreground/60 hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>© 2025 Harsh Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
