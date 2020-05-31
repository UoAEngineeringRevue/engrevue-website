import React from "react"
import styles from "./showviewer.module.css"
import data from "./data.js"
import HeroBanner from "./heroBanner"

class ShowViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSelected: false,
      year: "2019"
    }
    this.selectShow = this.selectShow.bind(this)
  }

  selectShow(input) {
    this.setState({ year: input, showSelected: true })
  }

  render() {
    const landSection = this.state.showSelected ? styles.hide : styles.view;
    const showSection = this.state.showSelected ? styles.view : styles.hide;

    let programmeView = styles.view;
    let programmeLink = data[this.state.year]["programme"];
    if (data[this.state.year]["programme"] === "null") {
      programmeView = styles.hide;
      programmeLink = data[this.state.year]["programme"];
    }

    let castPicView = styles.view;
    let castPicture = data[this.state.year]["cast-picture"];
    let joinusStyle = styles.castText;
    if (data[this.state.year]["cast-picture"] === "null") {
      castPicView = styles.hide;
      castPicture = data[this.state.year]["cast-picture"];
      joinusStyle = styles.castText2;
    }

    // =====================================================
    // TODO(alex-ruddell) Figure out why this is crashing...
    //                      Small fix done but not perfect.
    // =====================================================

    let next = parseInt(this.state.year) + 1;
    let prev = parseInt(this.state.year) - 1;
    let nextText, prevText, nextYear, prevYear, nextShowDefined, prevShowDefined;
    let displayFwrdButton = styles.show;
    let displayBackButton = styles.show;
    if (String(next) === "2020") {
        nextShowDefined = false;
        nextYear = "2019"; // Won't be displayed, but this ensures it doesn't crash.
        nextText = "VIEW ALL SHOWS";
        displayFwrdButton = styles.hide;
    } else {
        nextShowDefined = true;
        nextYear = next;
        if (typeof next !== undefined) {
          nextText = "< " + data[next]['title'];
        }
        if (nextText.length > 20) {
          nextText = nextText.substr(0, 20) + "..."; // Handles case where string is too long.
        }
    }
    if (String(prev) === "2007") {
        prevShowDefined = false;
        prevYear = "2019"; // Won't be displayed, but this ensures it doesn't crash.
        prevText = "VIEW ALL SHOWS";
        displayBackButton = styles.hide;
    } else {
        prevShowDefined = true;
        prevYear = prev;
        if (typeof prev !== undefined) {
          prevText = data[prev]['title'] + " >";
        }
        if (prevText.length > 20) {
            prevText = prevText.substr(0, 20) + "... >"; // Handles case where string is too long.
        }
    }

    return (
      <>
        <HeroBanner year={this.state.year} defined={this.state.showSelected} />
        <section className={styles.section}>
          <section className={styles.container}>
            <section className={showSection}>
              {/* To display specific show information*/}
              <div className={styles.topButtons}>
                <div className={styles.fwrdButton}>
                  <div className={displayFwrdButton}>
                    <button className={styles.buttonClear}>  
                      <a className={styles.linkLong} onClick={() => this.setState({showSelected: nextShowDefined, year: nextYear})}>{nextText}</a>
                      <a className={styles.linkShort} onClick={() => this.setState({showSelected: nextShowDefined, year: nextYear})}>
                        {nextText == "VIEW ALL SHOWS" ? nextText : "< NEXT SHOW"}
                      </a>
                    </button>  
                  </div>
                </div>
                <div className={styles.homeButton}>
                  <button className={styles.buttonClear}>
                    <a onClick={() => this.setState({showSelected: false, year: "2019"})}>VIEW ALL SHOWS</a>
                  </button>    
                </div>
                <div className={styles.backButton}>
                  <div className={displayBackButton}>
                    <button className={styles.buttonClear}>  
                      <a className={styles.linkLong} onClick={() => this.setState({showSelected: prevShowDefined, year: prevYear})}>{prevText}</a>
                      <a className={styles.linkShort} onClick={() => this.setState({showSelected: prevShowDefined, year: prevYear})}>
                        {prevText == "VIEW ALL SHOWS" ? prevText : "PREVIOUS SHOW >"}
                      </a>
                    </button>  
                  </div>
                </div>
              </div>
              <div>
                <p className={styles.catchPhrase}>
                  {data[this.state.year]["catch-phrase"]}
                </p>
              </div>
              <div className={styles.aboutText}>
                <div>
                  <h3 className={styles.h3alt}>ABOUT THE SHOW</h3>
                  <p>{data[this.state.year]["blurb"]}</p>
                  <p className={styles.catchPhrase}>
                    {data[this.state.year]["quote"]}
                  </p>
                  <h3 className={styles.h3alt}>THE CAST</h3>
                  <p>
                    The {this.state.year} Auckland Engineering Revue was
                    directed by {data[this.state.year]["director"]} and produced
                    by {data[this.state.year]["producer"]}. Alongside their
                    wonderful executive team and cast, they created the BEST
                    Engineering Revue of {this.state.year}!
                  </p>
                  <p className={programmeView}>
                    For a full cast list and more details, please view the
                    {" "}
                    <a href={programmeLink}>
                      {this.state.year} show programme.
                    </a>
                  </p>
                </div>
                <div className={styles.posterImageContainer}>
                  <img
                    src={data[this.state.year]["poster"]}
                    className={styles.posterImage}
                  />
                </div>
              </div>
              <br />
              <div className={styles.aboutText}>
                <div className={castPicView}>
                  <div className={styles.castImageContainer}>
                    <img
                      src={castPicture}
                      alt="cast"
                      className={styles.aboutImage}
                    />
                  </div>
                </div>
                <div className={joinusStyle}>
                  <h3>JOIN US</h3>
                  <p>
                    Each year, our lovely cast is made up of around 100 budding
                    engineers from the University of Auckland! We are a show run
                    solely by engineering students, for engineering students. No
                    matter what your level of experience may be, if you're keen
                    to get involved, we want YOU! Sign ups for 2020 are now on!
                  </p>
                  <div className={styles.signupButton}>
                    <a href="https://www.engrevue.co.nz/signup">
                      Click here to sign up!
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className={landSection}>
              <div className={styles.buttonView}>
              {Object.keys(data)
                .sort()
                .reverse()
                .map(year => {
                  if (year === "null") {
                    return
                  }
                  return (
                    <div
                      className={styles.imgButton}
                      onClick={() => this.selectShow(String(year))}
                    >
                      <img
                        src={data[year]["poster"]}
                        alt={data[year]["title"]}
                        className={styles.imgView}
                      />
                      <div className={styles.showText}>
                        <p className={styles.hiddenText1}>
                          {data[year]["title"]}
                        </p>
                        <p className={styles.hiddenText2}>
                          {data[year]["subtitle1"]}
                        </p>
                      </div>
                    </div>
                  )
                })}
                </div>
            </section>
          </section>
        </section>
      </>
    )
  }
}

export default ShowViewer
