import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PromoBanner from "../components/index/promoBanner"
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
    <PromoBanner />
    <section className={styles.sectionRegular}>
      <div className={styles.container} style={{paddingBottom: "0px"}}>
        <div className={styles.flavourText}>
          <h1>7.30pm, October 1st - 3rd<br/>SkyCity Theatre</h1>
          <p>
            An ancient legend and a whole pile of terrible grades.
            Indi and her crew go digging for the reason, but quickly discover it's more than they imagined.
            Can they recover their lost marks?
          </p>
        </div>

        <br/>
        
        <p>
          The annual Auckland Engineering Revue - Auckland's only show entirely created and performed by 
          Engineering Students - has returned to parodying beloved cinema after a brief hiatus to parody
          prestige television.
          <br/><br/>
          As always, the show ranges from brilliant one-off comedy sketches and fantastic dance numbers
          to our brilliant jazz band and comedy short films! Whatever you’re looking for, we have it and
          you’re gonna want to see it!
          <br/><br/>
          In compliance with the lockdown Level 3 announcement in mid-August, we've postponed our show
          by about our month and will now be performing for three nights only from October 1st to
          October 3rd. See you there!
          <br/><br/>
          The 2020 Engineering Revue is proudly sponsored by <a href="https://www.mas.co.nz/" style={{color: "#ff801c"}}>MAS Insurance</a> and the <a href="https://wen.blogs.auckland.ac.nz/" style={{color: "#ff801c"}}>Women in Engineering Network (WEN)</a>.
        </p>

        <div className={styles.flavourBtn}>
          <a href="https://www.iticket.co.nz/events/2020/sep/indy-jones">
            CLICK HERE TO BUY TICKETS
          </a>
        </div>
      </div>
    </section>
    <section className={styles.sectionRegular}>
      <div className={styles.container}>
        <h1>ABOUT US</h1>
        <div className={styles.aboutUsText}>
          <p>
            The Engineering Revue is an awesome show put on by the University of
            Auckland Faculty of Engineering at SkyCity Theatre. Established in
            2008, the Revue is an annual event drawing on the collective talent
            of dozens of students, from bright-eyed first years to world-weary
            post-graduates. Every aspect of the show, from writing and
            performance, through choreography and costume, to lighting and
            sound, is done by students. Heck, in the past we've even made an
            elevator & a pirate ship, and last year we made a dragon! It all
            comes together for a night (or three) of acting, comedy, dancing,
            singing, and much more!
          </p>
          <div className={styles.aboutUsImageContainer}>
            <img
              src={AboutUsImage}
              alt="Game of Loans cast & crew"
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
