import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PreviousShows from "../components/previousLayout"
import DisplayApp from "../components/displayShows"

import SEO from "../components/seo"

/* Need an "APP" element that does all of this for us.*/

const PreviousPage = () => (
  <Layout>
    <SEO title="Previous Revues" />
    {/* Need to break all back in to here at some stage, as it is all housed in PreviousShows. */}
    <div>
      <PreviousShows />
    </div>
    
  </Layout>
)


export default PreviousPage
