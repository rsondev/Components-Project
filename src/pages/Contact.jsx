import React from 'react'
import ContactForm from '../components/ContactForm.jsx'
import Footer from '../components/Footer.jsx'

export default function Contact() {
  return (
    <>
      <div className="page-eyebrow">§04 Contact</div>
      <h1 className="page-title">Let's talk</h1>
      <p className="page-lede">
        The fastest way to reach me is the form below, or email directly
        at{' '}
        <a href="mailto:romersoncruzadora@gmail.com">Component Sample</a>.
      </p>

      <ContactForm />

      <Footer />
    </>
  )
}
