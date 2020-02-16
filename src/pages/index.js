import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HeroBanner from "../components/index/heroBanner"
import "./index.css"
import AboutUsImage from "../assets/images/index/about-us.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroBanner />
    <section className="about-us">
      <div className="container">
        <h1>ABOUT US</h1>
        <div className="about-us--text">
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
          <div className="about-us--image-container">
            <img
              src={AboutUsImage}
              alt="Game of Loans cast & crew"
              className="about-us--image"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div style={{ margin: `0 auto`, maxWidth: `960px` }}>
        <h1>CONTACT US</h1>
        <p>
          Have some questions? Email us at{" "}
          <a href="mailto:engrevue@gmail.com">engrevue@gmail.com</a>, or check
          out our social media pages below.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
