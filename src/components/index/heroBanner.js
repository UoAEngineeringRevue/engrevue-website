import React from "react"
import styles from "./heroBanner.module.css"

import GotLMLogo from "../../assets/images/index/indy-jones-logo.png"
const HeroBanner = () => (
  <section className={styles.hero}>
    <div className={styles.heroContainer}>
      <div className={styles.heroTextArea}>
        <img
          src={GotLMLogo}
          alt="Indiana Jones and the Graders of the Lost Marks"
          className={styles.heroLogo}
        />
        <h2 className={styles.heroText}>
          Thank you for your support!
        </h2>
        <div className={styles.heroBtn}>
          <a href="https://www.facebook.com/EngineeringRevue">
            LIKE US ON FACEBOOK
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default HeroBanner
