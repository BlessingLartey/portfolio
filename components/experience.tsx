import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2023 — PRESENT",
    title: "Full Stack Developer",
    company: "Freelance",
    description:
      "Build and maintain critical components used to construct web applications and mobile apps. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Next.js"],
    link: "#",
  },
  {
    period: "2022 — 2023",
    title: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Built, styled, and shipped high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including small businesses and large corporations.",
    technologies: ["JavaScript", "React", "HTML", "CSS", "WordPress"],
    link: "#",
  },
  {
    period: "2021 — 2022",
    title: "Junior Web Developer",
    company: "Tech Startup",
    description:
      "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with design and product teams to implement user-friendly interfaces and improve user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "PHP"],
    link: "#",
  },
]

export function Experience() {
  return (
    <section id="experience" className="mb-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {exp.period}
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {exp.title} · {exp.company}
                      <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </span>
                  </a>
                </div>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400">{exp.description}</p>

              <ul className="mt-2 flex flex-wrap">
                {exp.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
          href="/BlessingLartey-CV.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Résumé
            </span>
            <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
          </span>
        </a>
      </div>
    </section>
  )
}
