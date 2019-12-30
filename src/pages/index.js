import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Nav from "../components/nav"
import Footer from "../components/footer"
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

				<h1 className="u-mb20">Muhit Project</h1>

				<p className="u-opacity75 u-mb20">Muhit was a crowdsourced neighbourhood improvement platform, that ran as a non-profit initiative from 2015 to 2018 in Turkey. Its crowdsourced mapping tool allowed Turkish citizens to report problems and ideas in their neighbourhood, thereby creating a dataset of the most important themes facing urban environments. A report with the outcomes is currently in the making.</p>

				<div className="u-mb40" style={{ display: 'flex' }}>
					<Link to="/ideas" className="btn btn-primary u-mr20">Browse idea archive</Link>
					<a href="http://hikaye.muhit.co/en" className="btn btn-subtle">landing page</a>
				</div>

				<p className="u-opacity75">Browse latest ideas:</p>

				<div className="list list-small list_block u-mt10 u-mb20" style={{ marginTop: '5rem', maxWidth: '60rem' }}>
					<ul className="list-content">
						{ideas.map(({ node },i) => (
							<React.Fragment key={node.id}>
								{(i < 5) && (
				          <li>
				            <Link to={'idea/' + node.id} className="u-lineheight15">
				            	<div className="badge badge-image u-floatleft u-mr15 u-pt15">{node.id}</div>
				              <strong className="u-block u-pt5">{node.title}</strong>
				              <p>{node.created_at}</p>
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

				<Footer />
			
		</Layout>
	)
}

export const query = graphql`
  query {
    allIdeasJson(
    	sort: { fields: [created_at], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          title
          created_at(formatString: "D MMM YYYY")
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