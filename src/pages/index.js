import React from "react"
import { Link, graphql } from "gatsby"

import Nav from "../components/nav"
import Layout from "../components/layout"

export default ({ data }) => {
	const ideas = data.allIdeasJson.edges;

	return (
		<Layout>

			<Nav />

			<main className="u-mt60" style={{ maxWidth: '60rem', margin: '0 auto', background: 'none' }}>

				<h1 className="u-mb60">Muhit Story, Research report & Idea archive</h1>

				<div className="list list-expanded list_block u-mt10 u-mb20" style={{ marginTop: '5rem', maxWidth: '60rem' }}>
					<ul className="list-content">
						{ideas.map(({ node }) => (
			          <li key={node.id}>
			            <Link to={node.id} >
			            	<div className="badge badge-image u-floatleft u-mr15 u-pt15">{node.id}</div>
			              <strong>{node.title}</strong>
			              <p>{node.title}</p>
			            </Link>
			          </li>
			        ))}
						</ul>
					</div>

				<p className="u-mb20">This data is being pulled from <strong>ideas.json</strong>. Not only does it generate this list on client runtime — it also builds static pages!</p>

				</main>
			
		</Layout>
	)
}

export const query = graphql`
  query {
    allIdeasJson {
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