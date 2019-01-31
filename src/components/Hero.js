import React from 'react'
import styled from '@emotion/styled'

import product from '../images/product.gif'

const Gif = styled.img`
  width: 800px;
`

const Hero = () => (
  <section className="section">
    <div className="container has-text-centered">
      <Gif src={product} />
    </div>
  </section>
)

export default Hero
