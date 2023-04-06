import React from "react"
import * as styles from "./heroBanner.module.css"
import data from "./data.js"

class HeroBanner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.defined === true) {
      // If a year HAS been entered...
      return (
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroTextArea}>
              <h1 className={styles.title}>{data[this.props.year]["title"]}</h1>
              <p className={styles.subtitle}>
                {data[this.props.year]["subtitle"]}
              </p>
            </div>
          </div>
        </section>
      )
    } else {
      // Else, if no year has been selected, is the base state of the previous revues page...
      return (
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroTextArea}>
              <h1 className={styles.title}>PREVIOUS REVUES</h1>
              <p className={styles.subtitle}>
                Did you know the Engineering Revue has been running since 2008?
                <br />
                See what we've been up to "recently"...
              </p>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default HeroBanner
