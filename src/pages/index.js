import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Nav from "../components/nav"
import Layout from "../components/layout"

export default ({ data }) => {
	
	const ideas = data.allIdeasJson.edges;

	return (
		<Layout>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>

			<Nav />

			<main className="u-ph10 u-mt60" style={{ maxWidth: '60rem', margin: '0 auto', background: 'none' }}>

				<h1 className="u-mb60">Muhit Story, Research report & Idea archive</h1>

				<div className="list list-expanded list_block u-mt10 u-mb20" style={{ marginTop: '5rem', maxWidth: '60rem' }}>
					<ul className="list-content">
						{ideas.map(({ node },i) => (
							<React.Fragment key={node.id}>
								{(i < 3) && (
				          <li>
				            <Link to={'idea/' + node.id} >
				            	<div className="badge badge-image u-floatleft u-mr15 u-pt15">{node.id}</div>
				              <strong>{node.title}</strong>
				              <p>{node.title}</p>
				            </Link>
				          </li>
				        )}
			        </React.Fragment>
						))}
						{(ideas.length > 5) && (
							<li><Link to="/ideas" className="u-pl80">View all ideas <i className="ion ion-chevron-right u-ml10 ion-075x"></i></Link></li>
						)}
					</ul>
				</div>

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
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`