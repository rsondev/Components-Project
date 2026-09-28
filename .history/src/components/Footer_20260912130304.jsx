import React from 'react'

export default function Footer() {
  return (
    <footer className="page-footer">
      <span>© {new Date().getFullYear()} Alex Rivera</span>
      <span>Built with React &amp; React Router</span>
    </footer>
  )
}
