import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#343a40`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `18px`,
        display: `flex`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          ENGINEERING REVUE
        </Link>
      </h3>

      <nav style={{ margin: `0`, flex: 1, }}>
        <ul style={{ margin: `0`, display: `flex`, justifyContent: `flex-end` }}>
          <li style={{ margin: `0 16px` }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              PREVIOUS SHOWS
            </Link>
          </li>
          <li style={{ margin: `0 16px` }}>
            <Link
              to="/page-2/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              WATCH NOW
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
