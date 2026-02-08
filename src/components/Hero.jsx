function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-28">
        <div className="w-full text-center">
          <p className="mb-4 hidden sm:inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            SYSTEMS· DATA· CLOUD FUNDAMENTALS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight">
            Chase Knutson
          </h1>
          <h2 className="mt-4 text-lg sm:text-2xl text-slate-300">
            Business Information Systems Student
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-400">
            Building a strong foundation in systems, applications, and cloud fundamentals through hands on projects and coursework.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
