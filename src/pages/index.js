import React from 'react'

import Intro from '../components/Intro'
import SignupForm from '../components/SignupForm'
import Hero from '../components/Hero'
import HeroBk from '../components/HeroBk'
import Layout from '../components/layout'
import Section from '../components/Section'
import SEO from '../components/seo'
import Motivation from '../components/Motivation'
import '../sass/mystyles.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HeroBk>
      <Intro />
      <SignupForm />

      <Hero />
    </HeroBk>

    <Section
      title="Stay motivated, achieve more"
      subtitle="Workcapsule is the anti-todo list. It helps you look back on all the things you’ve done and celebrate your wins. Give yourself a daily boost. "
    >
      <Motivation />
    </Section>
  </Layout>
)

export default IndexPage
