import React from "react"
import { Link } from "gatsby"

export default (props) => {

	const { idea } = props;

	return (
    <Link to={'idea/'} style={{position: 'relative'}}>
    	<img src={'../map-icons/marker_new@3x.png'} style={{
    		position: 'absolute',
    		top: -41,
    		left: -23,
    		width: 46
    	}} />
    </Link>
	)
}
