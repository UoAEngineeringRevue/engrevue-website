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
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
    <>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        paddingTop: `60px`,
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`
      }}
    >
      <main style={{ flexGrow: `1`, backgroundColor: `#121212` }}>{children}</main>
      <Footer />
    </div>
  </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
export default Layout
