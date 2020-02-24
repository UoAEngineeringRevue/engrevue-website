import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/index/heroBanner"
import "./index.css"

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
    <section className="section-regular">
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
      <div className="section-regular">
        <div className="container">
          <h1>CONTACT US</h1>
          <p>
            Have some questions? Email us or check out our social media pages
            below.
          </p>

          <div className="contact-us--social-container">
            <a href="mailto:engrevue@gmail.com" class="contact-us--social">
              <img
                src={emailIcon}
                className="contact-us--social-icon"
                alt="Email"
              />
              ENGREVUE@GMAIL.COM
            </a>
          </div>

          <div className="contact-us--social-container">
            <a
              href="https://www.facebook.com/EngineeringRevue/"
              class="contact-us--social"
            >
              <img
                src={fbIcon}
                className="contact-us--social-icon"
                alt="Facebook"
              />
              ENGINEERING REVUE
            </a>
          </div>

          <div className="contact-us--social-container">
            <a
              href="https://www.instagram.com/engrevue"
              class="contact-us--social"
            >
              <img
                src={instaIcon}
                className="contact-us--social-icon"
                alt="Instagram"
              />
              @ENGREVUE
            </a>
          </div>

          <div className="contact-us--social-container">
            <a
              href="https://www.youtube.com/user/Engrevue"
              class="contact-us--social"
            >
              <img
                src={ytIcon}
                className="contact-us--social-icon"
                alt="YouTube"
              />
              ENGINEERING REVUE
            </a>
          </div>

          <div className="contact-us--social-container">
            <a
              href="https://www.snapchat.com/add/engrevue"
              class="contact-us--social"
            >
              <img
                src={scIcon}
                className="contact-us--social-icon"
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
