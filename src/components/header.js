import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navExpanded: false,
    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar(e) {
    e.preventDefault()
    this.setState({
      navExpanded: !this.state.navExpanded,
    })
  }

  render() {

    const navState = (this.state.navExpanded ? styles.navExpanded : styles.navCollapsed);

    return (
      <header>
        <div className={styles.logoArea}>
          <h3 style={{ margin: 0 }}>
            <Link to="/">ENGINEERING REVUE</Link>
          </h3>
          <button className={styles.menuBtn} onClick={this.toggleNavbar} />
        </div>

        <nav className={navState}>
          <ul className={styles.navList}>
            {/* <li className={styles.navListItem}>
              <Link to="/" className={styles.navLink}>
                HISTORY
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link to="/" className={styles.navLink}>
                SPONSOR US
              </Link>
            </li> */}
            <li className={styles.navListItemPenultimate}>
              <Link to="/shows/" className={styles.navLink}>
                PREVIOUS SHOWS
              </Link>
            </li>
            <li className={styles.navListItem}>
              <a
                href="https://www.youtube.com/watch?v=9EsIMuKK91I"
                className={styles.navLinkPrimary}
              >
                WATCH NOW
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
