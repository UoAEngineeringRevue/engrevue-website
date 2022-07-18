import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PromoBanner from "../components/index/promoBanner"
import * as styles from "./index.module.css"

import AboutUsImage from "../assets/images/index/about-us.jpg"
import ContactUs from "../components/ContactUs"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PromoBanner />
    <section className={styles.sectionRegular}>
      <div className={styles.container}>
        <h1>ABOUT US</h1>
        <div className={styles.aboutUsText}>
          <p>
            The Engineering Revue is an awesome show put on by the University of
            Auckland Faculty of Engineering at SkyCity Theatre. Established in
            2008, the Revue is an annual event drawing on the collective talent
            of nearly 100 students, from bright-eyed first years to world-weary
            postgraduates. Every aspect of the show, from writing and
            performance, through choreography and costume, to lighting and
            sound, is done by students. Heck, in the past we've even made an
            elevator, a pirate ship, a dragon, and a temple! It all comes
            together for a night (or three) of acting, comedy, dancing, singing,
            and much more!
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

          <ContactUs type="Email" />
          <ContactUs type="Facebook" />
          <ContactUs type="Instagram" />
          <ContactUs type="YouTube" />
          <ContactUs type="Snapchat" />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
