import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/login'
import Homepage from './components/homepage'
import Createaccount from './components/createaccount'
import './App.css';
import ActionCable from 'actioncable'

const URL = 'http://localhost:3000/'

export default class App extends Component {
  constructor(){
    super()
    this.state ={
      user_name: undefined,
      user_id: undefined,
      user_devices: undefined,
      logged_in: false,
      commands: ["state"]
    }
  }

  componentDidMount(){
    const cable = ActionCable.createConsumer('ws://localhost:3000/cable')
    this.sub = cable.subscriptions.create('DevicesChannel', {
      received: this.handleReceiveNewData
    })
  }

  handleReceiveNewData = (data) => {
    console.log(data)
    if (data.commands !== this.state.commands) {
      this.setState({
        commands: data.commands
      })
    }
  }

  actionTest= (e) => {
    e.preventDefault()
    this.sub.send( {commands: ["works"], id: 1} )
  }

  getToken(){
    let token = localStorage.getItem('jwt')
    return token //keep redundancy - was giving error without explicit
  }

  saveToken(jwt){
    return localStorage.setItem('jwt', jwt)
  }

  createAccount = (e, name, pw) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: name,
          password: pw,
        }
      })
    })
  .then(r => r.json())
      .then(data => {
        console.log(data)
        if(data.error){
          alert(data.error)
        } else {
          this.setState({
            user_id: data.user.id,
            user_name: data.user.username,
            logged_in: true})
        }
      })
  }

  handleLogin = (e, name, pw) => {
    e.preventDefault()
    fetch(URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: name,
          password: pw,
        }
      })
    })
  .then(r => r.json())
  .then( data => {
    console.log(data.user)
        if(data.message){
          alert(data.message)
        } else {
          this.saveToken(data.jwt)
          this.setState({
            user_id: data.user.id,
            user_name: data.user.username,
            logged_in: true,
            user_devices: data.user.devices

          })
          // this.getProfile()
        }
      })
  }

  logout = () => {
    this.setState({
      user_id: undefined,
      user_name: undefined,
      logged_in: false,
      user_devices: undefined
    })
    localStorage.removeItem('jwt')
  }

  render(){
    return (
      <Router>
                                                            {/*change back to handleLogin*/}
        <Route exact path='/' component={() => <Login handleLogin={this.handleLogin}
                                                      logged_in={this.state.logged_in} />}/>

        <Route exact path ='/createaccount' component={() => <Createaccount createAccount={this.createAccount}
                                                                            logged_in={this.state.logged_in}/>}/>
        <Route exact path='/homepage' component={() => <Homepage logged_in={this.state.logged_in}
                                                                 user_name={this.state.user_name}
                                                                 logout={this.actionTest}
                                                                 devices={this.state.user_devices}/>}/>

      </Router>
    );
  }
}
