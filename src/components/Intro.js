import React from 'react'
import { Subtitle } from './Title'

const Intro = () => (
  <div className="section">
    <div className="container is-fluid has-text-centered">
      <h1
        className="is-size-3-mobile is-size-2-tablet is-size-1-desktop"
        style={{
          fontWeight: '900',
          letterSpacing: '-1px',
          color: '#222D50',
        }}
      >
        A timecapsule for work and play
      </h1>
      <Subtitle>Track all your achievements and activities</Subtitle>
    </div>
  </div>
)

export default Intro
