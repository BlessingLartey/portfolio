"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Safe Haven",
    description: "This is a responsive website built with html, css and JavaScript for a gift shop.",
    category: "html-css",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Employee Appraisal System",
    description:
      "This react project focuses on helping business owners keep correct records of their employees performances",
    category: "react",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Responsive Design",
    description: "This shows a view of my portfolio on a tablet screen",
    category: "responsive",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Mobile Responsive",
    description: "This is a phone screen responsiveness",
    category: "responsive",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "E-commerce API",
    description: "A package.json for an ecommerce api",
    category: "node",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "Todo Web App",
    description: "Built with html, css, JavaScript.",
    category: "html-css",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const categories = [
  { id: "all", label: "ALL" },
  { id: "html-css", label: "HTML/CSS" },
  { id: "react", label: "REACT JS" },
  { id: "responsive", label: "RESPONSIVE DESIGNS" },
  { id: "node", label: "NODE" },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">MY PROJECTS</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
            This is the summary of some projects I have worked on.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-white text-black hover:bg-gray-200"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900 border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
