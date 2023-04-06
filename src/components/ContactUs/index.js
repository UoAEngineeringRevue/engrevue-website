import React from "react"
import * as styles from "./style.module.css"

import RevueIcon from "../../assets/images/gatsby-icon.png"
import EmailIcon from "../../assets/images/icons/email-white-144px.png"
import FacebookIcon from "../../assets/images/icons/facebook-logo-144px.png"
import InstagramIcon from "../../assets/images/icons/instagram-logo-144px.png"
import YouTubeIcon from "../../assets/images/icons/youtube-logo-144px.png"
import SnapchatIcon from "../../assets/images/icons/snapchat-logo-144px.png"
import TikTokIcon from "../../assets/images/icons/tiktok-logo-144px.png"

const ContactUs = ({ type }) => {
  let icon
  let link
  let text
  switch (type) {
    case "Email":
      icon = EmailIcon
      link = "mailto:engrevue@gmail.com"
      text = "engrevue@gmail.com"
      break
    case "Facebook":
      icon = FacebookIcon
      link = "https://www.facebook.com/EngineeringRevue"
      text = "Engineering Revue"
      break
    case "Instagram":
      icon = InstagramIcon
      link = "https://www.instagram.com/engrevue"
      text = "@engrevue"
      break
    case "YouTube":
      icon = YouTubeIcon
      link = "https://www.youtube.com/c/EngineeringRevue"
      text = "Engineering Revue"
      break
    case "Snapchat":
      icon = SnapchatIcon
      link = "https://www.snapchat.com/add/engrevue"
      text = "engrevue"
      break
    case "TikTok":
      icon = TikTokIcon
      link = "https://www.tiktok.com/@engrevue"
      text = "engrevue"
      break
    default:
      icon = RevueIcon
      link = "https://engrevue.co.nz"
      text = ""
      break
  }

  return (
    <div className={styles.container}>
      <a href={link} className={styles.contactUs}>
        <img src={icon} className={styles.icon} alt={type} />
        {text}
      </a>
    </div>
  )
}

export default ContactUs
