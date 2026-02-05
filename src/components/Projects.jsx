function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">Portfolio Website</h3>
            <p className="text-gray-600 mb-4">
              A personal portfolio built with React and deployed on Vercel. 
              Features a responsive design and smooth scrolling navigation.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Tech:</strong> React, Tailwind CSS, Vite, Vercel
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
                View Project →
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
                GitHub →
              </a>
            </div>
          </div>

          {/* Add more project cards as you build them */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition border-2 border-dashed border-gray-300">
            <h3 className="text-2xl font-bold mb-3 text-gray-400">Coming Soon</h3>
            <p className="text-gray-400">
              More projects on the way...
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Projects