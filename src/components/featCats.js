import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Row, Col } from 'react-bootstrap'

export default function FeatCats() {
    const data = useStaticQuery(graphql`
    query featCatQuery {
        allWpCategory {
                nodes {
                    name
                    slug
                    link
                }   
            }
    }
`)

    return (
        <Row>
            {data.allWpCategory.nodes.map((cat, index) => index < 3 && (
                <Col id={`featCatBG${index}`} className="featCatBG">
                    <Link key={index} to={cat.link}>
                        <div className="featCatOverlay">
                            <h4>{cat.name}</h4>
                        </div>
                    </Link>
                </Col>
            ))}
        </Row>
    )
  }