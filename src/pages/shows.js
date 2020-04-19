import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroBanner from "../components/shows/heroBanner"
import SEO from "../components/seo"

import poster2019 from "../assets/images/previous/2019.jpg"
import programme2019 from "../assets/images/previous/2019/programme.pdf"

import "./shows.css"

const Shows = () => (
  <Layout>
    <SEO title="Previous Revues" />
    <HeroBanner year='null' />
    <section className="section-regular">
      <div className="container">
        {/* Have elements load */}
        <h1 className="title">GAME OF LOANS</h1>
        <p className="subtitle">Auckland Engineering Revue 2019</p>
        
        <div className="about-text">
          <div>
            <p className="catch-phrase">When you play the Game of Loans, you win, or you default.</p>  
            <h3>ABOUT THE SHOW</h3>
            <p>When a sudden loss sends the student kingdom into disarray, the scramble for power begins, 
              and an undead threat emerges from the shadows. One thing's for certain; the race for the Iron 
              Loan is a matter of life and debt.</p>
            <h3>THE CAST</h3>
            <p>Directed by Alex Kennedy <br />
              Produced by Aorthi Afroza <br /> <br />
              For a full cast list and more detals, please view the 
              <a href={programme2019}> 2019 show programme</a>
            </p>
            
            
          </div>
          <div className="about-image-container">
            <img src={poster2019} className="about-image" />
          </div>
        </div>
      </div>
    </section>
    
  </Layout>
)


export default Shows
