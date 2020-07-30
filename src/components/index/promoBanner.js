import React, { useRef } from "react"
import styles from "./promoBanner.module.css"

import IndyJonesLogo from "../../assets/images/index/indy-jones-logo.png"
import downArrow from "../../assets/images/index/down-arrow-black.png"

const scrollToRef = ref =>
  window.scrollTo({ top: ref.current.offsetTop - 60, behavior: "smooth" })

const PromoBanner = () => {
  const flavourRef = useRef(null)
  const executeScroll = () => scrollToRef(flavourRef)

  return (
    <>
      <section className={styles.promo}>
        <div className={styles.promoContainer}>
          <div>
            <img
              src={IndyJonesLogo}
              alt="Indiana Jones and the Graders of the Lost Marks"
              className={styles.promoLogo}
            />
          </div>
          <div className={styles.promoBtns}>
            <div className={styles.promoBtn}>
              <a href="https://www.iticket.co.nz/events/2020/sep/indy-jones">
                BUY TICKETS
              </a>
            </div>
            <button onClick={executeScroll} className={styles.downBtn}>
              <img
                src={downArrow}
                alt="Downwards scrolling arrow"
                className={styles.downArrow}
              />
            </button>
          </div>
        </div>
        <div ref={flavourRef} />
      </section>
    </>
  )
}

export default PromoBanner
