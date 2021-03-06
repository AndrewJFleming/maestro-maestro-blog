import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Background from '../images/headerBG.png';
import Img from "gatsby-image"
import * as style from "./header.module.css"

import MainNav from "./mainNav"

const Header = ({ siteTitle, siteAuthor, siteLogo }) => (
  
  <header
    style={{
      background: `#0E1214`,
      // backgroundImage: `url(${Background})`,
    }}
  >
    <div className={style.headerWrapper}>

      <Link className={style.headerLogo} to="/">
        <Img fixed={siteLogo} alt={siteTitle}/>
      </Link>

      <MainNav/>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteAuthor: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteAuthor: ``,
}

export default Header
