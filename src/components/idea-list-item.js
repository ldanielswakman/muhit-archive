import React from "react"
import { Link } from "gatsby"

import Tag from "../components/tag"

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

function getImageURL(url) {
  const baseURL = '//muhit.s3-eu-west-1.amazonaws.com/';
  return baseURL + url;
}

export default (props) => {
  
  const { idea, ignoreImage } = props;
  const issueStatus = getIssueStatus(idea.status, idea.supporter_count);
  const image = (idea.images.length > 0) ? idea.images[0].image : 'placeholders/issue.jpg';
  const imageURL = getImageURL(image);

  return (
    <Link to={'idea/' + idea.id}>

      {ignoreImage ? (
        <div className="badge u-floatleft u-mr15 u-width50 u-pv10" style={{ height: 50 }}>
          <i className={'ion ion-lightbulb ion-15x c-light'}></i>
        </div>
      ):(
        <div className="badge badge-image u-floatleft u-mr15">
          <img src={ imageURL } alt={idea.title} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
      )}

      <div className={'badge badge-support badge-' + issueStatus.class + ' u-floatright u-mt10 u-pv5 u-ph10 u-ml10'}>
          <i className={'ion ' + issueStatus.icon + ' u-mr5'}></i>
          <strong>{idea.supporter_count}</strong>
      </div>

      {idea.comments.length > 0 && (
        <div className="badge badge-comments hasTooltip u-floatright u-mt10 u-pv5 u-ph10 u-ml10">
          <i className="ion ion-ios-chatbubble-outline u-mr5"></i>
          <strong>{idea.comments.length}</strong>
        </div>
      )}

      <div className="u-ml55">
        <strong>{idea.title}</strong>
        <p>

          {idea.tags.map((tag, i) => (
            <React.Fragment key={i}>
              {(i < 5) && (
                <Tag tag={tag} />
              )}

              {i === 5 && (
                <Tag tag={{ 'name': '...', 'background' : 'eeeeee' }} />
              )}
            </React.Fragment>
          ))}

          <span className="extended">
            |<span title={idea.location} className="u-ml10">{ idea.location.split(', ')[0] }</span>
          </span>

          <span className="date u-floatleft u-mr10">{idea.created_at}</span>

        </p>
      </div>
    </Link>
  )
}
