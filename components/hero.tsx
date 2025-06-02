"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Dribbble, Linkedin } from "lucide-react"

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative h-screen flex flex-col bg-black">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white">
            BKL
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              HOME
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              ABOUT
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
              SKILLS
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              PORTFOLIO
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fade-in-up">HELLO</h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fade-in-up animation-delay-300">
              I'M BLESSING LARTEY
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-gray-300 text-sm md:text-base mb-8">
            <span>WEB DEVELOPER</span>
            <span className="hidden sm:inline">—</span>
            <span>UI/UX DESIGNER</span>
            <span className="hidden sm:inline">—</span>
            <span>BACKEND DEVELOPER</span>
          </div>

          <Button
            asChild
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <a href="#contact">HAVE PROJECT? LET'S TALK</a>
          </Button>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Twitter size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Dribbble size={24} />
        </a>
      </div>
    </section>
  )
}
