import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import ShowViewer from "../components/shows/showviewer.js"

const Shows = () => (
  <Layout>
    <Seo title="Previous Revues" />
    <ShowViewer />
  </Layout>
)

export default Shows
