

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl mb-12">
          I'm always open to new opportunities and collaborations!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <a 
            href="mailto:chaseknutson30@gmail.com" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            📧 Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/chase-knutson" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            💼 LinkedIn
          </a>
          <a 
            href="https://github.com/Cknutson3030" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            💻 GitHub
          </a>
        </div>

        <p className="text-sm opacity-80">
          © 2026 Chase Knutson. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  )
}

export default Contact