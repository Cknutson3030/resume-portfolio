function Hero() {
  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center pt-16 border-b border-gray-800">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Chase Knutson</h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">Business Information Systems Student</h2>
        <p className="text-xl mb-8 text-gray-400">Designing cloud-based solutions, data workflows, and application systems</p>
        <a href="#contact" className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition inline-block">
          Get In Touch
        </a>
      </div>
    </section>
  )
}

export default Hero