import React from "react"
import Nav from "../components/nav"
import Layout from "../components/layout"

export default () => (
	<Layout>

		<Nav />

		<div style={{ textAlign: 'center', marginTop: '5rem' }}>
			<h1>{page.title}</h1>
		</div>
		
	</Layout>
)
