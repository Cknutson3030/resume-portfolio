function About() {
  return (
    <section id="about" className="bg-slate-100 py-20 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-start">
        <div className="lg:w-1/3">
        
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">About Me</h2>
        </div>
        <div className="lg:w-2/3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-4 text-base sm:text-lg text-slate-700">
              <p>
               I’m a Business Information Systems student at Saskatchewan Polytechnic in Moose Jaw, SK, preparing to begin my career in IT after graduation, with plans to relocate. Through coursework and projects, I’ve built hands on experience with systems, applications, data workflows, and cloud fundamentals.
              </p>
              <p>
                My current focus is building a strong foundation in systems and technical support, with growing interests in DevOps and Cloud practices as I continue to develop.
              </p>
              <p className="font-semibold text-slate-900">
                Expected graduation: April 28, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
