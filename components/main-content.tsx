import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"

export function MainContent() {
  return (
    <div className="lg:ml-auto w-full lg:w-3/5 xl:w-2/3 p-6 lg:p-12 xl:p-24 pt-20 lg:pt-12">
      <About />
      <Experience />
      <Projects />
    </div>
  )
}
