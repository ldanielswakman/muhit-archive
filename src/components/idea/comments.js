import React from "react"

export default (props) => {
	const { idea } = props;

  console.log(idea.comments);

	return (
    <div className="clearfix u-mb50">

      <h4 className="c-medium">Comments</h4>

      {idea.comments.map((comment) => (
        <div key={comment.id} className="comment" id={'comment-' + comment.id}>
          <div class="u-floatright c-medium u-lineheight20">
            <small>{comment.created_at}</small>
          </div>
          <p class="u-lineheight20">
            <strong>{ comment.user.first_name } { comment.user.first_name }</strong>
          </p>
          <p class="u-mt5">
            <em class="comment-message">
              {comment.comment}
            </em>
          </p>
        </div>

      ))}

    </div>
	)
}
