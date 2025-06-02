import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const skills = [
  { name: "HTML5", level: 95, color: "#E44D26", icon: "/placeholder.svg?height=60&width=60" },
  { name: "CSS3, Tailwind, Bootstrap", level: 90, color: "#2965F1", icon: "/placeholder.svg?height=60&width=60" },
  { name: "JavaScript", level: 85, color: "#F7DF1E", icon: "/placeholder.svg?height=60&width=60" },
  { name: "React", level: 80, color: "#61DBFB", icon: "/placeholder.svg?height=60&width=60" },
  { name: "Node.js", level: 80, color: "#339933", icon: "/placeholder.svg?height=60&width=60" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">MY SKILLS</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I specialize in web development, building intuitive and responsive user interfaces. My expertise includes
            HTML, CSS, JavaScript, React, Node, Express and various web development tools. I'm always learning new
            technologies to stay current with industry trends and improve my skillset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="bg-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    width={60}
                    height={60}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 mb-4">{skill.name}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{skill.level}%</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
