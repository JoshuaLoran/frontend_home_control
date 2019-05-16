import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Banner from '../images/home_control_banner.jpg'
import { Container, Divider } from 'semantic-ui-react'
import Device from './device'

export default class Homepage extends Component {

  name(){
    if (this.props.user_name){
      let name = this.props.user_name.charAt(0).toUpperCase() + this.props.user_name.slice(1);
      return name
    } else {
      return 'Please Log In'
    }
  }

  displayButton(){
    console.log(this.props.logged_in)
    if (this.props.logged_in){
      return
    } else {
      return <button onClick={this.redirect}>Back to Login</button>
    }
  }

  render(){

    if(this.props.logged_in === false){
      return <Redirect to='/'/>
    }

    return (
      <div>
        <img src={Banner} alt='banner here' />
        <Container textAlign='left'>
          <h2> Welcome, {this.name()}!</h2>
          <button onClick={this.props.logout}>Log Out</button>
          {this.props.devices.map((device, idx) => {
            return <Device key={idx} device={device} />
          })}
        </Container>
      </div>
    )
  }
}
