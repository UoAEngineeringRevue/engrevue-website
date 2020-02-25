import React, {Component} from "react"
import { Link } from "gatsby"
import { RevueData } from "../components/database.js"

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


/* This component is going to handle the dynamic displaying of information. Starts as just the picture, on click expands. */
/* On click; expands, but also makes visible the bottom bar of all other revues. On click, does the same thing. */

class HistoryComponent extends Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        /* No visible part required */
        return (
            <div />
        );
    }

    getCoverPicture(year) {
        if (year === '2019') return revue2019;
        if (year === '2018') return revue2018;
        if (year === '2017') return revue2017;
        if (year === '2016') return revue2016; 
        if (year === '2015') return revue2015;
        if (year === '2014') return revue2014;
        if (year === '2013') return revue2013; 
        if (year === '2012') return revue2012;
        if (year === '2011') return revue2011;
        if (year === '2010') return revue2010; 
        if (year === '2009') return revue2009;
        if (year === '2008') return revue2008;

        return 'null';
    }

    getCastPicture(year) {
        if (year === '2019') return revue2019Cast; 
        if (year === '2018') return revue2018Cast;
        if (year === '2017') return revue2017Cast;
        if (year === '2016') return revue2016Cast; 

        return 'null';
    }

    getTitle(year) {
        if (year === '2019') return 'Game of Loans';
        if (year === '2018') return 'Pirates of the Curriculum';
        if (year === '2017') return '21 Symonds Street';
        if (year === '2016') return 'The Avengineers'; 
        if (year === '2015') return 'Hack to the Future';
        if (year === '2014') return 'The Wizard of Cos';
        if (year === '2013') return 'Finding Nano'; 
        if (year === '2012') return 'The Ion King';
        if (year === '2011') return 'Degrees of Uniformity';
        if (year === '2010') return 'The Black Box'; 
        if (year === '2009') return "NZ's Next Most Smartest Top Engineer With The Stars";
        if (year === '2008') return 'A World Without Engineers';

        return 'null';
    }

    getSubTitle(year) {
        return 'Engineering Revue ' + year;
    }

    getCatchPhrase(year) {
        if (year === '2019') return 'When you play the Game of Loans, you win, or you default.';

        return 'null';
    }

    getLocation(year) {
        if (year === '2019') return 'SkyCity Theatre';
        if (year === '2018') return 'SkyCity Theatre';
        if (year === '2017') return 'SkyCity Theatre';
        if (year === '2016') return 'SkyCity Theatre'; 
        if (year === '2015') return 'Maidment Theatre';
        if (year === '2014') return 'Maidment Theatre';
        if (year === '2013') return 'Raye Freedman Arts Centre'; 
        if (year === '2012') return 'Maidment Theatre';
        if (year === '2011') return 'Maidment Theatre';
        if (year === '2010') return 'Maidment Theatre'; 
        if (year === '2009') return 'Maidment Theatre';
        if (year === '2008') return 'Maidment Theatre';

        return 'null';
    }

    getDirector(year) {
        if (year === '2019') return 'Alex Kennedy'; 
        if (year === '2018') return 'Henry Merton';
        if (year === '2017') return 'Jake Thomas';
        if (year === '2016') return 'Duncan Bakke'; 
        if (year === '2015') return 'Duncan Bakke & Cam Rouse';
        if (year === '2014') return 'Janet Van';
        if (year === '2013') return 'Janet Van'; 
        if (year === '2012') return 'Mahmood Hikmet & Nick Corlett';
        if (year === '2011') return 'Mahmood Hikmet & Nick Corlett';
        if (year === '2010') return 'Mahmood Hikmet, Danvar Barganza, & Iain Dunning'; 
        if (year === '2009') return 'Danvar Braganza';
        if (year === '2008') return 'Athena';

        return 'null';
    }

    getProducer(year) {
        if (year === '2019') return 'Aorthi Afroza'; 
        if (year === '2018') return 'Olivia Maxwell';
        if (year === '2017') return 'Olivia Maxwell';
        if (year === '2016') return 'Rachel Love'; 
        if (year === '2015') return 'Rachel Love & Matt Lie';
        if (year === '2014') return 'Sybille Van Howe & Harriet Ingham';
        if (year === '2013') return 'Luke Harries'; 
        if (year === '2012') return 'Emma Foulkes';
        if (year === '2011') return 'Andrew & Sophia Wang';
        if (year === '2010') return 'Sanna'; 
        if (year === '2009') return 'null';
        if (year === '2008') return 'null';

        return 'null';
    }

    getBlurb() {
        if (this.props.year === '2019') return "When a sudden loss sends the student kingdom into disarray, the scramble for power begins, and an undead threat emerges from the shadows. One thing's for certain; the race for the Iron Loan is a matter of life and debt."; 
        if (this.props.year === '2018') return "When a mysterious kidnapping interrupts her very first lecture, budding engineer Billie must team up with the unlikeliest of allies, the suspicious Zach Sparrow, to rescue her friends and the faculty. Can they overcome their differences to fight dark curses, derranged academics, and dizzyingly-handsome pirates before it's too late? Since it's a comedy, yeah, probably - but you'll have to see the show to know for sure!";
        if (this.props.year === '2017') return "When a mysterious villain threatens the students of the Engineering department, 21 Symonds Street is put on the case. Top agent James Brond must team up with bumbling techie Max Well to save the University from imminent disaster. Can they learn to work together before it's too late? Since it's a comedy, yeah, probably - but you'll have to see the show to know for sure!";
        if (this.props.year === '2016') return "When the forces of evil and tyranny threaten the liveliehood of students in the Faculty of Engineering, a brave few will rise from the shadows to fight them. They're all great when they work on assignments solo, but will they be able to complete this group project, save the Engineering school, and still graduate on time? Since it's a comedy, yeah, probably, but you'll have to come see the show to know for sure!"; 
        
        return 'null';
    }

    getQuote(year) {
        if (year === '2019') return 'Unbeatable'; 
        if (year === '2018') return 'Outstanding show';
        
        return 'null';
    }

    getSubQuote(year) {
        if (year === '2019') return 'David Seymour (Dancing with the Stars 2018 Semi-Finalist)'; 
        if (year === '2018') return 'David Seymour (Dancing with the Stars 2018 Semi-Finalist)';
        
        return 'null';
    }

}

export default HistoryComponent;