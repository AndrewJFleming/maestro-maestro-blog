import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const CatWidget = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpCategory {
                nodes {
                    name
                    slug
                    link
                }   
            }
        }
    `)

const categories = data.allWpCategory.nodes

  return (
    <ul>
        {categories.map((cat, index) => (
            <li>
                <Link key={index} to={cat.link}>
                    {cat.name}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default CatWidget