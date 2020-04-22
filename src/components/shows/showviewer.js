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
    const landSection = this.state.showSelected ? styles.hide : styles.show
    const showSection = this.state.showSelected ? styles.show : styles.hide

    let programmeView = styles.show
    let programmeLink = data[this.state.year]["programme"]
    if (data[this.state.year]["programme"] === "null") {
      programmeView = styles.hide
      programmeLink = data[this.state.year]["programme"]
    }

    let castPicView = styles.show
    let castPicture = data[this.state.year]["cast-picture"]
    let joinusStyle = styles.castText
    if (data[this.state.year]["cast-picture"] === "null") {
      castPicView = styles.hide
      castPicture = data[this.state.year]["cast-picture"]
      joinusStyle = styles.castText2
    }

    // =====================================================
    // TODO(alex-ruddell) Figure out why this is crashing...
    //                      Small fix done but not perfect.
    // =====================================================

    let next = parseInt(this.state.year) + 1;
    let prev = parseInt(this.state.year) - 1;
    let nextText, prevText, nextYear, prevYear, nextShowDefined, prevShowDefined;
    if (String(next) === "2020") {
        nextShowDefined = false;
        nextYear = "2019"; // Won't be displayed, but this ensures it doesn't crash.
        nextText = "VIEW ALL SHOWS";
    } else {
        nextShowDefined = true;
        nextYear = next;
        if (typeof next !== undefined) {
          nextText = "< " + data[next]['title'];
        }
        if (nextText.length > 37) {
          nextText = nextText.substr(0, 37) + "..."; // Handles case where string is too long.
        }
    }
    if (String(prev) === "2007") {
        prevShowDefined = false;
        prevYear = "2019"; // Won't be displayed, but this ensures it doesn't crash.
        prevText = "VIEW ALL SHOWS";
    } else {
        prevShowDefined = true;
        prevYear = prev;
        if (typeof prev !== undefined) {
          prevText = data[prev]['title'] + " >";
        }
        if (prevText.length > 37) {
            prevText = prevText.substr(0, 35) + "... >"; // Handles case where string is too long.
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
                  <a onClick={() => this.setState({showSelected: nextShowDefined, year: nextYear})}>{nextText}</a>
                </div>
                <div className={styles.backButton}>
                  <a onClick={() => this.setState({showSelected: prevShowDefined, year: prevYear})}>{prevText}</a>
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
                      {this.state.year} show programme
                    </a>
                    .
                  </p>
                </div>
                <div className={styles.aboutImageContainer}>
                  <img
                    src={data[this.state.year]["poster"]}
                    className={styles.aboutImage}
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
