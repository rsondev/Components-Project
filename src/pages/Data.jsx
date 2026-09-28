import React from 'react'
import { SkillBars, MetricGrid } from '../components/DataStats.jsx'
import Footer from '../components/Footer.jsx'
import { skills, metrics } from '../data/skills.js'

export default function Data() {
  return (
    <>
      <div className="page-eyebrow">§03 Data</div>
      <h1 className="page-title">Skills &amp; numbers</h1>
      <p className="page-lede">
        A rough, honest self-assessment rather than a wall of logos.
        Percentages are a feel for fluency, not a certification.
      </p>

      <SkillBars title="Languages & tools" items={skills} />

      <div className="section">
        <h2 className="section-title">By the numbers</h2>
        <MetricGrid items={metrics} />
      </div>

      <Footer />
    </>
  )
}
