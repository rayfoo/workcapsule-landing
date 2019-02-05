import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import LogoOnly from './Mockups/LogoOnly'

const Copyright = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  weight: 700;
`

const Text = styled.div`
  font-size: 14px;
  color: #ffffff;
  weight: 700;
`

const Level = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Footer = () => (
  <footer className="section" css={{ backgroundColor: '#222d50' }}>
    <div className="container" css={{ width: '100%' }}>
      <Level>
        <LogoOnly />

        <Text>
          Built in NYC by{' '}
          <strong>
            <a href="https://rayfuu.com" css={{ color: '#5EC3A6' }}>
              Ray Fu
            </a>
          </strong>
        </Text>

        <Text>
          <a href="mailto:hi@workcapsule.io">Contact</a>
        </Text>
      </Level>
      <Copyright>© 2019 Workcapsule. All rights reserved</Copyright>
    </div>
  </footer>
)

export default Footer
