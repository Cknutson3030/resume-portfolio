function Header() {
  return (
    <header className="bg-gray-900 text-gray-100 fixed top-0 w-full shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Chase Knutson</h2>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-gray-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header