function Projects() {
  const projects = [
    {
      title: "Serverless Financial Briefing Pipeline",
      description: "Serverless pipeline that aggregates financial news and generates AI briefings using Meta Llama 3.2 via Amazon Bedrock, delivered via email with automated archival to S3.",
      tech: "AWS Lambda, EventBridge, S3, SNS, CloudWatch, Amazon Bedrock, Python",
      github: "https://github.com/Cknutson3030/daily-financial-ai-summary",
      badge: "Personal Project",
      badgeTone: "personal"
    },
    {
      title: "Retail Customer ETL Pipeline",
      description: "ETL pipeline to ingest, transform, and join customer and transaction datasets with SQL-based reporting and comprehensive documentation.",
      tech: "SSIS, SQL Server",
      github: null,
      badge: "School Project",
      badgeTone: "school"
    },
    {
      title: "Client-Server Chat Framework",
      description: "Multi-client chat system using Java sockets with authentication, command-based protocol, and concurrent connection handling.",
      tech: "Java, Sockets, Multi-threading",
      github: null,
      badge: "School Project",
      badgeTone: "school"
    },
    {
      title: "EyeMax Cinemas Web Application",
      description: "Extended ASP.NET application with new UI logic, asynchronous updates, and backend database integration using stored procedures.",
      tech: "ASP.NET (Web Forms), SQL Server",
      github: null,
      badge: "School Project",
      badgeTone: "school"
    }
  ]

  return (
    <section id="projects" className="bg-slate-100 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-semibold">Selected Work</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                {project.badge ? (
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                      project.badgeTone === "personal"
                        ? "border-sky-200 bg-sky-50 text-sky-600"
                        : "border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                  >
                    {project.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                {project.description}
              </p>
              <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">
                <span className="font-semibold text-slate-500">Tech:</span> {project.tech}
              </p>
              {project.github ? (
                <div className="mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition group-hover:border-slate-300 group-hover:text-slate-900"
                  >
                    View GitHub
                    <span aria-hidden>→</span>
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
