import React from 'react'
import styled from '@emotion/styled'

import product from '../../images/product.gif'

const Gif = styled.img`
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  margin-top: 40px;
  width: 1500px;
  border-radius: 8px;
  box-shadow: 0 32px 30px 0 rgba(0, 0, 0, 0.19);
`

const Hero = () => (
  <section className="section">
    <div className="container has-text-centered">
      <Gif src={product} />
    </div>
  </section>
)

export default Hero
