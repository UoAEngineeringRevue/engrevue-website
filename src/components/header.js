import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"

const Header = () => (
  <header>
    <div className={styles.logoArea}>
      <h3 style={{ margin: 0 }}>
        <Link to="/">ENGINEERING REVUE</Link>
      </h3>
    </div>

    <nav>
      <ul className={styles.navList}>
        {/* The last non-primary link in this list should have extra
            margin-right between it and the primary link */}
        <li className={styles.navListItem} style={{ marginRight: `18px` }}>
          <Link to="/" className={styles.navLink}>
            PREVIOUS SHOWS
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link to="/page-2/" className={styles.navLinkPrimary}>
            WATCH NOW
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
