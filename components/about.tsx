export function About() {
  return (
    <section id="about" className="mb-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>

      <div className="space-y-4 text-slate-400 leading-relaxed">
        <p>
          I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
          design with robust engineering. My favorite work lies at the intersection of design and development, creating
          experiences that not only look great but are meticulously built for performance and usability.
        </p>

        <p>
          Currently, I'm a Full Stack Developer at{" "}
          <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            Freelance
          </a>
          , specializing in accessibility. I contribute to the creation and maintenance of web applications that power
          modern digital experiences, ensuring our platforms meet web accessibility standards and best practices to
          deliver an inclusive user experience.
        </p>

        <p>
          In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
          <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            advertising agencies
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            large corporations
          </a>{" "}
          to{" "}
          <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            start-ups
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            small digital product studios
          </a>
          . Additionally, I also released a{" "}
          <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            comprehensive video course
          </a>{" "}
          a few years ago, guiding learners through building a web app with modern technologies.
        </p>

        <p>
          In my spare time, I'm usually coding, reading, hanging out with my family, or exploring new technologies and
          frameworks to stay current with industry trends.
        </p>
      </div>
    </section>
  )
}
