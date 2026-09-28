import React, { useState } from 'react'
import Button from './Button.jsx'

const initialValues = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Tell me who you are.'
  if (!values.email.trim()) {
    errors.email = 'An email is needed so I can reply.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'That email address looks incomplete.'
  }
  if (!values.message.trim()) errors.message = "Add a message — even one line works."
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')

    // Wire this up to your own backend or a form service (Formspree,
    // Resend, etc.) — this simulates a network call so the UI has
    // something real to respond to.
    setTimeout(() => {
      setStatus('sent')
      setValues(initialValues)
    }, 700)
  }

  if (status === 'sent') {
    return (
      <div className="form-status">
        Message sent. I read every one and reply within a couple of days.
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          autoComplete="name"
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="email"
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && (
          <span className="field-error">{errors.message}</span>
        )}
      </div>

      <div>
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
      </div>
    </form>
  )
}
