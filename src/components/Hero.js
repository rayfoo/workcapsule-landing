import React from 'react'
import styled from '@emotion/styled'

import product from '../images/product.gif'

const Gif = styled.img`
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  margin-top: 100px;
  width: 1500px;
`

const Hero = () => (
  <section className="section">
    <div className="container has-text-centered">
      <Gif src={product} />
    </div>
  </section>
)

export default Hero
