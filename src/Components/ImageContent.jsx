import React from 'react'

function ImageContent(props) {
  return (
    <a id={props.id} href={props.href}>
    <img src={props.src} width="1200" height="800" />    
    </a>
  )
}

export default ImageContent;