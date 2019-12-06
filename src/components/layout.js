import React from "react"

class Layout extends React.Component {

	constructor(props) {
		super(props);
		this.state = { loadClass: '' }
	}

	componentDidMount () {
    this.setState({ 'loadClass': 'isLoaded' })
	}

	render () {
		return (
		  <div className={'layout ' + this.state.loadClass}>
		    {this.props.children}
		  </div>
		)
	}
}

export default Layout
