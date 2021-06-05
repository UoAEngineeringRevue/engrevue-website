import React from "react"
import styles from "./sponsorBanner.module.css"
import emailIcon from "../../assets/images/icons/email-white-144px.png"
import downIcon from "../../assets/images/icons/down-button.png"
import { Link, animateScroll as scroll } from "react-scroll"
import * as text from "../../assets/text/sponsorBannerText" 

const HeroBanner = () => (
  <section className={styles.hero}>
    <div className={styles.heroContainer}>
      <div className={styles.heroTextArea}>
        <h1 className={styles.title}>{text.title}</h1>
        <p className={styles.subtext}>{text.subtitle}</p>
        <div className={styles.heroBtnContainer}>
          <Link
            activeClass="active"
            to="more"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <div className={styles.heroBtnVariant}>
              <a href="#more"> 
                <img src={downIcon} className={styles.socialImg} alt="See more" /> {text.seeMore} 
              </a>
            </div>
          </Link>          
          <div className={styles.heroBtn}>
            <a href="mailto:sponsorship.engrevue@gmail.com">
              <img src={emailIcon} className={styles.socialImg} alt="Email" /> {text.getInTouch}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
)

export default HeroBanner
