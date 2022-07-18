import React from "react"
import * as styles from "./footer.module.css"
import emailIcon from "../assets/images/icons/email-white-144px.png"
import fbIcon from "../assets/images/icons/facebook-logo-144px.png"
import instaIcon from "../assets/images/icons/instagram-logo-144px.png"
import ytIcon from "../assets/images/icons/youtube-logo-144px.png"
import scIcon from "../assets/images/icons/snapchat-logo-144px.png"

const Footer = () => (
  <footer>
    <div>
      <SocialIcon
        type="email"
        link="mailto:engrevue@gmail.com"
        icon={emailIcon}
      />
      <SocialIcon
        type="facebook"
        link="https://www.facebook.com/EngineeringRevue"
        icon={fbIcon}
      />
      <SocialIcon
        type="instagram"
        link="https://www.instagram.com/engrevue"
        icon={instaIcon}
      />
      <SocialIcon
        type="youtube"
        link="https://www.youtube.com/user/Engrevue"
        icon={ytIcon}
      />
      <SocialIcon
        type="snapchat"
        link="https://www.snapchat.com/add/engrevue"
        icon={scIcon}
      />
    </div>
    <div className={styles.copyrightText}>
      <p style={{ margin: 0 }}>
        Copyright © {new Date().getFullYear()} Engineering Revue
      </p>
    </div>
  </footer>
)

const SocialIcon = ({ type, link, icon }) => {
  const iconLogoStyle = styles[`${type}`]

  return (
    <a href={link} className={`${styles.socialIcon} ${iconLogoStyle}`}>
      <img src={icon} className={styles.socialImg} alt={type} />
    </a>
  )
}

export default Footer
