import React from 'react'

// Component Button
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <div className="page-eyebrow">§01 About</div>
      <h1 className="page-title">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      </h1>
      <p className="page-lede">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.
      </p>

      <p>
       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.
        </p>
      </div>

      <Footer />
    </>
  )
}
