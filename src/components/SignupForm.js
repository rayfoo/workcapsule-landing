import React from 'react'
import styled from '@emotion/styled'

const Centered = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

class SignupForm extends React.Component {
  state = {
    email: '',
  }

  setEmail = e => {
    this.setState({ email: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    window.location.replace(
      `https://app.workcapsule.io/signup?email=${this.state.email}`
    )
  }

  render() {
    return (
      <form className="section" onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <Centered>
            <div className="control">
              <input
                value={this.state.email}
                onChange={this.setEmail}
                className="input is-primary is-medium"
                type="email"
                placeholder="Your email"
              />
            </div>

            <div className="control">
              <button className="button is-primary is-medium" type="submit">
                Sign up
              </button>
            </div>
          </Centered>
        </div>
      </form>
    )
  }
}

export default SignupForm
