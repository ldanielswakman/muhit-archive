import React from "react"

export default () => 
	<React.Fragment>
		<nav>
	    <div class="row row-nopadding">
        <div class="col-xs-12 u-aligncenter">
          <div class="u-floatright u-nowrap">
            <a href="/login" class="btn btn-quaternary u-mt15 u-mr5">
              <span class="condensed"><i class="ion ion-log-in ion-15x u-floatleft"></i></span>
              <span class="extended">LOG IN</span>
            </a>
            <a href="/login/facebook" class="btn btn-facebook u-mr5 u-mt15">
              <i class="ion ion-social-facebook ion-15x u-floatleft u-ph5"></i>
              <span class="extended">
                <span class="u-floatleft u-mt5">CONNECT</span>
              </span>
            </a>
            <span class="extended">
              <a href="/register" class="btn btn-primary u-mt15 u-mr15">SIGN UP</a>
            </span>
          </div>
        </div>
      </div>
  	</nav>
  	<div style={{ height: '5rem' }}></div>
	</React.Fragment>
	