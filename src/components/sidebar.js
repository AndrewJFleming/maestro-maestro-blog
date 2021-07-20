import * as React from "react"
import { Col } from 'react-bootstrap'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import * as style from "./sidebar.module.css"
import SidebarNav from "./sidebarNav"
import CatWidget from "./catWidget"


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
    <Col xs={12} sm={12} md={12} lg={4} xl={3}>
        <div className={style.sidebarWrapper}>
            <Img
                className="d-block w-100"
                fluid={image.childImageSharp.fluid}
                alt={image.name}
            />
            <h3>Sidebar Area</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <SidebarNav/>
            <CatWidget/>
        </div>
    </Col>
  )
}

export default Sidebar