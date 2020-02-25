/* This component will be called to load the information from previous revues.
It will use the prevRevue.module.css module to format images and data.
Can keep calling this to call all the info. This .js file will also store all the info of prev revues in it. */

import React, {Component} from "react"
import styles from "../components/previousLayout.module.css"
import { Link } from "gatsby"

import HistoryComponent from "../components/history.js"


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

import revue2019Cast from "../assets/images/previous/2019/cast_2019.jpg"
import revue2018Cast from "../assets/images/previous/2018/cast_2018.jpg"
import revue2017Cast from "../assets/images/previous/2017/cast_2017.jpg"
import revue2016Cast from "../assets/images/previous/2016/cast_2016.jpg"

class PreviousLayout extends Component {
    constructor(props) {
        super(props)
    }

    /* IDEA::
        Condensed previous layout: single poster. onclick, expands to fully open previous layout. Can lay out as a wrap.
        Expanded previous layout: has all the details! Have other condensed underneath.
    */

    render () {

        

        return (
            
            <div className={styles.container}>
                <img src={this.getCoverPicture()} className={styles.format} />
                <div className={styles.blurbText}>
                    <h1>{this.getTitle()}</h1>
                    <p> Here's some more words! And basically here are some extra words just to fill it in while I do it all.</p>
                    <p> testing words... {this.getBlurb()} </p>
                    
                </div>
            </div>

        )
    }

    getCoverPicture() {
        if (this.props.year === '2019') return revue2019;
        if (this.props.year === '2018') return revue2018;
        if (this.props.year === '2017') return revue2017;
        if (this.props.year === '2016') return revue2016; 
        if (this.props.year === '2015') return revue2015;
        if (this.props.year === '2014') return revue2014;
        if (this.props.year === '2013') return revue2013; 
        if (this.props.year === '2012') return revue2012;
        if (this.props.year === '2011') return revue2011;
        if (this.props.year === '2010') return revue2010; 
        if (this.props.year === '2009') return revue2009;
        if (this.props.year === '2008') return revue2008;

        return 'null';
    }

    getCastPicture() {
        if (this.props.year === '2019') return revue2019Cast; 
        if (this.props.year === '2018') return revue2018Cast;
        if (this.props.year === '2017') return revue2017Cast;
        if (this.props.year === '2016') return revue2016Cast; 

        return 'null';
    }

    getTitle() {
        if (this.props.year === '2019') return 'Game of Loans';
        if (this.props.year === '2018') return 'Pirates of the Curriculum';
        if (this.props.year === '2017') return '21 Symonds Street';
        if (this.props.year === '2016') return 'The Avengineers'; 
        if (this.props.year === '2015') return 'Hack to the Future';
        if (this.props.year === '2014') return 'The Wizard of Cos';
        if (this.props.year === '2013') return 'Finding Nano'; 
        if (this.props.year === '2012') return 'The Ion King';
        if (this.props.year === '2011') return 'Degrees of Uniformity';
        if (this.props.year === '2010') return 'The Black Box'; 
        if (this.props.year === '2009') return "NZ's Next Most Smartest Top Engineer With The Stars";
        if (this.props.year === '2008') return 'A World Without Engineers';

        return 'null';
    }

    getSubTitle() {
        return 'Engineering Revue ' + this.props.year;
    }

    getCatchPhrase() {
        if (this.props.year === '2019') return 'When you play the Game of Loans, you win, or you default.';

        return 'null';
    }

    getLocation() {
        if (this.props.year === '2019') return 'SkyCity Theatre';
        if (this.props.year === '2018') return 'SkyCity Theatre';
        if (this.props.year === '2017') return 'SkyCity Theatre';
        if (this.props.year === '2016') return 'SkyCity Theatre'; 
        if (this.props.year === '2015') return 'Maidment Theatre';
        if (this.props.year === '2014') return 'Maidment Theatre';
        if (this.props.year === '2013') return 'Raye Freedman Arts Centre'; 
        if (this.props.year === '2012') return 'Maidment Theatre';
        if (this.props.year === '2011') return 'Maidment Theatre';
        if (this.props.year === '2010') return 'Maidment Theatre'; 
        if (this.props.year === '2009') return 'Maidment Theatre';
        if (this.props.year === '2008') return 'Maidment Theatre';

        return 'null';
    }

    getDirector() {
        if (this.props.year === '2019') return 'Alex Kennedy'; 
        if (this.props.year === '2018') return 'Henry Merton';
        if (this.props.year === '2017') return 'Jake Thomas';
        if (this.props.year === '2016') return 'Duncan Bakke'; 
        if (this.props.year === '2015') return 'Duncan Bakke & Cam Rouse';
        if (this.props.year === '2014') return 'Janet Van';
        if (this.props.year === '2013') return 'Janet Van'; 
        if (this.props.year === '2012') return 'Mahmood Hikmet & Nick Corlett';
        if (this.props.year === '2011') return 'Mahmood Hikmet & Nick Corlett';
        if (this.props.year === '2010') return 'Mahmood Hikmet, Danvar Barganza, & Iain Dunning'; 
        if (this.props.year === '2009') return 'Danvar Braganza';
        if (this.props.year === '2008') return 'Athena';

        return 'null';
    }

    getProducer() {
        if (this.props.year === '2019') return 'Aorthi Afroza'; 
        if (this.props.year === '2018') return 'Olivia Maxwell';
        if (this.props.year === '2017') return 'Olivia Maxwell';
        if (this.props.year === '2016') return 'Rachel Love'; 
        if (this.props.year === '2015') return 'Rachel Love & Matt Lie';
        if (this.props.year === '2014') return 'Sybille Van Howe & Harriet Ingham';
        if (this.props.year === '2013') return 'Luke Harries'; 
        if (this.props.year === '2012') return 'Emma Foulkes';
        if (this.props.year === '2011') return 'Andrew & Sophia Wang';
        if (this.props.year === '2010') return 'Sanna'; 
        if (this.props.year === '2009') return 'null';
        if (this.props.year === '2008') return 'null';

        return 'null';
    }

    getBlurb() {
        if (this.props.year === '2019') return "When a sudden loss sends the student kingdom into disarray, the scramble for power begins, and an undead threat emerges from the shadows. One thing's for certain; the race for the Iron Loan is a matter of life and debt."; 
        if (this.props.year === '2018') return "When a mysterious kidnapping interrupts her very first lecture, budding engineer Billie must team up with the unlikeliest of allies, the suspicious Zach Sparrow, to rescue her friends and the faculty. Can they overcome their differences to fight dark curses, derranged academics, and dizzyingly-handsome pirates before it's too late? Since it's a comedy, yeah, probably - but you'll have to see the show to know for sure!";
        if (this.props.year === '2017') return "When a mysterious villain threatens the students of the Engineering department, 21 Symonds Street is put on the case. Top agent James Brond must team up with bumbling techie Max Well to save the University from imminent disaster. Can they learn to work together before it's too late? Since it's a comedy, yeah, probably - but you'll have to see the show to know for sure!";
        if (this.props.year === '2016') return "When the forces of evil and tyranny threaten the liveliehood of students in the Faculty of Engineering, a brave few will rise from the shadows to fight them. They're all great when they work on assignments solo, but will they be able to complete this group project, save the Engineering school, and still graduate on time? Since it's a comedy, yeah, probably, but you'll have to come see the show to know for sure!"; 
        
        return 'null';
    }

    getQuote() {
        if (this.props.year === '2019') return 'Unbeatable'; 
        if (this.props.year === '2018') return 'Outstanding show';
        
        return 'null';
    }

    getSubQuote() {
        if (this.props.year === '2019') return 'David Seymour (Dancing with the Stars 2018 Semi-Finalist)'; 
        if (this.props.year === '2018') return 'David Seymour (Dancing with the Stars 2018 Semi-Finalist)';
        
        return 'null';
    }

}

export default PreviousLayout;