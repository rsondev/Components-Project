import React from 'react'

/**
 * Shared button component.
 *
 * variant: 'primary' | 'ghost'
 * as: 'button' | 'a'  — renders an <a> when you pass href
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) {
  const className = `btn ${variant === 'ghost' ? 'btn-ghost' : 'btn-primary'}`

  if (href) {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
