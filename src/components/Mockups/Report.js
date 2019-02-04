import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const styles = css`
  border-radius: 8px;
  box-shadow: 0 32px 30px 0 rgba(0, 0, 0, 0.19);
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        report: file(relativePath: { eq: "report.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img fluid={data.report.childImageSharp.fluid} css={styles} />
    )}
  />
)
export default Image
