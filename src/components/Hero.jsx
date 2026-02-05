

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Chase Knutson</h1>
        <h2 className="text-2xl md:text-3xl mb-6">Business Information Systems Student</h2>
        <p className="text-xl mb-8">Hi, I'm Chase Knutson, a Business Information Systems student at Saskatchewan Polytechnic</p>
        <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get In Touch
        </a>
      </div>
    </section>
  )
}

export default Hero