import React from 'react'
import { css } from '@emotion/core'
import Motivation from './Motivation'
import Title, { Subtitle } from './Title'

const section = css`
  margin: 100px 0;
`

const Container = ({ children }) => (
  <section className="section" css={section}>
    <div className="container">{children}</div>
  </section>
)

const Section = ({ children, title, subtitle, reverse = false }) => {
  if (reverse) {
    return (
      <Container>
        <div className="columns is-vcentered">
          <div className="column is-7">
            <Motivation />
          </div>

          <div className="column is-4 is-offset-1">
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="columns is-vcentered">
        <div className="column is-4">
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>

        <div className="column is-7 is-offset-1">
          <Motivation />
        </div>
      </div>
    </Container>
  )
}

export default Section
