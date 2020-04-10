import React from "react"
import styles from "./heroBanner.module.css"


const HeroBanner = () => (
  <section className={styles.hero}>
    <div className={styles.heroContainer}>
      <div className={styles.heroTextArea}>
        <h1>PREVIOUS REVUES</h1>
        <p>Did you know we've been going for over 10 years!<br />See what we've been up to "recently"...</p>
      </div>
    </div>
  </section>
)

export default HeroBanner
