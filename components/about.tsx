export function About() {
  return (
    <section id="about" className="mb-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>

      <div className="space-y-4 text-slate-400 leading-relaxed">
        <p>
          I'm a passionate Full Stack Web Developer with hands-on experience building responsive, user-friendly applications
          using React, Node.js, and MongoDB. I enjoy crafting pixel-perfect interfaces while ensuring performance, accessibility,
          and scalability.
        </p>

        <p>
          I've contributed to projects in various settings — from startups to educational initiatives. Most recently, I worked
          as a Digital Skills Expert at {/* <a href="https://mestafrica.org/" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"> */}MEST{/* </a> */},
          supporting innovators under the UNDP Young Africa Innovates project by developing and maintaining websites, enhancing
          user experience, and ensuring high-quality deliverables.
        </p>

        <p>
          My previous experience includes building an Internship Management System at {/* <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"> */}IT Consortium{/* </a> */},
          and developing a full-stack Employee Assessment Platform at {/* <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"> */}Giacare{/* </a> */}. I have also delivered freelance backend solutions for projects like {/* <a href="https://faivich.com/" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"> */}faivich.com{/* </a> */},
          ensuring seamless integration and performance optimization.
        </p>

        <p>
          In my spare time, I enjoy exploring new web technologies, improving my coding skills, and building personal
          projects to continue learning and innovating in the field of software development.
        </p>
      </div>
    </section>
  );
}
