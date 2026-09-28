import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import Footer from '../components/Footer.jsx'
import projects from '../data/projects.js'
import Button from '../components/Button.jsx'

export default function Projects() {
  return (
    <>
      <div className="page-eyebrow">§02 Projects</div>
      <h1 className="page-title">Selected work</h1>
      <p className="page-lede">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
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
