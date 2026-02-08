function Skills() {
  const skillCategories = {
    'Cloud': ['AWS Lambda', 'S3', 'IAM', 'EventBridge', 'SNS', 'CloudWatch', 'VPC' ],
    'Development': ['Python', 'Java', 'C#', 'JavaScript', 'React', 'ASP.NET', 'HTML/CSS', 'Git'],
    'Data & Analytics': ['SQL Server', 'MongoDB', 'SSIS (ETL)', 'Power BI'],
    'Systems & Support': ['Troubleshooting', 'Technical Documentation', 'Process Mapping', 'Docker', 'RESTful APIs']
  }

  return (
    <section id="skills" className="bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-semibold">Technical Skills</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <h3 className="text-lg font-semibold text-slate-200">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200"
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
