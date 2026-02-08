function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h2 className="text-lg sm:text-xl font-semibold tracking-wide">Chase Knutson</h2>
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <li><a href="#about" className="transition hover:text-white">About</a></li>
          <li><a href="#skills" className="transition hover:text-white">Skills</a></li>
          <li><a href="#projects" className="transition hover:text-white">Projects</a></li>
          <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white/20"
        >
          Connect
        </a>
      </nav>
    </header>
  )
}

export default Header
