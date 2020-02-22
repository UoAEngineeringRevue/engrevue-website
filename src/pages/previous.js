import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PreviousLayout from "../components/previousLayout"
import SEO from "../components/seo"



const PreviousPage = () => (
  <Layout>
    <SEO title="Previous Revues" />

      <PreviousLayout year={'2019'} />
      <Link to="/engineeringrevue2019/">View details.</Link>
      <PreviousLayout year={'2018'} />
      <PreviousLayout year={'2017'} />
    
  </Layout>
)


export default PreviousPage
