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
        A handful of things I've built recently, spanning side projects
        and freelance work. Each one taught me something I still use.
      </p>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <Button href="/projects">See my work</Button>
              <Button href="/contact" variant="ghost">
                Get in touch
              </Button>
            </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>

      <Footer />
    </>
  )
}
