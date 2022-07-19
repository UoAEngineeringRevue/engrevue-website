import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./sponsor.module.css"
import Banner from "../components/Banner"

import picture1 from "../assets/images/sponsor/Saturday-23.jpg"
import picture2 from "../assets/images/sponsor/DSC06330.jpg"
import bannerBg from "../assets/images/sponsor/DSC05963.jpg"

const Sponsor = () => (
  <Layout>
    <Seo title="Sponsor Us" />
    <Banner
      background={bannerBg}
      color="white"
      heading="Sponsorship"
      body="The generous support we receive from our sponsors enables us to
      continue pursuing our mission; to provide a welcoming and inclusive
      experience that complements the academic components of studying an
      Engineering degree at the University of Auckland."
      callToActionLink="mailto:sponsorship.engrevue@gmail.com"
      callToActionText="Get in touch"
      showDownBtn
    />
    <section id="more" className={styles.section}>
      <div class={styles.container}>
        <div className={styles.rowText}>
          <div>
            <h1> OUR LEGACY </h1>
            <p>
              For the last 13 years, the Auckland Engineering Revue has
              continued to grow in presence within the faculty and has quickly
              become one of the calendar highlights of the year.
              <ul>
                <li>
                  The 2020 show was very well received, with a total audience of
                  over 1400 people.
                </li>
                <li>
                  While the 2021 show was cancelled due to Covid-19
                  restrictions, we were still able to release 22 minutes of
                  video content that reached over 1000 people online.
                </li>
              </ul>
              Going into this year, the Auckland Engineering Revue aims to
              maintain its strong presence on campus, with a fantastic new cast
              and a wonderful executive body dedicated to making their best show
              yet!
              <br />
            </p>
            <h1> OUR MISSION </h1>
            <p>
              Our mission is to bring students together from all year levels and
              engineering disciplines to form meaningful connections with their
              peers, provide a rich and rewarding contrast to academic studies,
              and create a positive, welcoming environment where everyone is
              given the opportunity to thrive!
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
            <h1 className={styles.h2alt}> YOUR SUPPORT </h1>
            <p>
              Your partnership means everything to us. It represents your
              support of our mission and helps ensure our show is as accessible
              and successful as possible!
              <br />
              <br />
              For further details,{" "}
              <a href="mailto:sponsorship.engrevue@gmail.com">
                get in touch!
              </a>{" "}
              We can offer you a copy of our sponsorship prospectus and a cup of
              coffee - we'd love to hear from you :)
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Sponsor
