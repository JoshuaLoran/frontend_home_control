import React, { Component } from 'react'


export default class Device extends Component {


  render(){
    return(
      <h4>{this.props.device.name}</h4>
    )
  }
}
