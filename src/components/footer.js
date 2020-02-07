// import { Link } from "gatsby"
import React from "react"
import styles from "./footer.module.css"
import emailIcon from "../assets/images/icons/email-white-144px.png"
import fbIcon from "../assets/images/icons/facebook-logo-144px.png"
import instaIcon from "../assets/images/icons/instagram-logo-144px.png"
import ytIcon from "../assets/images/icons/youtube-logo-144px.png"
import scIcon from "../assets/images/icons/snapchat-logo-144px.png"

const Footer = () => (
  <footer>
    <div>
      <a href="mailto:engrevue@gmail.com" className={styles.socialIcon}>
        <img src={emailIcon} className={styles.socialImg} alt="Email" />
      </a>
      <a
        href="https://www.facebook.com/EngineeringRevue/"
        className={`${styles.socialIcon} ${styles.facebook}`}
      >
        <img src={fbIcon} className={styles.socialImg} alt="Facebook" />
      </a>
      <a
        href="https://www.instagram.com/engrevue"
        className={`${styles.socialIcon} ${styles.instagram}`}
      >
        <img src={instaIcon} className={styles.socialImg} alt="Instagram" />
      </a>
      <a
        href="https://www.youtube.com/user/Engrevue"
        className={`${styles.socialIcon} ${styles.youtube}`}
      >
        <img src={ytIcon} className={styles.socialImg} alt="YouTube" />
      </a>
      <a
        href="https://www.snapchat.com/add/engrevue"
        className={`${styles.socialIcon} ${styles.snapchat}`}
      >
        <img src={scIcon} className={styles.socialImg} alt="Snapchat" />
      </a>
    </div>
    <div className={styles.copyrightText}>
      <p style={{ margin: 0 }}>
        Copyright © {new Date().getFullYear()} Engineering Revue
      </p>
    </div>
  </footer>
)

export default Footer
