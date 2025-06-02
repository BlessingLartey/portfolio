import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"

export function MainContent() {
  return (
    <div className="ml-auto w-1/2 lg:w-3/5 xl:w-2/3 p-12 lg:p-24">
      <About />
      <Experience />
      <Projects />
    </div>
  )
}
