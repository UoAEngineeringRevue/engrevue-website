import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TicketsPage = () => {
  useEffect(() => {
    window.location.href =
      "https://www.iticket.co.nz/events/2021/aug/cs-get-degrease"
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default TicketsPage
