import React from 'react'
import { css } from '@emotion/core'
import Title, { Subtitle } from './Title'

const section = css`
  margin: 100px 0;
`

const Container = ({ children }) => (
  <section className="section" css={section}>
    <div className="container">{children}</div>
  </section>
)

const SectionWithTextLeft = ({ title, children, subtitle }) => (
  <Container>
    <div className="columns is-vcentered">
      <div className="column is-4">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>

      <div className="column is-7 is-offset-1">{children}</div>
    </div>
  </Container>
)

const SectionWithTextRight = ({ title, children, subtitle }) => (
  <Container>
    <div className="columns is-vcentered">
      <div className="column is-7">{children}</div>

      <div className="column is-4 is-offset-1">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </div>
  </Container>
)

const Section = ({ textPosition = 'left', ...rest }) => {
  if (textPosition === 'right') {
    return <SectionWithTextRight {...rest} />
  }

  if (textPosition === 'center') {
    return <div />
  }

  return <SectionWithTextLeft {...rest} />
}

export default Section
