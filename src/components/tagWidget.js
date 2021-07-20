import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as style from "./tagWidget.module.css"

const TagWidget = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpTag {
                nodes {
                    name
                    slug
                    link
                }   
            }
        }
    `)

const tags = data.allWpTag.nodes

  return (
    <div style={style.tagWidgetWrapper}>
        <h3>Tags</h3>
        <ul className={style.tagUnorderedList}>
            {tags.map((tag, index) => (
                <li>
                    <Link key={index} to={tag.link}>
                        {tag.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TagWidget