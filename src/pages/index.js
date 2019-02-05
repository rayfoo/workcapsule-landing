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
      url="https://workcapsule.io"
      title="Workcapsule | Track all your achievements & habits"
      description="Workcapsule is an anti-todo list. It helps you look back on all the things you’ve done and celebrate your wins. Give yourself a daily boost."
      keywords={[`anti-todo`, `track habits`, `record daily activities`]}
      preview="https://s3.amazonaws.com/workcapsule.io/assets/landing_preview.png"
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
    {/* <Section>
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
    </Section> */}

    {/*
     * SECTION TWO
     *
     * Capture what you worked on and how you felt
     *
     */}
    <Section>
      <SectionText>
        <SectionHead>
          <Title>Stay motivated, achieve more</Title>
        </SectionHead>
        <SectionBody>
          <Item>
            <ItemIcon icon="far fa-times-circle" color="green" />
            <Body>
              <strong>An anti-todo list.</strong> There are no boxes to check
              off, no deadlines and no stress
            </Body>
          </Item>

          <Item>
            <ItemIcon icon="fas fa-glass-cheers" color="green" />
            <Body>
              <strong>Simply record what you did</strong> and go celebrate your
              wins, big or small
            </Body>
          </Item>

          <Item>
            <ItemIcon icon="far fa-grin-beam" color="green" />
            <Body>
              <strong>Use emojis to capture the moment </strong> and give
              yourself a little boost.
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
          <Title>Rewind and review</Title>
        </SectionHead>

        <SectionBody>
          <Item>
            <ItemIcon icon="far fa-calendar-alt" color="blue" />
            <Body>
              <strong>Look back and find</strong> your accomplishments from last
              week, month or any time
            </Body>
          </Item>

          <Item>
            <ItemIcon icon="far fa-list-alt" color="blue" />
            <Body>
              <strong>Make new habits stick</strong> by seeing your streaks and
              encouraging consistency
            </Body>
          </Item>

          <Item>
            <ItemIcon icon="far fa-arrow-alt-circle-right" color="blue" />
            <Body>
              <strong>Know if you are moving forward</strong> and making
              progress on important goals
            </Body>
          </Item>
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
            <Title>Get the big picture and spot trends</Title>
          </SectionHead>

          <SectionBody css={{ marginBottom: '40px' }}>
            <Subtitle>
              Detailed statistics to help you better understand how your energy
              is spent. Break down your data and identify productivity trends.
            </Subtitle>

            <div
              style={{
                fontSize: '12px',
                weight: 700,
                color: '#7d7d7d',
                marginTop: '12px',
              }}
            >
              *Feature coming soon
            </div>
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
            <Title>Organize with channels</Title>
          </SectionHead>

          <SectionBody>
            <Item>
              <ItemIcon icon="fas fa-th-large" color="red" />
              <Body>
                <strong>Flexible structure</strong> that adapts to your way of
                working
              </Body>
            </Item>

            <Item>
              <ItemIcon icon="far fa-eye" color="red" />
              <Body>
                <strong>Public channels</strong> allow you to share your wins
                with coworkers, friends and family
              </Body>
            </Item>

            <Item>
              <ItemIcon icon="fas fa-lock" color="red" />
              <Body>
                <strong>Private channels</strong> let you keep humble brags to
                yourself
              </Body>
            </Item>
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
          <Item>
            <ItemIcon icon="fas fa-sync" color="purple" />
            <Body>
              <strong>Keep your team in-sync</strong> and up to date on daily,
              weekly and monthly progress
            </Body>
          </Item>

          <Item>
            <ItemIcon icon="fas fa-inbox" color="purple" />
            <Body>
              <strong>Avoid unnecessary status meetings</strong> and keep track
              of all updates in one place
            </Body>
          </Item>

          <Item>
            <ItemIcon icon="far fa-check-square" color="purple" />
            <Body>
              <strong>Simplify performance reviews</strong> and never be left
              guessing how your team is doing
            </Body>
          </Item>
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
