import React from "react"

function getTwitterURL(title, tags) {
	var url = 'http://twitter.com/share';
	url += '?text=' + title.substring(0, 120) + ' - Muhit';
	url += '&url=' + window.location;
	url += '&hashtags=muhit';
	url += tags.map((tag, i) => (',' + tag.name.toLowerCase() ))
	return url;
}

function getFacebookURL(title, tags, problem, solution) {
	var url = 'http://www.facebook.com/dialog/feed';
	url += '?app_id=1458298001134890';
	url += '&link=' + window.location;
	url += '&picture=';
	url += '&name=' + title;
	url += '&caption=' + problem;
	url += '&description=' + solution;
	url += '&message=' + solution;
	url += '&redirect_uri=http://www.muhit.co';
	return url;
}

export default (props) => {
	const { idea } = props;

	const whatsapp_text = '%22' + idea.title + '%22%0A' + window.location;
	const twitter_url = getTwitterURL(idea.title, idea.tags);
	const facebook_url = getFacebookURL(idea.title, idea.tags, idea.problem, idea.solution);

	return (
		<div className="u-floatright u-clearfix">
			<a href={'whatsapp://send?text=' + whatsapp_text} id="whatsapp_share_button" className="btn btn-secondary btn-whatsapp u-hidden"><i className="ion ion-social-whatsapp"></i></a>
			<a href={twitter_url} id="twitter_share_button" className="btn btn-secondary btn-twitter" target="_blank" rel="noopener noreferrer"><i className="ion ion-social-twitter"></i></a>
			<a href={facebook_url} id="facebook_share_button" className="btn btn-secondary btn-facebook" target="_blank" rel="noopener noreferrer"><i className="ion ion-social-facebook ion-15x"></i></a>
			<a href="javascript:void(0)" data-dialog="dialog_login" className="btn btn-secondary u-ml5"><i className="ion ion-thumbsup"></i> DESTEKLE</a>
		</div>
	)
}
