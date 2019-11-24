import React from "react"
import Logo from "./logo"

export default () => 
	<React.Fragment>
		<nav>
	    <div class="row row-nopadding">
        <div class="col-xs-12 u-aligncenter">

          <div class="u-floatright u-nowrap">
            <a href="/login" class="btn btn-quaternary u-mt15 u-mr5" style={{ opacity: 0.2, pointerEvents: 'none' }}>
              <span class="condensed"><i class="ion ion-log-in ion-15x u-floatleft"></i></span>
              <span class="extended">LOG IN</span>
            </a>
            <a href="/login/facebook" class="btn btn-facebook u-mr5 u-mt15" style={{ opacity: 0.2, pointerEvents: 'none' }}>
              <i class="ion ion-social-facebook ion-15x u-floatleft u-ph5"></i>
              <span class="extended">
                <span class="u-floatleft u-mt5">CONNECT</span>
              </span>
            </a>
            <span class="extended">
              <a href="/register" class="btn btn-primary u-mt15 u-mr15" style={{ opacity: 0.2, pointerEvents: 'none' }}>SIGN UP</a>
            </span>
          </div>
            
          <a href="/" id="nav_logo" className="u-floatleft">
              <Logo />
          </a>

          <ul class="menu">
              <li className="active">
                  <a href="/" className="u-nowrap">
                      <i class="ion ion-android-home ion-15x"></i>
                      Story
                  </a>
              </li>
              <li>
                  <a href="/report" className="u-nowrap">
                      <i class="ion ion-clipboard ion-15x"></i>
                      Report
                  </a>
              </li>
              <li>
                  <a href="/archive" className="u-nowrap">
                      <i class="ion ion-lightbulb ion-15x"></i>
                      Idea archive
                  </a>
              </li>
          </ul>

        </div>
      </div>
  	</nav>
  	<div style={{ height: '5rem' }}></div>
	</React.Fragment>
	