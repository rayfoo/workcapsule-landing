import React from 'react'
import styled from '@emotion/styled'

const Centered = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SignupForm = () => (
  <div className="section">
    <div className="field has-addons">
      <Centered>
        <div className="control">
          <input
            className="input is-primary is-medium"
            type="email"
            placeholder="Text input"
          />
        </div>

        <div className="control">
          <button className="button is-primary is-medium">Sign up</button>
        </div>
      </Centered>
    </div>
  </div>
)

export default SignupForm
