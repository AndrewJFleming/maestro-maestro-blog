/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Background from '../images/body-BG.jpg';

import { Row, Col } from 'react-bootstrap';
import Header from "./header"
import Sidebar from "./sidebar"
import FooterNav from "./footerNav"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
      file(name: {eq: "header-logo"}) {
        id
        childImageSharp {
          fixed(width: 197, height: 63) {
          ...GatsbyImageSharpFixed
        }
        }
      }
    }
  `)

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata?.title || `Title`} 
        siteAuthor={data.site.siteMetadata?.author} 
        siteLogo={data.file.childImageSharp.fixed} 
      />
      <div className="mainWrapper"
        style={{
          margin: `0 auto`,
          padding: `0 2rem 2rem`,
          backgroundImage: `url(${Background})`,
          // backgroundSize: `cover`,
          backgroundPosition: `bottom`,
          backgroundAttachment: `fixed`,
          minHeight: `100vh`,
        }}
      >

        <Row>
          <Col xs={12} sm={12} md={8} lg={9} xl={9} >
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            // padding: `0 1.0875rem 1.45rem`,
            padding: `0`,
            backgroundColor: `rgba(255, 255, 255, 0.7)`,
        }}
          >{children}
        </main>
          </Col>
          <Sidebar/>
        </Row>
      </div>
        <footer
          style={{
            marginTop: `0`,
            margin: `0 auto`,
            // maxWidth: 960,
            backgroundColor: `#19171a`,
            padding: `1rem`,
          }}
        >
          <FooterNav/>
          <div className="footerBottom">
            © {new Date().getFullYear()},
            {` `}
            <a href="http://andrewjfleming.com/">{data.site.siteMetadata?.author}</a>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
