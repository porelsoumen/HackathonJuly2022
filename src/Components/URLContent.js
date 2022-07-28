import React, {PropTypes} from 'react'

function URLContent(props) {
  return (
    <div id={props.id} >
        <iframe width="1200" height="800" referrerpolicy="same-origin" frameborder="0" allowfullscreen src={props.src} />
    </div>
  )
}

export default URLContent;