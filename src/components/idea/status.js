import React from "react"

function getIssueStatus(status, supporters) {
  var issue_status = {
    'title': 'Created',
    'class': (supporters < 5) ? status + '-empty' : status,
    'icon': 'ion-lightbulb'
  }
  if(status === 'in-progress') {
    issue_status = {
      'title': 'In progress',
      'class': status,
      'icon': 'ion-wrench'
    }
  } else if(status === 'solved') {
    issue_status = {
      'title': 'Solved',
      'class': status,
      'icon': 'ion-ios-checkmark'
    }
  }
  return issue_status
}

export default (props) => {
	const { idea } = props;
	const issueStatus = getIssueStatus(idea.status, idea.supporter_count);

	return (
		<div className="u-floatright u-relative">
      <div className={'label label-' + issueStatus.class + ' u-pr80 u-mr10'}>
        <i className={'ion ' + issueStatus.icon}></i>
        <span className="text extended"> {issueStatus.title}</span>
      </div>
      <div id="support_counter" className={'badge badge-circle-xlarge badge-support badge-' + issueStatus.class + ' u-pinned-topright u-pt15'} style={{ marginTop: '-15px'}}>
        <div className="value">{idea.supporter_count}</div>
        <label>SUPPORTERS</label>
      </div>
    </div>
	)
}
