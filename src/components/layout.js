/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "../assets/fonts/fonts.css"

const Layout = ({ bgImage, bgTint, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const bgImageCss = bgImage && {
    backgroundBlendMode: "multiply",
    backgroundImage: `url(${bgImage})`,
  }

  const bgTintCss = bgTint && {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          paddingTop: `60px`,
          minHeight: `100vh`,
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        <main
          style={{
            backgroundAttachment: "fixed",
            backgroundColor: `#121212`,
            ...bgImageCss,
            ...bgTintCss,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            flexGrow: `1`,
            paddingBottom: `36px`,
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
