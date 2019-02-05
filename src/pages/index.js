import React from 'react'

import Layout from '../components/layout'
import { Title, Subtitle, Body } from '../components/Text'
import Section, {
  SectionImage,
  SectionText,
  SectionHead,
  SectionBody,
  Item,
  ItemIcon,
} from '../components/Section'
import SEO from '../components/seo'
import '../sass/mystyles.scss'

import Intro from '../components/Intro'
import SignupForm from '../components/SignupForm'
import CallToAction from '../components/CallToAction'
import Mockups from '../components/Mockups'

import myIcon from '../images/icon.svg'

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

    {/*
     * SECTION ONE
     *
     * Stay motivated and achieve more with Workcaspule
     *
     */}
    <Section>
      <SectionImage hidden="mobile">
        <Mockups.Motivation />
      </SectionImage>

      <SectionText>
        <SectionHead>
          <Title>Boost motivation & productivity</Title>
        </SectionHead>

        <SectionBody>
          <Subtitle>
            Workcapsule is the <strong>anti-todo list</strong>. It helps you
            look back on all the things you’ve done and celebrate your wins.
            Give yourself a daily boost.
          </Subtitle>
        </SectionBody>
      </SectionText>

      <SectionImage hidden="tablet">
        <Mockups.Motivation />
      </SectionImage>
    </Section>

    {/*
     * SECTION TWO
     *
     * Capture what you worked on and how you felt
     *
     */}
    <Section>
      <SectionText>
        <SectionHead>
          <Title>Super simple & flexible</Title>
        </SectionHead>
        <SectionBody>
          <Item>
            <ItemIcon src={myIcon} />
            <Body>
              <strong>Simple - </strong>
              <span>Type and press enter. It's just that easy.</span>
            </Body>
          </Item>

          <Item>
            <ItemIcon src={myIcon} />
            <Body>
              <strong>Flexible - </strong>
              <span>
                Capture achievements, habits and everything in between.
              </span>
            </Body>
          </Item>

          <Item>
            <ItemIcon src={myIcon} />
            <Body>
              <strong>Fun - </strong>
              <span>An emoji is worth 1,000 words, right?</span>
            </Body>
          </Item>
        </SectionBody>
      </SectionText>

      <SectionImage>
        <Mockups.Reaction />
      </SectionImage>
    </Section>

    {/*
     * SECTION THREE
     *
     * Rewind and look back at your progress
     *
     */}
    <Section>
      <SectionImage hidden="mobile">
        <Mockups.Rewind />
      </SectionImage>

      <SectionText>
        <SectionHead>
          <Title>Stay accountable over time</Title>
        </SectionHead>

        <SectionBody>
          <Body>
            Workcapsule is the anti-todo list. It helps you look back on all the
            things you’ve done and celebrate your wins. Give yourself a daily
            boost.
          </Body>
        </SectionBody>
      </SectionText>

      <SectionImage hidden="tablet">
        <Mockups.Rewind />
      </SectionImage>
    </Section>

    {/*
     * SECTION FOUR
     *
     * Spot productivity with reporting
     *
     */}
    <Mockups.ConfettiBk>
      <Section>
        <SectionText align="center">
          <SectionHead>
            <Title>Spot trends over time</Title>
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

    {/*
     * SECTION Five
     *
     * Use channels
     *
     */}
    <div className="has-background-white-bis">
      <Section>
        <SectionImage hidden="mobile">
          <Mockups.Channel />
        </SectionImage>

        <SectionText>
          <SectionHead>
            <Title>Organize with channels </Title>
          </SectionHead>

          <SectionBody>
            <Body>
              Easily structure and navigate through your team's content. Stay up
              to date on what your team is working on and search through all the
              info.
            </Body>
          </SectionBody>
        </SectionText>

        <SectionImage hidden="tablet">
          <Mockups.Channel />
        </SectionImage>
      </Section>
    </div>

    {/*
     * SECTION Six
     *
     * Teams!
     *
     */}
    <Section>
      <SectionText>
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

      <SectionImage>
        <Mockups.Team />
      </SectionImage>
    </Section>

    <CallToAction />
  </Layout>
)

export default IndexPage
