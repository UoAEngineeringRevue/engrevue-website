/* This component will be called to load the information from previous revues.
It will use the prevRevue.module.css module to format images and data.
Can keep calling this to call all the info. This .js file will also store all the info of prev revues in it. */

import React, {Component} from "react"
import styles from "./previousLayout.module.css"

import revue2019 from "../../assets/images/previous/2019.jpg"
import revue2018 from "../../assets/images/previous/2018.jpg"
import revue2017 from "../../assets/images/previous/2017.jpg"
import revue2016 from "../../assets/images/previous/2016.jpg"
import revue2015 from "../../assets/images/previous/2015.jpg"
import revue2014 from "../../assets/images/previous/2014.jpg"
import revue2013 from "../../assets/images/previous/2013.jpg"
import revue2012 from "../../assets/images/previous/2012.jpg"
import revue2011 from "../../assets/images/previous/2011.jpg"
import revue2010 from "../../assets/images/previous/2010.jpg"
import revue2009 from "../../assets/images/previous/2009.gif"
import revue2008 from "../../assets/images/previous/2008.gif"

import revue2019Cast from "../../assets/images/previous/2019/cast_2019.jpg"
import revue2018Cast from "../../assets/images/previous/2018/cast_2018.jpg"
import revue2017Cast from "../../assets/images/previous/2017/cast_2017.jpg"
import revue2016Cast from "../../assets/images/previous/2016/cast_2016.jpg"

class PreviousShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSelected: false,
            year: 'null',
            
        }
        this.selectShow = this.selectShow.bind(this);
    }

    /*selectShow(e) {
        e.preventDefault();
        this.setState({
            showSelected: !this.state.showSelected,
        })
    }*/

    selectShow(input) {
        var sameShow;
        var newYear;
        if (this.state.year === input) {
            sameShow = true;
            newYear = 'null';
        } else {
            sameShow = false;
            newYear = input;
        }

        this.setState({
            year: newYear,
            showSelected: !sameShow, /* If new show selected, keep the window open. */
            
        })
    }

    

    render () {
        
        const specificShowSelected = (this.state.showSelected ? styles.show : styles.hide);
        const toggleLandingPage = (this.state.showSelected ? styles.hide : styles.show);
        const imageFormat = styles.smallImage;
        const backgdCol = (this.state.showSelected ? this.getBackgroundColour() : "black");
        

        return (
          <section>
            {/* Landing page graphic. */}
            <div className={toggleLandingPage}>
              <div className={styles.hero}>
                <div className={styles.heroContainer}>
                  <h1
                    style={{
                      color: "red",
                    }}
                  >
                    Previous Revues
                    <br />
                  </h1>
                  <p>
                    Wow, this place looks like it has been adequately dusted.
                    <br />
                    Select from the posters below to see more details about our
                    previous shows!
                  </p>
                </div>
              </div>
            </div>

            {/* Specific revue element */}
            <div className={specificShowSelected}>
              <div
                className={`${styles.yearlyBanner} ${this.getBannerStyle()}`}
              >
                <div className={styles.heroContainer}>
                  <h1
                    style={{
                      color: this.getTitleColour(),
                      //   lineHeight: "0.1em",
                    }}
                  >
                    {this.getTitle()}
                  </h1>
                  <h3
                    style={{
                      color: this.getTitleColour(),
                    }}
                  >
                    {this.getSubTitle()}
                  </h3>
                  <p
                    style={{
                      color: this.getTextColour(),
                    }}
                  >
                    {this.getLocation()}
                  </p>
                  <p
                    style={{
                      color: this.getTextColour(),
                    }}
                  >
                    {this.getDirector()}
                  </p>
                  <p
                    style={{
                      color: this.getTextColour(),
                    }}
                  >
                    {this.getProducer()}
                  </p>
                  <p
                    style={{
                      color: this.getTextColour(),
                    }}
                  >
                    {this.getBlurb()}
                  </p>
                </div>
              </div>
            </div>

            {/* Display of all previous revue posters */}
            <div className={styles.posterContainer}>
              <div
                className={styles.allRow}
                style={{
                  backgroundColor: backgdCol,
                }}
              >
                {" "}
                {/* Toggle the display type here... */}
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2019")}
                >
                  <img
                    src={revue2019}
                    alt="2019 - Game of Loans"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2018")}
                >
                  <img
                    src={revue2018}
                    alt="2018 - Pirates of the Curriculum"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2017")}
                >
                  <img
                    src={revue2017}
                    alt="2017 - 21 Symonds Street"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2016")}
                >
                  <img
                    src={revue2016}
                    alt="2016 - The Avengineers"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2015")}
                >
                  <img
                    src={revue2015}
                    alt="2015 - Hack to the Future"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2014")}
                >
                  <img
                    src={revue2014}
                    alt="2014 - The Wizard of Cos"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2013")}
                >
                  <img
                    src={revue2013}
                    alt="2013 - Finding Nano"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2012")}
                >
                  <img
                    src={revue2012}
                    alt="2012 - The Ion King"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2011")}
                >
                  <img
                    src={revue2011}
                    alt="2011 - Degrees of Uniformity"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2010")}
                >
                  <img
                    src={revue2010}
                    alt="2010 - The Black Box"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2009")}
                >
                  <img
                    src={revue2009}
                    alt="2009 - NZ's Next Most Smartest Top Engineer with the Stars"
                    className={imageFormat}
                  />
                </button>
                <button
                  className={styles.posterButton}
                  onClick={() => this.selectShow("2008")}
                >
                  <img
                    src={revue2008}
                    alt="2008 - A World Without Engineers"
                    className={imageFormat}
                  />
                </button>
              </div>
            </div>
          </section>
        )
    }

    getBannerStyle() {
        if (this.state.year === '2019') return styles.banner2019;
        if (this.state.year === '2018') return styles.banner2018;
        if (this.state.year === '2017') return styles.banner2017;
        if (this.state.year === '2016') return styles.banner2016; 
        if (this.state.year === '2015') return styles.banner2015;
        if (this.state.year === '2014') return styles.banner2014;
        if (this.state.year === '2013') return styles.banner2013; 
        if (this.state.year === '2012') return styles.banner2012;
        if (this.state.year === '2011') return styles.banner2011;
        if (this.state.year === '2010') return styles.banner2010; 
        if (this.state.year === '2009') return styles.banner2009;
        if (this.state.year === '2008') return styles.banner2008;

        return 'null';

    }

    getBackgroundColour() {
        return "#121212";

        /* if (this.state.year === '2019') return "#27221c";
        if (this.state.year === '2018') return "#2b2b2b";
        if (this.state.year === '2017') return "white";
        if (this.state.year === '2016') return "black"; 
        if (this.state.year === '2015') return "#313131";
        if (this.state.year === '2014') return "#166fb7";
        if (this.state.year === '2013') return "#a1bde1"; 
        if (this.state.year === '2012') return "#61a8cc";
        if (this.state.year === '2011') return "#65abbe";
        if (this.state.year === '2010') return "#e2d6c3"; 
        if (this.state.year === '2009') return "black";
        if (this.state.year === '2008') return "white";

        return 'null'; */
    }
    
    getTextColour() {
        return "white";

        /* if (this.state.year === '2019') return "white";
        if (this.state.year === '2018') return "white";
        if (this.state.year === '2017') return "black";
        if (this.state.year === '2016') return "white"; 
        if (this.state.year === '2015') return "white";
        if (this.state.year === '2014') return "white";
        if (this.state.year === '2013') return "white"; 
        if (this.state.year === '2012') return "white";
        if (this.state.year === '2011') return "white";
        if (this.state.year === '2010') return "black"; 
        if (this.state.year === '2009') return "#87bcd4";
        if (this.state.year === '2008') return "black";

        return 'null'; */
    }

    getTitleColour() {
        if (this.state.year === '2019') return "#ff8e01";
        if (this.state.year === '2018') return "#ee841c";
        if (this.state.year === '2017') return "#ad2b29";
        if (this.state.year === '2016') return "#ae0e0c"; 
        if (this.state.year === '2015') return "#e2a62f";
        if (this.state.year === '2014') return "#45abf7";
        if (this.state.year === '2013') return "#14456f"; 
        if (this.state.year === '2012') return "#fd7200";
        if (this.state.year === '2011') return "#1f4d5a";
        if (this.state.year === '2010') return "#893810"; 
        if (this.state.year === '2009') return "#e30204";
        if (this.state.year === '2008') return "#c3290e";

        return 'null';
    }

    getCoverPicture() {
        if (this.state.year === '2019') return revue2019;
        if (this.state.year === '2018') return revue2018;
        if (this.state.year === '2017') return revue2017;
        if (this.state.year === '2016') return revue2016; 
        if (this.state.year === '2015') return revue2015;
        if (this.state.year === '2014') return revue2014;
        if (this.state.year === '2013') return revue2013; 
        if (this.state.year === '2012') return revue2012;
        if (this.state.year === '2011') return revue2011;
        if (this.state.year === '2010') return revue2010; 
        if (this.state.year === '2009') return revue2009;
        if (this.state.year === '2008') return revue2008;

        return 'null';
    }

    getCastPicture() {
        if (this.state.year === '2019') return revue2019Cast; 
        if (this.state.year === '2018') return revue2018Cast;
        if (this.state.year === '2017') return revue2017Cast;
        if (this.state.year === '2016') return revue2016Cast; 

        return 'null';
    }

    getTitle() {
        if (this.state.year === '2019') return 'Game of Loans';
        if (this.state.year === '2018') return 'Pirates of the Curriculum';
        if (this.state.year === '2017') return '21 Symonds Street';
        if (this.state.year === '2016') return 'The Avengineers'; 
        if (this.state.year === '2015') return 'Hack to the Future';
        if (this.state.year === '2014') return 'The Wizard of Cos';
        if (this.state.year === '2013') return 'Finding Nano'; 
        if (this.state.year === '2012') return 'The Ion King';
        if (this.state.year === '2011') return 'Degrees of Uniformity';
        if (this.state.year === '2010') return 'The Black Box'; 
        if (this.state.year === '2009') return "NZ's Next Most Smartest Top Engineer With The Stars";
        if (this.state.year === '2008') return 'A World Without Engineers';

        return '';
    }

    getSubTitle() {
        return 'Engineering Revue ' + this.state.year;
    }

    getCatchPhrase() {
        if (this.state.year === '2019') return 'When you play the Game of Loans, you win, or you default.';

        return 'null';
    }

    getLocation() {
        if (this.state.year === '2019') return 'SkyCity Theatre';
        if (this.state.year === '2018') return 'SkyCity Theatre';
        if (this.state.year === '2017') return 'SkyCity Theatre';
        if (this.state.year === '2016') return 'SkyCity Theatre'; 
        if (this.state.year === '2015') return 'Maidment Theatre';
        if (this.state.year === '2014') return 'Maidment Theatre';
        if (this.state.year === '2013') return 'Raye Freedman Arts Centre'; 
        if (this.state.year === '2012') return 'Maidment Theatre';
        if (this.state.year === '2011') return 'Maidment Theatre';
        if (this.state.year === '2010') return 'Maidment Theatre'; 
        if (this.state.year === '2009') return 'Maidment Theatre';
        if (this.state.year === '2008') return 'Maidment Theatre';

        return 'null';
    }

    getDirector() {
        if (this.state.year === '2019') return 'Alex Kennedy'; 
        if (this.state.year === '2018') return 'Henry Merton';
        if (this.state.year === '2017') return 'Jake Thomas';
        if (this.state.year === '2016') return 'Duncan Bakke'; 
        if (this.state.year === '2015') return 'Duncan Bakke & Cam Rouse';
        if (this.state.year === '2014') return 'Janet Van';
        if (this.state.year === '2013') return 'Janet Van'; 
        if (this.state.year === '2012') return 'Mahmood Hikmet & Nick Corlett';
        if (this.state.year === '2011') return 'Mahmood Hikmet & Nick Corlett';
        if (this.state.year === '2010') return 'Mahmood Hikmet, Danvar Barganza, & Iain Dunning'; 
        if (this.state.year === '2009') return 'Danvar Braganza';
        if (this.state.year === '2008') return 'Athena';

        return 'null';
    }

    getProducer() {
        if (this.state.year === '2019') return 'Aorthi Afroza'; 
        if (this.state.year === '2018') return 'Olivia Maxwell';
        if (this.state.year === '2017') return 'Olivia Maxwell';
        if (this.state.year === '2016') return 'Rachel Love'; 
        if (this.state.year === '2015') return 'Rachel Love & Matt Lie';
        if (this.state.year === '2014') return 'Sybille Van Howe & Harriet Ingham';
        if (this.state.year === '2013') return 'Luke Harries'; 
        if (this.state.year === '2012') return 'Emma Foulkes';
        if (this.state.year === '2011') return 'Andrew & Sophia Wang';
        if (this.state.year === '2010') return 'Sanna'; 
        if (this.state.year === '2009') return '';
        if (this.state.year === '2008') return '';

        return "";
    }

    getBlurb() {
        if (this.state.year === '2019') return "When a sudden loss sends the student kingdom into disarray, the scramble for power begins, and an undead threat emerges from the shadows. One thing's for certain; the race for the Iron Loan is a matter of life and debt."; 
        if (this.state.year === '2018') return "When a mysterious kidnapping interrupts her very first lecture, budding engineer Billie must team up with the unlikeliest of allies, the suspicious Zach Sparrow, to rescue her friends and the faculty. Can they overcome their differences to fight dark curses, derranged academics, and dizzyingly-handsome pirates before it's too late? Since it's a comedy, yeah, probably - but you'll have to see the show to know for sure!";
        if (this.state.year === '2017') return "When a mysterious villain threatens the students of the Engineering department, 21 Symonds Street is put on the case. Top agent James Brond must team up with bumbling techie Max Well to save the University from imminent disaster. Can they learn to work together before it's too late? Since it's a comedy, yeah, probably - but you'll have to see the show to know for sure!";
        if (this.state.year === '2016') return "When the forces of evil and tyranny threaten the liveliehood of students in the Faculty of Engineering, a brave few will rise from the shadows to fight them. They're all great when they work on assignments solo, but will they be able to complete this group project, save the Engineering school, and still graduate on time? Since it's a comedy, yeah, probably, but you'll have to come see the show to know for sure!"; 
        
        return "";
    }

    getQuote() {
        if (this.state.year === '2019') return 'Unbeatable'; 
        if (this.state.year === '2018') return 'Outstanding show';
        
        return '';
    }

    getSubQuote() {
        if (this.state.year === '2019') return 'David Seymour (Dancing with the Stars 2018 Semi-Finalist)'; 
        if (this.state.year === '2018') return 'David Seymour (Dancing with the Stars 2018 Semi-Finalist)';
        
        return '';
    }

}

export default PreviousShow;