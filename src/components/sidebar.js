import * as React from "react"
import { Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
        <div
            style={{
                margin: `1rem auto`,
                padding: `1rem 2rem`,
                // backgroundColor: `lightgoldenrodyellow`,
            }}
        >
      
            <Img
                className="d-block w-100"
                fluid={image.childImageSharp.fluid}
                alt={image.name}
            />
            <h2>Sidebar Area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
        </div>
    </Col>
  )
}

export default Sidebar