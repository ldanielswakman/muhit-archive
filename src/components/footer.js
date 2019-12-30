import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"

export default () => 
	<React.Fragment>
		<footer>
	    <div className="row row-nopadding">
        <div className="col-xs-12 u-aligncenter u-pb40">

          <Link to="/" id="nav_logo">
            <Logo />
          </Link>

        </div>
      </div>
  	</footer>
  	<div className="nav-spacer"></div>
	</React.Fragment>
	