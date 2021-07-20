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
        <div className={style.tagUnorderedList}>
            {tags.map((tag, index) => [
                index > 0 && ", ",
                <Link key={index} to={tag.link}>
                    {tag.name}
                </Link>,
            ])}
        </div>
    </div>
  )
}

export default TagWidget