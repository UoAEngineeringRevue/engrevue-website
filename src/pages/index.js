import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactUs from "../components/ContactUs"
import Banner from "../components/Banner"

import * as styles from "./index.module.css"
//import RevueBg from "../assets/images/index/scooby-doo-bg-blank.jpg"
//import RevueBg from "../assets/images/index/banner-cast-2021.jpg"
import RevueBg from "../assets/images/index/2023-cast.jpeg"
//import RevueLogo from "../assets/images/index/charlie-logo-5.png"
import RevueLogo from "../assets/images/index/revue-logo.png"
//import RevueLogo from "../assets/images/index/scooby-doo-logo.png"
//import AboutUsImage from "../assets/images/index/2022-exec.jpg"
import AboutUsImage from "../assets/images/index/2023-exec.jpeg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/*<Banner
      background={RevueBg}
      color="white"
      logo={`${RevueLogo}`}
      heading="University of Auckland Engineering Revue"
      tint
      showDownBtn
/>*/}
    <Banner
      background={RevueBg}
      color="white"
      logo={`${RevueLogo}`}
      callToActionLink="https://www.iticket.co.nz/events/2024/aug/phineas-and-ferb"
      callToActionText="Buy Tickets"
      heading=""
      tint
      showDownBtn
    />
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
              alt="Scooby-Doo and the Dubious Scoop exec team"
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
          <ContactUs type="YouTube" />
          <ContactUs type="Facebook" />
          <ContactUs type="Instagram" />
          <ContactUs type="Snapchat" />
          <ContactUs type="TikTok" />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
