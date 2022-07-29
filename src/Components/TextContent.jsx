import React from 'react'

function TextContent(props) {
  return (
    <div id={props.id}>
        <preformatted>{props.text}</preformatted>
    </div>
  )
}

export default TextContent;