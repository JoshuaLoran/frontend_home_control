import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Divider } from 'semantic-ui-react'
import Device from './device'
import { Button, Card, Image } from 'semantic-ui-react'

export default class Homepage extends Component {

  name(){
    if (this.props.user_name){
      let name = this.props.user_name.charAt(0).toUpperCase() + this.props.user_name.slice(1);
      return name
    } else {
      return 'Please Log In'
    }
  }

  nullCheck(){
    let components;
    if (this.props.devices){
      components = this.props.devices.map((device, idx) => {
        return <Device clickCommand={this.props.clickCommand} key={idx} device={device} />
      })
      return components
    } else {
      return <h1>You have no devices.</h1>
    }
  }

  render(){

    if(this.props.logged_in === false){
      return <Redirect to='/'/>
    }

    return (
        <Container textAlign='center' centered>
          <h2> Welcome, {this.name()}!</h2>
          <Card.Group centered>{this.nullCheck()}</Card.Group>
          <button onClick={this.props.logout}>Log Out</button>
        </Container>
    )
  }
}
