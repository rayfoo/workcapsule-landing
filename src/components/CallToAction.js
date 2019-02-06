import React from 'react'
import styled from '@emotion/styled'

import { Title, Subtitle } from './Text'
import SignupForm from './SignupForm'
import swoosh from '../images/swoosh.svg'

const Swoosh = styled.img`
  width: 100%;
`

const Container = styled.div`
  margin: 100px 0 0 0;
  background-color: #222d50;
`

const Header = styled.div`
  margin: 100px 0 40px 0;
`

const Form = styled.form`
  padding-bottom: 100px;
`

const CallToAction = () => (
  <Container>
    <Swoosh src={swoosh} />

    <Header>
      <div className="columns">
        <div className="column has-text-centered is-8 is-offset-2">
          <Title inverted>Achieve more with Workcapsule</Title>
          <Subtitle inverted>Get started today, it's completely free</Subtitle>
        </div>
      </div>
    </Header>

    <Form>
      <SignupForm />
    </Form>
  </Container>
)

export default CallToAction
