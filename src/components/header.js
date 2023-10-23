import React, { useState } from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"

const Header = () => {
  const [navExpanded, setNavExpanded] = useState(false)

  return (
    <header>
      <div className={styles.logoArea}>
        <h3 style={{ margin: 0 }}>
          <Link to="/">ENGINEERING REVUE</Link>
        </h3>
        <button
          className={styles.menuBtn}
          onClick={() => setNavExpanded(!navExpanded)}
        />
      </div>

      <nav className={navExpanded ? styles.navExpanded : styles.navCollapsed}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link to="/sponsor/" className={styles.navLink}>
              SPONSOR US
            </Link>
          </li>
          <li className={styles.navListItemPenultimate}>
            <Link to="/shows/" className={styles.navLink}>
              PREVIOUS SHOWS
            </Link>
          </li>
          <li className={styles.navListItem}>
              <a
                href="https://www.youtube.com/c/engineeringrevue"
                className={styles.navLinkPrimary}
              >
                WATCH
              </a>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
