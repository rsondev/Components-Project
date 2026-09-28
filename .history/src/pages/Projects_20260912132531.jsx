import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import Footer from '../components/Footer.jsx'
import projects from '../data/projects.js'
import Button from '../components/Button.jsx'

export default function Projects() {
  return (
    <>
      <div className="page-eyebrow">§02 Projects</div>
      <h1 className="page-title">Sample Components Projects</h1>
      <p className="page-lede">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.
      </p>
      

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>

      <Footer />
    </>
  )
}
