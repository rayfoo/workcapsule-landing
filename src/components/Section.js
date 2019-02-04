import React from 'react'
import styled from '@emotion/styled'

const Section = ({ children }) => (
  <div className="section" css={{ margin: '100px 0' }}>
    <div className="container">
      <div className="columns is-vcentered">{children}</div>
    </div>
  </div>
)

export const SectionImage = ({ children, align = 'left' }) => {
  if (align === 'left') {
    return <div className="column is-7">{children}</div>
  }

  return <div className="column is-7 is-offset-1">{children}</div>
}

export const SectionText = ({ children, align = 'left' }) => {
  if (align === 'left') {
    return <div className="column is-4">{children}</div>
  }

  if (align === 'center') {
    return (
      <div className="column has-text-centered is-8 is-offset-2">
        {children}
      </div>
    )
  }

  return <div className="column is-4 is-offset-1">{children}</div>
}

export default Section
