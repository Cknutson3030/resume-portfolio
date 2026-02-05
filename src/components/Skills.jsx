function Skills() {
  const skillCategories = {
    'Cloud & DevOps': ['AWS Lambda', 'S3', 'IAM', 'EventBridge', 'SNS', 'CloudWatch', 'Docker', 'Git'],
    'Development': ['Python', 'Java', 'C#', 'JavaScript', 'React', 'ASP.NET', 'HTML/CSS'],
    'Data & Analytics': ['SQL Server', 'MongoDB', 'SSIS (ETL)', 'Power BI'],
    'Systems & Support': ['Troubleshooting', 'Technical Documentation', 'Process Mapping', 'RESTful APIs']
  }

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-300">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-900 px-3 py-1 rounded text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills