import * as React from "react"
import { Col, Row } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as style from "./sidebar.module.css"
// import SidebarNav from "./sidebarNav"
import CatWidget from "./catWidget"
import TagWidget from "./tagWidget"


function Sidebar({}) {
    const data = useStaticQuery(graphql`
    query {
        file(relativeDirectory: {eq: "sidebarImage"}) {
            name
            childImageSharp {
                fluid(maxWidth: 960) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
  `)

const image = data.file

  return (
    <Col xs={12} sm={12} md={12} lg={4} xl={3} className={style.sidebarWrapper}>
            <Row>
                <Col xs={12} sm={8} lg={12} className={style.sidebar1st}>
                    <Img
                        className="d-block w-100"
                        fluid={image.childImageSharp.fluid}
                        alt={image.name}
                    />
                    {/* <h3>Sidebar Area</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p> */}
                    {/* <SidebarNav/> */}
                </Col>
                <Col xs={12} sm={4} lg={12} className={style.sidebar2nd}>
                    <CatWidget/>
                    <TagWidget/>
                </Col>
            </Row>

    </Col>
  )
}

export default Sidebar