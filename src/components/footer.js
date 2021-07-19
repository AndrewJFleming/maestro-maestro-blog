import * as React from "react"
import * as style from "./footer.module.css"

import FooterNav from "./footerNav"

const Footer = ({ siteAuthor }) => (
  
  <footer>
    <div className={style.footerWrapper}>
      <div className={style.footerBottom}>
        © {new Date().getFullYear()},
        {` `}
        <a href="http://andrewjfleming.com/">{siteAuthor}</a>
      </div>
      <FooterNav/>
    </div>
  </footer>
)

export default Footer