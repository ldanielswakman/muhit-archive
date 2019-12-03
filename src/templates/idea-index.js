import React from "react"
import { Link, graphql } from "gatsby"

import Nav from "../components/nav"
import Layout from "../components/layout"
import Pagination from "../components/pagination"

export default ({ data, pageContext }) => {
	const ideas = data.allIdeasJson.edges;

  const { currentPage, numPages } = pageContext;
  // const isFirst = currentPage === 1;
  // const isLast = currentPage === numPages;
  // const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  // const nextPage = (currentPage + 1).toString();

	return (
		<Layout>

			<Nav />

			<main className="u-mt60" style={{ maxWidth: '60rem', margin: '0 auto', background: 'none' }}>

				<h1 className="u-mb60">Muhit Story, Research report & Idea archive</h1>
				<span>Total number of ideas:</span><strong>{data.allIdeasJson.totalCount}</strong>
				<br />

				<div className="list list-expanded list_block u-mt10 u-mb20" style={{ marginTop: '5rem', maxWidth: '60rem' }}>
					<ul className="list-content">
						{ideas.map(({ node }) => (
			          <li key={node.id}>
			            <Link to={'idea/' + node.id} >
			            	<div className="badge badge-image u-floatleft u-mr15 u-pt15">{node.id}</div>
			              <strong>{node.title}</strong>
			              <p>{node.title}</p>
			            </Link>
			          </li>
			        ))}
						</ul>
					</div>

				<Pagination currentPage={currentPage} numPages={numPages} />

				</main>
			
		</Layout>
	)
}

export const query = graphql`
  query query($skip: Int!, $limit: Int!) {
    allIdeasJson(
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          title
        }
      }
    }
  }
`