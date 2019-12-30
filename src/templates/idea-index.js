import React, { useState } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Nav from "../components/nav"
import Footer from "../components/footer"
import Layout from "../components/layout"
import IdeaListItem from "../components/idea-list-item"
import IdeaMap from "../components/idea/idea-map"
import Pagination from "../components/pagination"
import Search from "../components/search"

export default ({ data, pageContext }) => {
  const ideasPaginated = data.ideasPaginated.edges;
  const { currentPage, numPages } = pageContext;
  const [numSearchResults, handleSearchResults] = useState(0);

  var ideasTotal = [];
  data.ideasTotal.edges.map((item, i) => {
    ideasTotal.push(item.node);
  })

  console.log(ideasPaginated);
  console.log(ideasTotal);

  return (
    <Layout>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Idea List - {data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>

      <Nav />

      <main className="u-ph10" style={{ maxWidth: '60rem', margin: '0 auto', background: 'none' }}>

        <IdeaMap ideas={ideasPaginated} />

        <Search ideas={ideasTotal} numResults={(val) => handleSearchResults(val)} />

        {numSearchResults === undefined && (
          <React.Fragment>
            <div className="list list-expanded list_block u-mt10 u-mb20" style={{ marginTop: '5rem', maxWidth: '60rem' }}>
              <ul className="list-content">
                {ideasPaginated.map(({ node }) => (
                  <li key={node.id}>
                    <IdeaListItem idea={node} />
                  </li>
                ))}
              </ul>
            </div>

            <Pagination currentPage={currentPage} numPages={numPages} />
          </React.Fragment>
        )}

        </main>

        <Footer />
      
    </Layout>
  )
}

export const query = graphql`
  query query($skip: Int!, $limit: Int!) {
    ideasPaginated: allIdeasJson(
      limit: $limit
      skip: $skip
      sort: { fields: [created_at], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          title
          supporter_count
          status
          created_at(formatString: "D MMM YYYY")
          location
          coordinates
          images {
          	id
          	image
          }
          tags {
          	name
          	background
          }
          comments {
          	id
          }
        }
      }
    }
    ideasTotal: allIdeasJson(
      sort: { fields: [created_at], order: DESC }
    ) {
      edges {
        node {
          id
          title
          supporter_count
          status
          created_at(formatString: "D MMM YYYY")
          location
          coordinates
          images {
            id
            image
          }
          tags {
            name
            background
          }
          comments {
            id
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`

// export default IdeaIndex