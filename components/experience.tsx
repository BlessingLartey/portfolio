import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "Jul 2024 – Nov 2025",
    title: "Digital Skills Expert (Contractor)",
    company: "MEST Africa",
    description:
      "Provided website development and support for innovators under the UNDP Young Africa Innovates (YAI) project. Collaborated with innovation teams to enhance site functionality, performance, and user experience. Delivered progress reports and ensured timely completion of deliverables with high compliance and quality standards.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    // link: "", // commented out for now
  },
  {
    period: "Apr 2024 – Jun 2024",
    title: "Graduate Intern – Full-Stack Developer",
    company: "Giacare",
    description:
      "Developed a full-stack Employee Assessment Platform using React, Node.js, and MongoDB. Implemented user authentication and CRUD operations to enhance platform functionality and security. Participated in Agile workflows, code reviews, and sprint planning.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    // link: "", // commented out
  },
  {
    period: "Oct 2022 – Sept 2023",
    title: "National Service – Web Developer",
    company: "IT Consortium",
    description:
      "Built an Internship Management System using HTML, CSS, and JavaScript, improving the internal application process for interns. Designed workflow mockups in Figma and collaborated with senior developers to enhance UX/UI. Gained foundational experience with Angular.",
    technologies: ["HTML", "CSS", "JavaScript", "Angular", "Figma"],
    // link: "", // commented out
  },
  {
    period: "Jan 2025 – Present",
    title: "Backend Developer – Freelance",
    company: "Freelancing",
    description:
      "Built and deployed the backend for a commercial website using Node.js, Express, and MongoDB. Implemented RESTful APIs for dynamic content management and user interactions, ensuring data security and optimized performance. Collaborated with the frontend team to integrate APIs and troubleshoot bugs.",
    technologies: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
    // link: "", // commented out
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
            className="group relative grid pb-1 transition-all lg:grid-cols-8 lg:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 lg:col-span-2">
              {exp.period}
            </header>

            <div className="z-10 lg:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    // href={exp.link}
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

      {/* <div className="mt-12">
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
      </div> */}
    </section>
  )
}
