import React from 'react'
import styled from '@emotion/styled'
import { Title, Subtitle } from './Text'

const ContainerStyles = styled.div`
  margin: 100px 0;
`

const Container = ({ children }) => (
  <ContainerStyles className="section">
    <div className="container">{children}</div>
  </ContainerStyles>
)

const SectionCentered = ({ title, subtitle, children }) => (
  <Container>
    <div css={{ marginBottom: '80px' }}>
      <div className="columns">
        <div className="column has-text-centered is-8 is-offset-2">
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>
      </div>
    </div>

    {children}
  </Container>
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
    return <SectionCentered {...rest} />
  }

  return <SectionWithTextLeft {...rest} />
}

export default Section
