import React from 'react'

import Intro from '../components/Intro'
import SignupForm from '../components/SignupForm'
import Hero from '../components/Hero'
import HeroBk from '../components/HeroBk'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../sass/mystyles.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HeroBk>
      <Intro />
      <SignupForm />

      <Hero />
      <div style={{ height: '40px' }} />
    </HeroBk>
  </Layout>
)

export default IndexPage
