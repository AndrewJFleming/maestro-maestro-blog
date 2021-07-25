import * as React from "react"
import { graphql } from "gatsby"
import { Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Slider from "../components/slider"
import JumbotronComponent from "../components/jumbotron"
import FeatCats from "../components/featCats"
// import FeatCats2 from "../components/featCats2"

let randomNumber =  "#f00e2e";

const IndexPage = ({ data }) => (
  <Layout>

    <Seo title="Home" />

    {/* <Slider/> */}
    <JumbotronComponent/>


    <article
      style={{
        margin: `0 auto`,
        padding: `1rem 2rem`,
      }}
      >
      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />

      <FeatCats/>
      {/* <FeatCats2/> */}

    </article>


  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    wpPage(uri: {eq: "/"}) {
      id
      title
      content
    }
  }
`

export default IndexPage