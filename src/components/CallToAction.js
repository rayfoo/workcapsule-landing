import React from 'react'
import styled from '@emotion/styled'

import Title, { Subtitle } from './Title'
import swoosh from '../images/swoosh.svg'

const Swoosh = styled.img`
  width: 100%;
`

const Container = styled.div`
  margin: 100px 0;
  background-color: #222d50;
`

const Header = styled.div`
  margin: 100px 0;
`

const Form = styled.form``

const CallToAction = () => (
  <Container>
    <Swoosh src={swoosh} />

    <Header>
      <div className="columns">
        <div className="column has-text-centered is-8 is-offset-2">
          <Title inverted>Achieve more with Workcapsule</Title>
          <Subtitle inverted>something</Subtitle>
        </div>
      </div>
    </Header>

    <Form>Form</Form>
  </Container>
)

export default CallToAction
