/* This component will be called to load the information from previous revues.
It will use the prevRevue.module.css module to format images and data.
Can keep calling this to call all the info. This .js file will also store all the info of prev revues in it. */

import React, {Component} from "react"
import styles from "../components/previousLayout.module.css"
import { Link } from "gatsby"


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

class PreviousLayout extends Component {
    constructor(props) {
        super(props)
    }

    render () {

        let sourceImage = this.generateSourceImage(this.props.year);
        let webLink = this.generateWebLink(this.props.year);
        /* Turn this in to an object call, calls one function called getData and does this. */

        return (
            
            <div className={styles.container}>
                <img src={sourceImage} className={styles.format} />
                <div className={styles.blurbText}>
                    <h1>Game of LOANS</h1>
                    <p> Here's some more words! And basically here are some extra words just to fill it in while I do it all.</p>
                    <Link to={webLink}>View details.</Link>
                </div>
            </div>

        )
    }

    generateSourceImage(year) {

        if (year == '2019') return revue2019; 
        if (year == '2018') return revue2018; 
        if (year == '2017') return revue2017; 
        if (year == '2016') return revue2016; 
        if (year == '2015') return revue2015; 
        if (year == '2014') return revue2014; 
        if (year == '2013') return revue2013; 
        if (year == '2012') return revue2012; 
        if (year == '2011') return revue2011; 
        if (year == '2010') return revue2010; 
        if (year == '2009') return revue2009; 
        if (year == '2008') return revue2008; 
        return revue2019; /* default return for error handling...*/
    }

    generateWebLink(year) {

        return '/engineeringrevue' + year + '/';
    }

}

export default PreviousLayout;