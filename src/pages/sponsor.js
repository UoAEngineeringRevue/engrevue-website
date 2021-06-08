import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./sponsor.module.css"
import * as text from "../assets/text/sponsorPageText"
import picture1 from "../assets/images/sponsor/Saturday-23.jpg"
import picture2 from "../assets/images/sponsor/DSC06330.jpg"
import SponsorBanner from "../components/sponsor/sponsorBanner"


const Sponsor = () => (
  <Layout>
    <SEO title="Sponsor Us" />
      <SponsorBanner />
      <section id="more" className={styles.section}>
        <div class={styles.container}>
          <div className={styles.rowText}>
            <div>
              <h2>{text.ourLegacyTitle}</h2>
              <p>{text.ourLegacyBody}<br/></p>
              <h2>{text.ourMissionTitle}</h2>
              <p>{text.ourMissionBody}</p>
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
              <h2 className={styles.h2alt}>{text.yourSupportTitle}</h2>
              <p>{text.yourSupportBody}<br/><br/>
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
