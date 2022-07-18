import React, { useRef } from "react"
import * as styles from "./promoBanner.module.css"

import GreaseLogo from "../../assets/images/index/grease-logo.png"
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
              src={GreaseLogo}
              alt="C's Get DeGrease"
              className={styles.promoLogo}
            />
          </div>
          <div className={styles.promoBtns}>
            <div className={styles.promoBtn}>
              <a href="https://www.iticket.co.nz/events/2021/aug/cs-get-degrease">
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
