import React from 'react'

import Intro from '../components/Intro'
import SignupForm from '../components/SignupForm'
import Hero from '../components/Hero'
import HeroBk from '../components/HeroBk'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import '../sass/mystyles.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Intro />

    <HeroBk>
      <SignupForm />

      <Hero />
    </HeroBk>
  </Layout>
)

export default IndexPage
