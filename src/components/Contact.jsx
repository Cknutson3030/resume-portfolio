function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Contact</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Seeking a Full Time Role beginning May 2026</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-400">
          I'm open to full time positions in Systems, Cloud, or Data focused teams.
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a 
            href="mailto:chaseknutson30@gmail.com" 
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/chase-knutson" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Cknutson3030" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            GitHub
          </a>
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-slate-500">
          Copyright 2026 Chase Knutson. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  )
}

export default Contact
