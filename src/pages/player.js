import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as styles from "./player.module.css"

class PlayerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: "https://www.youtube.com/embed/vRLjd1y_Sj0",
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Player" />
        <section className={styles.container}>
          <div className={styles.videoWrapper}>
            <iframe
              src={this.state.videoURL}
              className={styles.videoPlayer}
              title="videoPlayer"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </Layout>
    )
  }
}

export default PlayerPage
