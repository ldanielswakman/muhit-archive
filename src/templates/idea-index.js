import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Nav from "../components/nav"
import Layout from "../components/layout"
import IdeaListItem from "../components/idea-list-item"
import IdeaMap from "../components/idea/idea-map"
import Pagination from "../components/pagination"
import Tag from "../components/tag"

export default ({ data, pageContext }) => {

	const ideas = data.allIdeasJson.edges;
  const tags = data.allTagsJson.edges;
  const { currentPage, numPages } = pageContext;

  const [state, setState] = React.useState({
    tagDropdownOpen: false
  })
  const { tagDropdownOpen } = state;

	return (
		<Layout>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Idea List - {data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>

			<Nav />

			<main className="u-mt60" style={{ maxWidth: '60rem', margin: '0 auto', background: 'none' }}>

				<h1 className="u-mb60">Muhit Story, Research report & Idea archive</h1>
				<span>Total number of ideas:</span><strong>{data.allIdeasJson.totalCount}</strong>
				<br />

        <div style={{display: 'flex'}}>
          <div className="hasDropdown">
            <a onClick={() => { setState({ tagDropdownOpen: !tagDropdownOpen }) } } className="btn btn-sm btn--filter">Tags <i className="ion ion-chevron-down" /></a>
            <div className={'dropdown dropdown-onleft' + (tagDropdownOpen && ' isOpen')} style={{ right: 'auto', left: 0 }}>
              <ul>
                {tags.map(({ node }) => (
                  <React.Fragment key={node.id}>
                    {(node.name.length > 0) &&
                      <li className="u-clearfix">
                        <a href={'/tag/' + node.id }>
                          <span className="tag tag-collapsed" style={{ 'background': '#' + node.background }} />
                          {node.name}
                        </a>
                      </li>
                    }
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <IdeaMap ideas={ideas} />

				<div className="list list-expanded list_block u-mt10 u-mb20" style={{ marginTop: '5rem', maxWidth: '60rem' }}>
					<ul className="list-content">
						{ideas.map(({ node }) => (
		          <li key={node.id}>
		          	<IdeaListItem idea={node} />
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
    allTagsJson {
      totalCount
      edges {
        node {
          id
          name
          background
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