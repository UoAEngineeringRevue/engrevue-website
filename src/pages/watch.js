import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "./watch.module.css"

const WatchPage = () => (
  <Layout>
    <Seo title="Watch" />
    <section className={styles.background}>
      <div className={styles.container}>
        <h1>WATCH NOW</h1>
        <div>Put things here!</div>
      </div>
    </section>
  </Layout>
)

export default WatchPage
