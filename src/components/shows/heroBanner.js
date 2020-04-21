import React from "react"
import styles from "./heroBanner.module.css"
import data from "./data.js"
import curtains from "../../assets/images/watch/curtains.jpg"

class HeroBanner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.defined === true) {
      // If a year HAS been entered...
      return (
        <section
          style={{
            color: "white",
            height: "20vh",
            minHeight: "100px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.75) 50%,
          rgba(0, 0, 0, 0)
          ),
          url(${data[this.props.year]["cover-image"]})`,
          }}
        >
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
        <section
          style={{
            color: "white",
            height: "20vh",
            minHeight: "100px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.75) 50%,
          rgba(0, 0, 0, 0)
          ),
          url(${curtains})`,
          }}
        >
          <div className={styles.heroContainer}>
            <div className={styles.heroTextArea}>
              <h1 className={styles.title}>PREVIOUS REVUES</h1>
              <p className={styles.subtitle}>
                Did you know we've been going for over 10 years!
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
