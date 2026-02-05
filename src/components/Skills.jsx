function Skills() {
  const skills = [
    'React',
    'JavaScript',
    'HTML/CSS',
    'Git/GitHub',
    'AWS',
    'Business Analysis',
    'SQL',
    'Project Management'
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-blue-100 text-blue-800 rounded-lg p-4 text-center font-semibold hover:bg-blue-200 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills