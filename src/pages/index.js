import React from 'react'

import Intro from '../components/Intro'
import SignupForm from '../components/SignupForm'
import Hero from '../components/Hero'
import HeroBk from '../components/HeroBk'
import TriangleBk from '../components/TriangleBk'
import ConfettiBk from '../components/ConfettiBk'
import Layout from '../components/layout'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import SEO from '../components/seo'
import Motivation from '../components/Motivation'
import Reaction from '../components/Reaction'
import '../sass/mystyles.scss'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Workcapsule"
      keywords={[`anti-todo`, `track habits`, `record daily activities`]}
    />

    <HeroBk>
      <Intro />
      <SignupForm />

      <Hero />
    </HeroBk>

    <Section
      textPosition="right"
      title="Stay motivated, achieve more"
      subtitle="Workcapsule is the anti-todo list. It helps you look back on all the things you’ve done and celebrate your wins. Give yourself a daily boost. "
    >
      <Motivation />
    </Section>

    <TriangleBk>
      <Section
        textPosition="left"
        title="Capture actions and reactions"
        subtitle="Workcapsule is the anti-todo list. It helps you look back on all the things you’ve done and celebrate your wins. Give yourself a daily boost. "
      >
        <Reaction />
      </Section>

      <Section
        textPosition="right"
        title="Rewind and review progress"
        subtitle="Workcapsule is the anti-todo list. It helps you look back on all the things you’ve done and celebrate your wins. Give yourself a daily boost. "
      >
        <Motivation />
      </Section>

      <div className="has-background-white-bis">
        <Section
          textPosition="left"
          title="Organize your entries in channels"
          subtitle="Easily structure and navigate through your team's content. Stay up to date on what your team is working on and search through all the info."
        >
          <Motivation />
        </Section>
      </div>

      <ConfettiBk>
        <Section
          textPosition="center"
          title="Track progress over time"
          subtitle="Easily structure and navigate through your team's content. Stay up to date on what your team is working on and search through all the info."
        >
          <Motivation />
        </Section>
      </ConfettiBk>
    </TriangleBk>

    <CallToAction />
  </Layout>
)

export default IndexPage
