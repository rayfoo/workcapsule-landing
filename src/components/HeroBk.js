import React from 'react'
import styled from '@emotion/styled'

import bk from '../images/hero_bk.svg'

const Container = styled.div`
  background: url(${bk});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const HeroBk = ({ children }) => <Container>{children}</Container>

export default HeroBk
