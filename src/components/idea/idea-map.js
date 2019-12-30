import React from "react"
import GoogleMapReact from 'google-map-react'

import IdeaMapMarker from './idea-map-marker'

function getLat(node) {
	return (node.coordinates && node.coordinates.split(',')[0].length > 0) ? node.coordinates.split(',')[0] : 0;
}
function getLng(node) {
	return (node.coordinates && node.coordinates.split(',')[1].length > 0) ? node.coordinates.split(',')[1] : 0;
}

export default (props) => {

	const { ideas } = props;

	const apiKey = 'AIzaSyCFdvxExZmn1ktbIslHDnyOGOp6Dek3asU';
	const center = { lat: 39.268993, lng: 34.570262 };
	const zoom = 6;
	return (
    <div className="gatsby-map">
	    <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}>

				{ideas.map(({ node }, i) => (
					<IdeaMapMarker
						key={i}
						idea={node}
						lat={getLat(node)}
						lng={getLng(node)}
						text={node.title}
					/>
        ))}

      </GoogleMapReact>
    </div>
	)
}
