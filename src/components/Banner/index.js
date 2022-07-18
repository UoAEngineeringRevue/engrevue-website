import React, { useRef } from "react"
import * as styles from "./style.module.css"

import downArrowBlack from "../../assets/images/down-arrow-black.png"
import downArrowWhite from "../../assets/images/down-arrow-white.png"

const scrollToRef = (ref) => {
  window.scrollTo({ top: ref.current.offsetTop - 60, behavior: "smooth" })
}

const Banner = ({
  background,
  color,
  logo,
  heading,
  body,
  callToActionLink,
  callToActionText,
  tint,
  showDownBtn,
}) => {
  const flavourRef = useRef(null)
  const executeScroll = () => scrollToRef(flavourRef)

  const tintCss = tint && {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    backgroundBlendMode: "multiply",
  }

  return (
    <>
      <section
        className={styles.banner}
        style={{
          ...tintCss,
          backgroundImage: `url(${background})`,
          color: `${color}`,
        }}
      >
        <div className={styles.container}>
          {logo && (
            <div>
              <img src={logo} alt="" className={styles.logo} />
            </div>
          )}
          <div className={styles.textArea}>
            {heading && <h1 className={styles.heading}>{heading}</h1>}
            {body && <p>{body}</p>}
          </div>
          <div className={styles.buttons}>
            {callToActionLink && (
              <div className={styles.callToActionBtn}>
                <a
                  className={styles.callToActionBtnLink}
                  href={callToActionLink}
                >
                  {callToActionText}
                </a>
              </div>
            )}
            {showDownBtn && (
              <button onClick={executeScroll} className={styles.downBtn}>
                <img
                  src={color === "black" ? downArrowBlack : downArrowWhite}
                  alt="Downwards scrolling arrow"
                  className={styles.downArrow}
                />
              </button>
            )}
          </div>
        </div>
        <div ref={flavourRef} />
      </section>
    </>
  )
}

export default Banner
