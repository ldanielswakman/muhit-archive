import React from "react"

function getTwitterURL(title, tags, ideaPath) {
	var url = 'http://twitter.com/share';
	url += '?text=' + title.substring(0, 120) + ' - Muhit';
	url += '&url=' + ideaPath;
	url += '&hashtags=muhit';
	url += tags.map((tag, i) => (',' + tag.name.toLowerCase() ))
	return url;
}

function getFacebookURL(title, tags, problem, solution, ideaPath) {
	var url = 'http://www.facebook.com/dialog/feed';
	url += '?app_id=1458298001134890';
	url += '&link=' + ideaPath;
	url += '&picture=';
	url += '&name=' + title;
	url += '&caption=' + problem;
	url += '&description=' + solution;
	url += '&message=' + solution;
	url += '&redirect_uri=http://www.muhit.co';
	return url;
}

export default (props) => {
	const { idea, ideaPath } = props;

	const whatsapp_text = '%22' + idea.title + '%22%0A' + ideaPath;
	const twitter_url = getTwitterURL(idea.title, idea.tags, ideaPath);
	const facebook_url = getFacebookURL(idea.title, idea.tags, idea.problem, idea.solution, ideaPath);

	return (
		<div className="u-floatright u-clearfix">
			<a href={'whatsapp://send?text=' + whatsapp_text} id="whatsapp_share_button" className="btn btn-secondary btn-whatsapp u-hidden"><i className="ion ion-social-whatsapp"></i></a>
			<a href={twitter_url} id="twitter_share_button" className="btn btn-secondary btn-twitter" target="_blank" rel="noopener noreferrer"><i className="ion ion-social-twitter"></i></a>
			<a href={facebook_url} id="facebook_share_button" className="btn btn-secondary btn-facebook" target="_blank" rel="noopener noreferrer"><i className="ion ion-social-facebook ion-15x"></i></a>
			<span className="btn btn-secondary u-ml5" onClick={() => { alert('this is a read-only version the Muhit project; support functionality does not work at the moment.') }}><i className="ion ion-thumbsup"></i> SUPPORT</span>
		</div>
	)
}
