import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as style from "./sidebar.module.css"

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
    <ul className={style.catUnorderedList}>
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