import React from 'react'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <div className="page-eyebrow">§01 About</div>
      <h1 className="page-title">
        I build things for the web that hold up under real use.
      </h1>
      <p className="page-lede">
        I'm a software developer who likes small, well-run teams and
        products that get simpler the longer you use them. Most of my
        work lives somewhere between backend plumbing and the interface
        people actually touch.
      </p>

      <p>
        Lately I've been deep in React and Node, with a soft spot for
        boring, reliable tools over trendy ones. Outside of work I
        maintain a couple of small open-source libraries and read more
        RFCs than is probably healthy.
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
        <Button href="/projects">See my work</Button>
        <Button href="/contact" variant="ghost">
          Get in touch
        </Button>
      </div>

      <div className="section">
        <h2 className="section-title">Currently</h2>
        <p>
          Working as a full-stack developer, shipping features during
          the day and small side projects at night. Open to interesting
          contract work and collaborations.
        </p>
      </div>

      <Footer />
    </>
  )
}
