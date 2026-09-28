import React from 'react'
import Button from './Button.jsx'

export default function ProjectCard({ project }) {
  const { title, year, description, stack, liveUrl, codeUrl } = project

  return (
    <article className="project-card">
      <div className="project-card-head">
        <h3>{title}</h3>
        <span className="project-year">{year}</span>
      </div>

      <p>{description}</p>

      <div className="project-stack">
        {stack.map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {(liveUrl || codeUrl) && (
        <div className="project-links">
          {liveUrl && (
            <Button href={liveUrl} variant="ghost">
              View live
            </Button>
          )}
          {codeUrl && (
            <Button href={codeUrl} variant="ghost">
              View code
            </Button>
          )}
        </div>
      )}
    </article>
  )
}
