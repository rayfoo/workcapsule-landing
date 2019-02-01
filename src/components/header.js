import React from 'react'
import Logo from './Logo'

class Header extends React.Component {
  state = {
    isActive: false,
  }

  toggle = isActive => {
    this.setState({ isActive })
  }

  render() {
    const { isActive } = this.state

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container is-fluid">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://workcapsule.io">
              <span style={{ width: '150px' }}>
                <Logo />
              </span>
            </a>

            <a
              className={`navbar-burger burger ${isActive && 'is-active'}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => this.toggle(!isActive)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div
            id="navbarBasicExample"
            className={`navbar-menu ${isActive && 'is-active'}`}
          >
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a
                    href="https://app.workcapsule.io/login"
                    className="button is-white"
                  >
                    <span className="has-text-primary">Login</span>
                  </a>
                  <a
                    href="https://app.workcapsule.io/signup"
                    className="button is-primary"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
