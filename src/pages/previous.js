import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/previousLayout.module.css"

import previousLayout from "../components/previousLayout"

import revue2019 from "../assets/images/previous/2019.jpg"
import revue2018 from "../assets/images/previous/2018.jpg"
import revue2017 from "../assets/images/previous/2017.jpg"
import revue2016 from "../assets/images/previous/2016.jpg"
import revue2015 from "../assets/images/previous/2015.jpg"
import revue2014 from "../assets/images/previous/2014.jpg"
import revue2013 from "../assets/images/previous/2013.jpg"
import revue2012 from "../assets/images/previous/2012.jpg"
import revue2011 from "../assets/images/previous/2011.jpg"
import revue2010 from "../assets/images/previous/2010.jpg"
import revue2009 from "../assets/images/previous/2009.gif"
import revue2008 from "../assets/images/previous/2008.gif"


const PreviousPage = () => (
  <Layout>
    <SEO title="Previous Revues" />
    {/* All my website shiet goes here */}
    <div>
      
    </div>
    
    <previousLayout image={revue2019} year="2019">
      <p> Hello !</p>
      <p> Another one</p>
      <img src={revue2019} className={styles.format} />

    </previousLayout>

  </Layout>
)

export default PreviousPage
