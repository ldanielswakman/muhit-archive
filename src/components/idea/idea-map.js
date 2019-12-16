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
    <div className="" style={{ width: '100%', height: 450}}>
	    <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}>

				<IdeaMapMarker
					lat={40.855729}
					lng={29.143518}
					text={"test"}
				/>

				{ideas.map(({ node }) => (
					<IdeaMapMarker
						key={node.id}
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
