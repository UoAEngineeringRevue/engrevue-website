import React from "react"

import styles from "./showviewer.module.css"
import data from "./data.js"
import HeroBanner from "./heroBanner"

class ShowViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSelected: false,
      year: "null",
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

    return (
      <>
        <HeroBanner year={this.state.year} />
        <section className={styles.section}>
          <section className={styles.container}>
            <section className={showSection}>
              {" "}
              {/* To display specific show information*/}
              <div className={styles.aboutText}>
                <div className={styles.signupButton}>
                  <a href="https://www.engrevue.co.nz/shows/">Back to shows</a>
                </div>
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
                    {" "}
                    For a full cast list and more detals, please view the
                    <a href={programmeLink}>
                      {" "}
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
                <div className={styles.castImageContainer}>
                  <div className={castPicView}>
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
              {Object.keys(data)
                .sort()
                .reverse()
                .map(year => {
                  if (year === "null") {
                    return
                  }
                  return (
                    <button
                      className={styles.imgButton}
                      onClick={() => this.selectShow(year)}
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
                    </button>
                  )
                })}
            </section>
          </section>
        </section>
      </>
    )
  }
}

export default ShowViewer
