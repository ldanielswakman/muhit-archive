import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Nav from "../components/nav"
import Layout from "../components/layout"
import IdeaActions from "../components/idea/actions"
import IdeaStatus from "../components/idea/status"

function getImageURL(url, size = '80x80') {
  const baseURL = '//d1vwk06lzcci1w.cloudfront.net/';
  return baseURL + size + '/' + url;
}

export default ({ data }) => {
	const idea = data.ideasJson;

	const ideaPath = (typeof window !== `undefined`) ? window.location : data.site.siteMetadata.siteUrl;

	const imagecol = (idea.images.length === 0) ? 'col-xs-4 extended' : 'col-sm-8';
	const mapcol = (idea.images.length === 0) ? 'col-sm-8 compact' : 'col-sm-4';

	// map longitude & latitude, and hide if no information
	var coord = { lon: 0, lat: 0 }
	if (idea.coordinates.lenth > 0) {
		const coords = idea.coordinates.split(',');
		coord = {
			lon: coords[0].trim(),
			lat: coords[1].trim()
		}
	}
	const mapIsVisible = (coord.lon > 0 && coord.lat > 0) ? true : false;

	const update_strings = {
		'idea_status_new': 'Idea created',
    'idea_status_supported': 'There are more than 10 supporters for this idea',
    'idea_status_in-progress': 'Idea was marked as \'in progress\'',
    'idea_status_solved': 'Idea was solved',
    'idea_status_deleted': 'Idea deleted'
  };

	return (
		<Layout>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{idea.title} - {data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>

			<Nav />

			<section className="flash-container"></section>

			<header className="u-relative header-show"></header>

			<section>
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
						<div className="card card-issue">

							<div className="card-header u-clearfix">
								<IdeaActions idea={idea} ideaPath={ideaPath} />
								<a href="javascript:window.history.back()" className="u-floatleft u-pr20"><i className="ion ion-android-arrow-back ion-2x"></i></a>
								<span className="title u-inlineblock u-mt5">
									<Link to={'/ideas?location=' + encodeURIComponent(idea.location)}>{ idea.location }</Link>,
								</span>
							</div>

							<div className="card-content">

								<IdeaStatus idea={idea} />

                <h3 className="u-mh5 u-mv10">{idea.title}</h3>

                <div className="row row-nopadding media u-mv20">
                  <div className={'media-images ' + imagecol }>

                    <div id="slides">
                    	{idea.images.length === 0 ? (
                        <div className="bg-lightest u-pa30 u-aligncenter">
                          <i className="ion ion-image ion-4x c-lighter"></i>
                          <div className="c-light"><strong>No images present</strong></div>
                        </div>
                    	) : (
                    		<React.Fragment>
                    			{idea.images.map((image, i) => (
                            <div key={i} style={{ height: '100%' }}>
                              <div
                              	className="media-image"
                              	style={{ backgroundImage: 'url(' + getImageURL(image.image, '600x300') + ')' }}
                              	title={ idea.title }
                            	/>
                            </div>
                  				))}
                    		</React.Fragment>
                    	)}
                    </div>

                  </div>

                  {mapIsVisible && (
                    <div className={'media-map ' + mapcol } data-status="">
                      <div id="map-canvas" />
                    </div>
                  )}
                </div>

                <div className="row row-nopadding u-mv10">
                  <div className="col-md-9">
              			{idea.tags.map((tag, i) => (
                      <span key={i} className="tag u-mv5 u-mr10" style={{ backgroundColor: '#' + tag.background }}>{ tag.name }</span>
            				))}
                  </div>
                  <div className="col-md-3 u-alignright">
                      <label className="c-light u-mt10"><i className="ion ion-android-calendar u-mr5"></i>{idea.created_at}</label>
                  </div>
                </div>

              	{/* @TODO: Linkify texts */}

                { idea.problem.length > 0 && (
                	<div className="problem u-mb20">
                    <h4 className="c-light">Problem</h4>
                    <p>{ idea.problem }</p>
                	</div>
                )}

                { idea.solution.length > 0 && (
                	<div className="solution u-mb5">
                    <h4 className="c-light">Solution</h4>
                    <p>{ idea.solution }</p>
                	</div>
              	)}

                <div className="u-clearfix u-mt20">
                	{idea.is_anonymous === 0 ? (
                		<React.Fragment>
                      <div className="badge badge-circle badge-user u-floatleft u-mr10">
                          <img src={getImageURL(idea.user.picture, '40x40')} alt={idea.user.first_name} />
                      </div>
                      <div className="c-light u-pt5">
                          {idea.user.first_name} {idea.user.last_name}
                      </div>
                		</React.Fragment>
              		) : (
              			<small className="c-light"><em>This idea has been submitted anonymously.</em></small>
              		)}
                </div>

							</div>

              <div className="card-footer u-clearfix">

                  <div className="u-floatright">
                    <span className="hasTooltip u-ml10">
                      <a href={ 'https://docs.google.com/forms/d/1Gwyj1OZ_MkMF7QYBN625ADYWIifMsQdFqACA7uTcof0/viewform?entry.22153642&entry.903793893&entry.960103609&entry.512574518=' + idea.title} className="btn btn-tertiary" target="_blank"><i className="ion ion-alert-circled"></i></a>
                      <span className="tooltip tooltip-alignright u-width300 u-mr5">
                        <i className="ion ion-alert-circled ion-15x u-floatleft u-mv10 u-mr10"></i>
                        <div className="u-ml30">Does this idea contain inappropriate content? Let us know.</div>
                      </span>
                    </span>
                  </div>

                  <ul class="issue-history title">
                			{idea.updates.map((update, i) => (
                        <li key={i}>
                          <i class="ion ion-record u-mr10"></i>
                          <span class="date">{update.created_at}</span> –
                          <strong>{update_strings['idea_status_' + update.new_status]}</strong>.
                        </li>
              				))}
                  </ul>

							</div>

						</div>
					</div>
				</div>
			</section>

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
      problem
      solution
      supporter_count
      status
      created_at(formatString: "D MMM YYYY")
      location
      coordinates
      is_anonymous
      images {
      	id
      	image
      }
      tags {
      	name
      	background
      }
      user {
      	first_name
      	last_name
      	picture
      }
      updates {
      	created_at(formatString: "D MMM YYYY")
      	new_status
      }
      comments {
      	id
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
