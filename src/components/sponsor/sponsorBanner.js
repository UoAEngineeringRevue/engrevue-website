import React from "react"
import styles from "./sponsorBanner.module.css"
import emailIcon from "../../assets/images/icons/email-white-144px.png"
import downIcon from "../../assets/images/icons/down-button.png"


const HeroBanner = () => (
  <section className={styles.hero}>
    <div className={styles.heroContainer}>
      <div className={styles.heroTextArea}>
        <h1 className={styles.title}>
          Sponsorship
        </h1>
        <p className={styles.subtext}>
          The generous support we receive from our sponsors enables us to continue pursuing our mission;
          to provide a welcoming and inclusive experience that complements the academic components of 
          studying an Engineering degree at the University of Auckland.
        </p>
        <div className={styles.heroBtnContainer}>
          <div className={styles.heroBtnVariant}>
            <a href="#more">
              <img onClick={window.scrollBy(0,100)} src={downIcon} className={styles.socialImg} alt="See more" /> SEE MORE...
            </a>
          </div>
          <div className={styles.heroBtn}>
            <a href="mailto:sponsorship.engrevue@gmail.com">
              <img src={emailIcon} className={styles.socialImg} alt="Email" /> GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
)

export default HeroBanner
