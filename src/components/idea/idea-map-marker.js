import React from "react"
import { Link } from "gatsby"

export default (props) => {

	const { idea } = props;

	return (
    <Link to={'idea/'} style={{position: 'relative'}}>
    	<img src={'../images/map-icons/marker_new@3x.png'} alt={idea.title} style={{
    		position: 'absolute',
    		top: -41,
    		left: -23,
    		width: 46
    	}} />
    </Link>
	)
}
