function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-gray-100 border-t border-gray-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl mb-12 text-gray-300">
          I'm always open to new opportunities and collaborations!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <a 
            href="mailto:chaseknutson30@gmail.com" 
            className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            📧 Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/chase-knutson" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            💼 LinkedIn
          </a>
          <a 
            href="https://github.com/Cknutson3030" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            💻 GitHub
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 Chase Knutson. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  )
}

export default Contact