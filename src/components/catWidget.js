import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as style from "./catWidget.module.css"

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
    <div style={style.catWidgetWrapper}>
        <h3>Categories</h3>
        <ul className={style.catUnorderedList}>
            {categories.map((cat, index) => index < 5 && (
                <li>
                    <Link key={index} to={cat.link}>
                        {cat.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CatWidget