import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PreviousLayout from "../components/previousLayout"
import SEO from "../components/seo"



const PreviousPage = () => (
  <Layout>
    <SEO title="Previous Revues" />

    <h1 style={{
      paddingTop: '10px'

    }}>Previous Revues</h1>
    <p>Wow, this place was recently dusted!</p>

      <PreviousLayout year={'2019'} />
      <PreviousLayout year={'2018'} />
      <PreviousLayout year={'2017'} />
    
  </Layout>
)


export default PreviousPage
