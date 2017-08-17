import React, { Component } from 'react'

class People extends React.Component {

  render() {
    return (
        
      <div>
        <div>
        <div>{this.props.link.description} ({this.props.link.name})</div>
        </div>
      </div>
    )
  }
  
  

}

export default People