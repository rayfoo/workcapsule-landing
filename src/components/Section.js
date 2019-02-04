import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const styles = {
  section: css`
    margin: 80px 0;

    @media (min-width: 769px) {
      margin: 100px 0;
    }

    @media (min-width: 1024px) {
      margin: 168px 0;
    }
  `,
}

const Section = ({ children }) => (
  <div className="section" css={styles.section}>
    <div className="container">
      <div className="columns is-8 is-variable is-vcentered">{children}</div>
    </div>
  </div>
)

export const SectionImage = ({ children }) => {
  return <div className="column is-7-desktop">{children}</div>
}

export const SectionText = ({ children, align = 'left' }) => {
  if (align === 'center') {
    return (
      <div className="column has-text-centered is-10 is-offset-1">
        {children}
      </div>
    )
  }

  return <div className="column is-5-desktop">{children}</div>
}

export const SectionHead = styled.div`
  margin-bottom: 20px;

  @media (min-width: 769px) {
    margin-bottom: 32px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`

export const ItemIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`

export const SectionBody = styled.div``

export default Section
