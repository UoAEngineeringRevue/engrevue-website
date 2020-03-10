import { Link } from "gatsby"
import React from "react"
import styles from "./heroBanner.module.css"

import GoLLogo from "../../assets/images/index/game-of-loans-logo-white.png"

const HeroBanner = () => (
  <section className={styles.hero}>
    <div className={styles.heroContainer}>
      <div className={styles.heroTextArea}>
        <img src={GoLLogo} alt="Game of Loans" className={styles.heroLogo} />
        <h2 className={styles.heroText}>Now available to watch online!</h2>
        <div className={styles.heroBtn}>
          <Link to="/">WATCH NOW</Link>
        </div>
      </div>
    </div>
  </section>
)

export default HeroBanner
