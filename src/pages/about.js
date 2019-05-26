import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/global/background-section.jsx'
import Info from '../components/home/info.jsx'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title='about us' style='about-background' />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: {eq: "about-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
