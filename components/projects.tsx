import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Safe Haven Gift Shop",
    description:
      "A responsive e-commerce website built with Tailwind, and NextJs. Features include product catalog, shopping cart functionality, and responsive design optimized for all devices.",
    image: "/images/safeHaven.png",
    technologies: ["Tailwind", "TypeScript", "NextJs", "Responsive Design"],
    liveLink: "https://stalwart-frangollo-ccb278.netlify.app/",
    githubLink: "https://github.com/BlessingLartey/Gift-Shop-e-comm",
  },
  {
    title: "Employee Appraisal System",
    description:
      "A React-based web application designed to help business owners track and manage employee performance reviews. Features include performance metrics, review scheduling, and detailed reporting.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "JavaScript", "CSS", "Local Storage"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E-commerce API",
    description:
      "A robust Node.js API for e-commerce applications with user authentication, product management, order processing, and payment integration. Built with Express and MongoDB.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Todo Web Application",
    description:
      "A clean and intuitive todo application built with vanilla JavaScript. Features include task creation, editing, deletion, local storage persistence, and responsive design.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    liveLink: "#",
    githubLink: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mb-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

            <div className="z-10 lg:order-2 lg:col-span-6">
              <h3>
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {project.title}
                    <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                  </span>
                </a>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400">{project.description}</p>

              <div className="flex items-center mt-2 space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-slate-400 hover:text-teal-300 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-slate-400 hover:text-teal-300 transition-colors"
                >
                  <Github size={16} />
                </a>
              </div>

              <ul className="mt-2 flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Image
              alt={project.title}
              loading="lazy"
              width={200}
              height={48}
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 lg:order-1 lg:col-span-2 lg:translate-y-1"
              src={project.image || "/placeholder.svg"}
            />
          </div>
        ))}
      </div>

      {/* <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
          href="#"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Project Archive
            </span>
            <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
          </span>
        </a>
      </div> */}
    </section>
  )
}
