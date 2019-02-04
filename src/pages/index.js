import React from 'react'

import Layout from '../components/layout'
import { Title, Subtitle, Body } from '../components/Text'
import Section, {
  SectionImage,
  SectionText,
  SectionHead,
  SectionBody,
} from '../components/Section'
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
        <SectionHead>
          <Title>Stay motivated, achieve more</Title>
        </SectionHead>

        <SectionBody>
          <Subtitle>
            Workcapsule is the anti-todo list. It helps you look back on all the
            things you’ve done and celebrate your wins. Give yourself a daily
            boost.
          </Subtitle>
        </SectionBody>
      </SectionText>
    </Section>

    <Section>
      <SectionText align="left">
        <SectionHead>
          <Title>Capture actions and reactions</Title>
        </SectionHead>
        <SectionBody>
          <Body>
            Workcapsule is the anti-todo list. It helps you look back on all the
            things you’ve done and celebrate your wins. Give yourself a daily
            boost.
          </Body>
        </SectionBody>
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
        <SectionHead>
          <Title>Rewind and review progress</Title>
        </SectionHead>

        <SectionBody>
          <Body>
            Workcapsule is the anti-todo list. It helps you look back on all the
            things you’ve done and celebrate your wins. Give yourself a daily
            boost.
          </Body>
        </SectionBody>
      </SectionText>
    </Section>

    <Mockups.ConfettiBk>
      <Section>
        <SectionText align="center">
          <SectionHead>
            <Title>Spot productivity trends over time</Title>
          </SectionHead>

          <SectionBody css={{ marginBottom: '40px' }}>
            <Subtitle>
              Workcapsule is the anti-todo list. It helps you look back on all
              the things you’ve done and celebrate your wins. Give yourself a
              daily boost.
            </Subtitle>
          </SectionBody>

          <Mockups.Report />
        </SectionText>
      </Section>
    </Mockups.ConfettiBk>

    <div className="has-background-white-bis">
      <Section>
        <SectionImage align="left">
          <Mockups.Channel />
        </SectionImage>

        <SectionText align="right">
          <SectionHead>
            <Title>Organize entries with channels </Title>
          </SectionHead>

          <SectionBody>
            <Body>
              Easily structure and navigate through your team's content. Stay up
              to date on what your team is working on and search through all the
              info.
            </Body>
          </SectionBody>
        </SectionText>
      </Section>
    </div>

    <Section>
      <SectionText align="left">
        <SectionHead>
          <Title>Perfect for the entire team</Title>
        </SectionHead>

        <SectionBody>
          <Body>
            Workcapsule is the anti-todo list. It helps you look back on all the
            things you’ve done and celebrate your wins. Give yourself a daily
            boost.
          </Body>
        </SectionBody>
      </SectionText>

      <SectionImage align="right">
        <Mockups.Team />
      </SectionImage>
    </Section>

    <CallToAction />
  </Layout>
)

export default IndexPage
