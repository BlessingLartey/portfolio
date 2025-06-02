"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed left-0 top-0 h-screen w-1/2 lg:w-2/5 xl:w-1/3 p-12 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-2">Blessing Lartey</h1>
          <h2 className="text-xl lg:text-2xl font-medium text-slate-200 mb-4">Full Stack Developer</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        <nav className="space-y-4">
          {[
            { id: "about", label: "ABOUT" },
            { id: "experience", label: "EXPERIENCE" },
            { id: "projects", label: "PROJECTS" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block text-left text-sm font-bold tracking-widest uppercase transition-colors duration-200 ${
                activeSection === item.id ? "text-slate-200" : "text-slate-500 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`h-px bg-slate-600 transition-all duration-200 mr-4 ${
                    activeSection === item.id ? "w-16" : "w-8"
                  }`}
                />
                {item.label}
              </div>
            </button>
          ))}
        </nav>
      </div>

      <div className="flex space-x-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
        >
          <Twitter size={24} />
        </a>
        <a
          href="mailto:bbklartey@gmail.com"
          className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  )
}
