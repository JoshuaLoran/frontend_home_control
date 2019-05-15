import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Banner from '../images/home_control_banner.jpg'

export default class Homepage extends Component {

  name(){
    if (this.props.user_name){
      let name = this.props.user_name.charAt(0).toUpperCase() + this.props.user_name.slice(1);
      return name
    } else {
      return 'Please Log In'
    }
  }

  render(){

    if(this.props.logged_in === false){
      return <Redirect to='/'/>
    }
    return (

      <div>
        <img src={Banner} alt='banner here' />
      <h2> Welcome, {this.name()}!</h2>
      </div>
    )
  }
}
