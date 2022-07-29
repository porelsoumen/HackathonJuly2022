import React from 'react'

function Root(props) {
  return (
    
    <div className="home-text">
      <h1>Welcome to {props.name} QE Resources Page</h1>
      <p className="info">{props.text}</p>
    </div>
  )
}

export default Root;