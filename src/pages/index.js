import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/index/heroBanner"
import styles from "./index.module.css"

import AboutUsImage from "../assets/images/index/about-us.jpg"
import emailIcon from "../assets/images/icons/email-white-144px.png"
import fbIcon from "../assets/images/icons/facebook-logo-144px.png"
import instaIcon from "../assets/images/icons/instagram-logo-144px.png"
import ytIcon from "../assets/images/icons/youtube-logo-144px.png"
import scIcon from "../assets/images/icons/snapchat-logo-144px.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroBanner />
    <section className={styles.sectionRegular}>
      <div className={styles.container}>
        <h1>ABOUT US</h1>
        <div className={styles.aboutUsText}>
          <p>
            The Engineering Revue is an awesome show put on by the University of
            Auckland Faculty of Engineering at SkyCity Theatre. Established in
            2008, the Revue is an annual event drawing on the collective talent
            of nearly 100 students, from bright-eyed first years to world-weary
            post-graduates. Every aspect of the show, from writing and
            performance, through choreography and costume, to lighting and
            sound, is done by students. Heck, in the past we've even made an
            elevator, a pirate ship, & a dragon, and this year we made a temple! It all
            comes together for a night (or three) of acting, comedy, dancing,
            singing, and much more!
          </p>
          <div className={styles.aboutUsImageContainer}>
            <img
              src={AboutUsImage}
              alt="Indiana Jones and the Graders of the Lost Marks cast & crew"
              className={styles.aboutUsImage}
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className={styles.sectionRegular}>
        <div className={styles.container}>
          <h1>CONTACT US</h1>
          <p>
            Have some questions? Email us or check out our social media pages
            below.
          </p>

          <div className={styles.contactUsSocialContainer}>
            <a
              href="mailto:engrevue@gmail.com"
              className={styles.contactUsSocial}
            >
              <img
                src={emailIcon}
                className={styles.contactUsSocialIcon}
                alt="Email"
              />
              ENGREVUE@GMAIL.COM
            </a>
          </div>

          <div className={styles.contactUsSocialContainer}>
            <a
              href="https://www.facebook.com/EngineeringRevue/"
              className={styles.contactUsSocial}
            >
              <img
                src={fbIcon}
                className={styles.contactUsSocialIcon}
                alt="Facebook"
              />
              ENGINEERING REVUE
            </a>
          </div>

          <div className={styles.contactUsSocialContainer}>
            <a
              href="https://www.instagram.com/engrevue"
              className={styles.contactUsSocial}
            >
              <img
                src={instaIcon}
                className={styles.contactUsSocialIcon}
                alt="Instagram"
              />
              @ENGREVUE
            </a>
          </div>

          <div className={styles.contactUsSocialContainer}>
            <a
              href="https://www.youtube.com/user/Engrevue"
              className={styles.contactUsSocial}
            >
              <img
                src={ytIcon}
                className={styles.contactUsSocialIcon}
                alt="YouTube"
              />
              ENGINEERING REVUE
            </a>
          </div>

          <div className={styles.contactUsSocialContainer}>
            <a
              href="https://www.snapchat.com/add/engrevue"
              className={styles.contactUsSocial}
            >
              <img
                src={scIcon}
                className={styles.contactUsSocialIcon}
                alt="Snapchat"
              />
              ENGREVUE
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
