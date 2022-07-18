import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PromoBanner from "../components/index/promoBanner"
import * as styles from "./index.module.css"

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
      <div className={styles.container} style={{ paddingBottom: "0px" }}>
        <div className={styles.flavourText}>
          <h1>
            7.30pm, August 26th - 28th
            <br />
            SkyCity Theatre
          </h1>
          <p>
            Star-crossed lovers Sandy and Danny are devastated as their summer
            internships come to an end. Torn apart by the distance between their
            universities, the two engineering students reminisce over those
            summer nights. But, a surprise reunion brings surprise
            opportunities, and with it a surprising clash between the lovebirds.
            Will they be able to overcome their differences and pass the
            semester? Join Sandy, Danny and the gang at the Engineering Revue to
            find out!
          </p>
        </div>

        <br />

        <p>
          The annual Auckland Engineering Revue (otherwise known as Auckland’s
          only show entirely created and performed by Engineering students)
          presented by MAS is back for its 14th annual performance, and it's
          sure to be The One That You Want (to watch)!
          <br />
          <br />
          As always, the show ranges from brilliant one-off comedy sketches and
          fantastic dance numbers to our brilliant jazz band and comedy short
          films! Whatever you’re looking for, we have it and you’re gonna want
          to see it!
          <br />
          <br />
          The 2021 Engineering Revue is proudly sponsored by{" "}
          <a href="https://www.mas.co.nz/" style={{ color: "#b31b20" }}>
            MAS Insurance
          </a>{" "}
          and{" "}
          <a href="https://nz.marshallday.com/" style={{ color: "#b31b20" }}>
            Marshall Day Acoustics
          </a>
          .
        </p>

        <div className={styles.flavourBtn}>
          <a href="https://www.iticket.co.nz/events/2021/aug/cs-get-degrease">
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
            of nearly 100 students, from bright-eyed first years to world-weary
            post-graduates. Every aspect of the show, from writing and
            performance, through choreography and costume, to lighting and
            sound, is done by students. Heck, in the past we've even made an
            elevator, a pirate ship, & a dragon, and last year we made a temple!
            It all comes together for a night (or three) of acting, comedy,
            dancing, singing, and much more!
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
              href="https://www.youtube.com/c/EngineeringRevue"
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
