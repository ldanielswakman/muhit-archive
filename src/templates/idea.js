import React from "react"
import { graphql } from "gatsby"

import Nav from "../components/nav"
import Layout from "../components/layout"

export default ({ data }) => {
	const idea = data.ideasJson;
	return (
		<Layout>

			<Nav />

			<div style={{ textAlign: 'center', marginTop: '5rem' }}>
				<h1>{idea.title}</h1>
				<h3>{idea.id}</h3>
			</div>
			
		</Layout>
	)
}

export const query = graphql`
  query($id: String!) {
    ideasJson(id: { eq: $id }) {
      id
      title
    }
  }
`