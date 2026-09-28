import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'About', tag: '§01' },
  { to: '/projects', label: 'Projects', tag: '§02' },
  { to: '/data', label: 'Data', tag: '§03' },
  { to: '/contact', label: 'Contact', tag: '§04' },
]

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-top">
          <NavLink to="/" className="brand">
            Components Sample
          </NavLink>
          <div className="role">by Romerson Adora</div>

          <nav className="sidebar-nav">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <span className="tag">{link.tag}</span>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="sidebar-foot">
          <a href="mailto:hello@alexrivera.dev">hello@alexrivera.dev</a>
        </div>
      </aside>

      <div className="topbar">
        <NavLink to="/" className="brand">
          Alex Rivera
        </NavLink>
        <nav className="topbar-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
