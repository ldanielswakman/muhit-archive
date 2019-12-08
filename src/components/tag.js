import React from "react"

export default (props) => {

  const { tag } = props;

  return (
    <span className="tag u-floatleft u-mv5 u-mr5" style={{ backgroundColor: '#' + tag.background }}>
      <span className="col-xs-hide">{tag.name}</span>
    </span>
  )
}
