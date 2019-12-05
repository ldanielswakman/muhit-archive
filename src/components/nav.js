import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"

export default () => 
	<React.Fragment>
		<nav>
	    <div className="row row-nopadding">
        <div className="col-xs-12 u-aligncenter">

          <div className="u-floatright u-nowrap">
            <a href="/login" className="btn btn-quaternary u-mt15 u-mr5" style={{ opacity: 0.2, pointerEvents: 'none' }}>
              <span className="condensed"><i className="ion ion-log-in ion-15x u-floatleft"></i></span>
              <span className="extended">LOG IN</span>
            </a>
            <a href="/login/facebook" className="btn btn-facebook u-mr5 u-mt15" style={{ opacity: 0.2, pointerEvents: 'none' }}>
              <i className="ion ion-social-facebook ion-15x u-floatleft u-ph5"></i>
              <span className="extended">
                <span className="u-floatleft u-mt5">CONNECT</span>
              </span>
            </a>
            <span className="extended">
              <a href="/register" className="btn btn-primary u-mt15 u-mr15" style={{ opacity: 0.2, pointerEvents: 'none' }}>SIGN UP</a>
            </span>
          </div>
            
          <Link to="/" id="nav_logo" className="u-floatleft">
            <Logo />
          </Link>

          <ul className="menu">
              <li>
                  <Link to="/" className="u-nowrap" activeClassName="active">
                      <i className="ion ion-android-home ion-15x"></i>
                      Story
                  </Link>
              </li>
              <li>
                  <Link to="/report" className="u-nowrap" activeClassName="active">
                      <i className="ion ion-clipboard ion-15x"></i>
                      Report
                  </Link>
              </li>
              <li>
                  <Link to="/ideas" className="u-nowrap" activeClassName="active">
                      <i className="ion ion-lightbulb ion-15x"></i>
                      Idea archive
                  </Link>
              </li>
          </ul>

        </div>
      </div>
  	</nav>
  	<div style={{ height: '80px' }}></div>
	</React.Fragment>
	