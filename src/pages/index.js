import React from 'react'

import Intro from '../components/Intro'
import SignupForm from '../components/SignupForm'
import Layout from '../components/layout'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import SEO from '../components/seo'
import Mockups from '../components/Mockups'
import '../sass/mystyles.scss'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Workcapsule"
      keywords={[`anti-todo`, `track habits`, `record daily activities`]}
    />

    <Mockups.HeroBk>
      <Intro />
      <SignupForm />

      <Hero />
    </Mockups.HeroBk>

    <Section
      textPosition="right"
      title="Stay motivated, achieve more"
      subtitle="Workcapsule is the anti-todo list. It helps you look back on all the things you’ve done and celebrate your wins. Give yourself a daily boost. "
    >
      <Mockups.Motivation />
    </Section>

    <Section
      textPosition="left"
      title="Capture actions and reactions"
      subtitle="Workcapsule is the anti-todo list. It helps you look back on all the things you’ve done and celebrate your wins. Give yourself a daily boost. "
    >
      <Mockups.Reaction />
    </Section>

    <Section
      textPosition="right"
      title="Rewind and review progress"
      subtitle="Workcapsule is the anti-todo list. It helps you look back on all the things you’ve done and celebrate your wins. Give yourself a daily boost. "
    >
      <Mockups.Rewind />
    </Section>

    <Mockups.ConfettiBk>
      <Section
        textPosition="center"
        title="Track progress over time"
        subtitle="Easily structure and navigate through your team's content. Stay up to date on what your team is working on and search through all the info."
      >
        <div style={{ maxWidth: '800px' }}>
          <Mockups.Report />
        </div>
      </Section>
    </Mockups.ConfettiBk>

    <div className="has-background-white-bis">
      <Section
        textPosition="left"
        title="Organize entries with channels"
        subtitle="Easily structure and navigate through your team's content. Stay up to date on what your team is working on and search through all the info."
      >
        <Mockups.Channel />
      </Section>
    </div>

    <CallToAction />
  </Layout>
)

export default IndexPage
