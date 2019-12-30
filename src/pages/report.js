import React from "react"
import { Helmet } from "react-helmet"

import Nav from "../components/nav"
import Layout from "../components/layout"

export default ({ data }) => {

	return (
		<Layout>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>

			<Nav />

			<main className="u-ph10 u-mt60" style={{ maxWidth: '60rem', margin: '0 auto', background: 'none' }}>

				<h1 className="u-mb60 u-aligncenter">"1000 Ideas" Report</h1>

				<p className="u-opacity75 u-aligncenter" style={{ maxWidth: '100%' }}>The report is currently in the making; check back soon.</p>

				</main>
			
		</Layout>
	)
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`
