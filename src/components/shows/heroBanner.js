import React from "react"
import styles from "./heroBanner.module.css"
import data from "./data.js"
import curtains from "../../assets/images/watch/curtains.jpg"


class HeroBanner extends React.Component {
  constructor(props) {
    super(props)
  }  

  render () {
    return (
      
      <section style={{ color: 'white', height: '20vh', minHeight: '100px',
        backgroundPosition: 'center', backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', backgroundAttachment: 'fixed',
        backgroundImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.75) 50%,
          rgba(0, 0, 0, 0)
          ),
          url(${data[this.props.year]['cover-image']})`
      }}>
        <div className={styles.heroContainer}>
          <div className={styles.heroTextArea}>
            <h1>{data[this.props.year]['title']}</h1>
            <p>{data[this.props.year]['subtitle']}</p>
          </div>
        </div>
      </section>
      
    )
  }
}

export default HeroBanner
