import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import background from "../assets/images/404-bg.jpg"

const NotFoundPage = () => (
  <Layout bgImage={background} bgTint>
    <Seo title="404: Not found" />
    <section
      style={{
        color: "white",
        display: "grid",
        flex: `1`,
        placeContent: "start center",
        marginTop: "120px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: `48px` }}>NOT FOUND</h1>
      <p>Like the clothing in Boys' Dance, this page doesn&#39;t exist.</p>
    </section>
  </Layout>
)

export default NotFoundPage
