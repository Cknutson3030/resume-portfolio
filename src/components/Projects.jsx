function Projects() {
  const projects = [
    {
      title: "Serverless Financial Briefing Pipeline",
      description: "Serverless pipeline that aggregates financial news and generates AI briefings using Meta Llama 3.2 via Amazon Bedrock, delivered via email with automated archival to S3.",
      tech: "AWS Lambda, EventBridge, S3, SNS, CloudWatch, Amazon Bedrock, Python",
      github: "https://github.com/Cknutson3030"
    },
    {
      title: "Retail Customer ETL Pipeline",
      description: "ETL pipeline to ingest, transform, and join customer and transaction datasets with SQL-based reporting and comprehensive documentation.",
      tech: "SSIS, SQL Server",
      github: "https://github.com/Cknutson3030"
    },
    {
      title: "Client-Server Chat Framework",
      description: "Multi-client chat system using Java sockets with authentication, command-based protocol, and concurrent connection handling.",
      tech: "Java, Sockets, Multi-threading",
      github: "https://github.com/Cknutson3030"
    },
    {
      title: "EyeMax Cinemas Web Application",
      description: "Extended ASP.NET application with new UI logic, asynchronous updates, and backend database integration using stored procedures.",
      tech: "ASP.NET (Web Forms), SQL Server",
      github: "https://github.com/Cknutson3030"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 text-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition border border-gray-700">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Tech:</strong> {project.tech}
              </p>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-gray-300 font-semibold underline">
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects