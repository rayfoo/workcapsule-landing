import React from 'react'

import Layout from '../components/layout'
import { Title, Subtitle } from '../components/Text'
import Section, { SectionImage, SectionText } from '../components/Section'
import SEO from '../components/seo'
import '../sass/mystyles.scss'

import Intro from '../components/Intro'
import SignupForm from '../components/SignupForm'
import CallToAction from '../components/CallToAction'
import Mockups from '../components/Mockups'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Workcapsule"
      keywords={[`anti-todo`, `track habits`, `record daily activities`]}
    />

    <Mockups.HeroBk>
      <Intro />
      <SignupForm />

      <Mockups.Hero />
    </Mockups.HeroBk>

    <Section>
      <SectionImage align="left">
        <Mockups.Motivation />
      </SectionImage>

      <SectionText align="right">
        <Title>Stay motivated, achieve more</Title>
        <Subtitle>
          Workcapsule is the anti-todo list. It helps you look back on all the
          things you’ve done and celebrate your wins. Give yourself a daily
          boost.
        </Subtitle>
      </SectionText>
    </Section>

    <Section>
      <SectionText align="left">
        <Title>Capture actions and reactions</Title>
        <Subtitle>
          Workcapsule is the anti-todo list. It helps you look back on all the
          things you’ve done and celebrate your wins. Give yourself a daily
          boost.
        </Subtitle>
      </SectionText>

      <SectionImage align="right">
        <Mockups.Reaction />
      </SectionImage>
    </Section>

    <Section>
      <SectionImage align="left">
        <Mockups.Rewind />
      </SectionImage>

      <SectionText align="right">
        <Title>Rewind and review progress</Title>
        <Subtitle>
          Workcapsule is the anti-todo list. It helps you look back on all the
          things you’ve done and celebrate your wins. Give yourself a daily
          boost.
        </Subtitle>
      </SectionText>
    </Section>

    <Mockups.ConfettiBk>
      <Section>
        <SectionText align="center">
          <Title>Track progress over time</Title>
          <Subtitle>
            Workcapsule is the anti-todo list. It helps you look back on all the
            things you’ve done and celebrate your wins. Give yourself a daily
            boost.
          </Subtitle>
          <Mockups.Report />
        </SectionText>
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
