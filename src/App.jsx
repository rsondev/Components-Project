import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Data from './pages/Data.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/data" element={<Data />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <>
                <div className="page-eyebrow">404</div>
                <h1 className="page-title">Page not found</h1>
                <p>That page doesn't exist. Try the nav on the left.</p>
              </>
            }
          />
        </Routes>
      </main>
    </div>
  )
}
