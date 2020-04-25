import { Link } from "gatsby"
import React from "react"
import styles from "./heroBanner.module.css"

import Revue20Logo from "../../assets/images/index/revue-2020-logo.png"
const HeroBanner = () => (
  <section className={styles.hero}>
    <div className={styles.heroContainer}>
      <div className={styles.heroTextArea}>
        <img src={Revue20Logo} alt="Engineering Revue 2020" className={styles.heroLogo} />
        <h2 className={styles.heroText}>Sign up for auditions now!</h2>
        <div className={styles.heroBtn}>
          <Link to="/signup">SIGN UP</Link>
        </div>
      </div>
    </div>
  </section>
)

export default HeroBanner
