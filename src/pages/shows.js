import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import poster2019 from "../assets/images/previous/2019.jpg"
import programme2019 from "../assets/images/previous/2019/programme.pdf"

import ShowViewer from "../components/shows/showviewer.js"

const Shows = () => (
  <Layout>
    <SEO title="Previous Revues" />
    <ShowViewer />
  </Layout>
)


export default Shows
