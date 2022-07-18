import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./sponsor.module.css"

import picture1 from "../assets/images/sponsor/Saturday-23.jpg"
import picture2 from "../assets/images/sponsor/DSC06330.jpg"

import SponsorBanner from "../components/sponsor/sponsorBanner"

const Sponsor = () => (
  <Layout>
    <Seo title="Sponsor Us" />
      <SponsorBanner />
      <section id="more" className={styles.section}>
        <div class={styles.container}>
          <div className={styles.rowText}>
            <div>
              <h2> OUR LEGACY </h2>
              <p>
                For the last 13 years, the Auckland Engineering Revue has continued to grow in presence within the 
                faculty and has quickly become one of the calendar highlights of the year. The 2020 show was very well
                received, with a total audience of over 1400 people. Leading into 2021, the Auckland Engineering
                Revue aims to maintain its strong presence on campus, with a fantastic new cast and a wonderful executive
                body dedicated to making their best show yet!
                <br/>
              </p>
              <h2> OUR MISSION </h2>
              <p>
                Our mission is to bring students together from all year levels and engineering disciplines to form
                meaningful connections with their peers, provide a rich and rewarding contrast to academic studies,
                and create a positive, welcoming environment where everyone is given the opportunity to thrive!
              </p>
            </div>
            <div class={styles.imageContainerLeft}>
              <img src={picture1} className={styles.dispImage} alt="dancing" />
            </div>
          </div>
          <div className={styles.rowText}>
            <div class={styles.imageContainerRight}>
              <img src={picture2} className={styles.dispImage} alt="friends" />
            </div>            
            <div>
              <h2 className={styles.h2alt}> YOUR SUPPORT </h2>
              <p>
                Your partnership means everything to us. It represents your support of our mission and helps ensure
                our show is as accessible and successful as possible!
                <br/><br/>
                For further details, <a href="mailto:sponsorship.engrevue@gmail.com">get in touch!</a> We can offer you a 
                copy of our sponsorship prospectus and a cup of coffee - we'd love to hear from you :)
              </p>
            </div>
          </div>
        </div>
      </section>
      
  </Layout>
)

export default Sponsor
