import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Subtitle = ({ children }) => (
  <h2 className="has-text-grey-dark" css={subtitle}>
    {children}
  </h2>
)

const Title = styled.h1`
  color: #222d50;
  letter-spacing: -1px;
  font-size: 26px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 20px;

  @media (min-width: 769px) {
    font-size: 32px;
    line-height: 46px;
    margin-bottom: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
    line-height: 46px;
    margin-bottom: 40px;
  }
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

export default Title
export { Subtitle }
