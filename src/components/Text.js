import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const Max = styled.h1`
  color: ${props => (props.inverted ? 'white' : '#222d50')};
  letter-spacing: -1px;
  font-size: 36px;
  line-height: 36px;
  font-weight: 900;
  margin-bottom: 20px;

  @media (min-width: 769px) {
    font-size: 42px;
    line-height: 42px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 48px;
  }
`

export const Title = styled.h1`
  color: ${props => (props.inverted ? 'white' : '#222d50')};
  letter-spacing: -1px;
  font-size: 26px;
  font-weight: 700;
  line-height: 30px;

  @media (min-width: 769px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
    line-height: 46px;
  }
`

export const Subtitle = ({ inverted, children }) => (
  <h2
    className={inverted ? 'has-text-white' : 'has-text-grey-dark'}
    css={subtitle}
  >
    {children}
  </h2>
)

export const Body = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500px;
`

const subtitle = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media (min-width: 769px) {
    font-size: 18px;
    line-height: 26px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 28px;
  }
`
