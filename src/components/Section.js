import React from 'react'
import { css } from '@emotion/core'
import Motivation from './Motivation'

const section = css`
  margin: 100px 0;
`

const Section = ({ children, title, subtitle, reverse = false }) => {
  if (reverse) {
    return (
      <section className="section" css={section}>
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-7">
              <Motivation />
            </div>

            <div className="column is-4 is-offset-1">
              <h1
                className="is-size-4-mobile is-size-2-tablet"
                style={{ fontWeight: '700' }}
              >
                {title}
              </h1>

              <h2 className="is-size-6-mobile is-size-5-desktop">{subtitle}</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section" css={section}>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-4">
            <h1
              className="is-size-4-mobile is-size-2-tablet"
              style={{ fontWeight: '700' }}
            >
              {title}
            </h1>

            <h2 className="is-size-6-mobile is-size-5-desktop">{subtitle}</h2>
          </div>

          <div className="column is-7 is-offset-1">
            <Motivation />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
