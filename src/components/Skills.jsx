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
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    )

}

export default Skills