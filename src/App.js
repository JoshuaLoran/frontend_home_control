import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './containers/login'
import Homepage from './components/homepage'
import Info from './containers/infospread.js'
import Createaccount from './components/createaccount'
import Construction from './components/construction'
import './App.css';
import ActionCable from 'actioncable'

////////////////////////// CHOOSE LOCAL OR DEPLOYED  /////////////////////


const URL = 'https://agile-reef-99245.herokuapp.com/'

////////////////////////  TOP APP CLASS  /////////////////////////////

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

  /////////////////  WEBSOCKET LOGIC /////////////////////////

  componentDidMount(){
    const cable = ActionCable.createConsumer(URL +'cable')
    this.sub = cable.subscriptions.create('DevicesChannel', {
      received: this.handleReceiveNewData
    })
  }

  handleReceiveNewData = (data) => {
    if (data.commands !== this.state.commands) {
      this.setState({
        commands: data.commands
      })
    }
    (this.getProfile())
  }

  ////////////////   LOGIN, CREATE USER, AND PROFILE METHODS /////////////

  createAccount = (e, name, pw) => {
    e.preventDefault()
    fetch(URL + '/users', {
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
      if(data.error){
        alert(data.error)
      } else {
        this.saveToken(data.jwt)
        this.setState({
          user_id: data.user.id,
          user_name: data.user.username,
          logged_in: true})
      }
    })
  }

  handleLogin = (e, name, pw) => {
    e.preventDefault()
    if(name && pw){
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
        }
      })
    }
  }

  getToken(){
    let token = localStorage.getItem('jwt')
    return token //keep redundancy - was giving error without explicit
  }
  saveToken(jwt){
    return localStorage.setItem('jwt', jwt)
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

  getProfile = () => {
    fetch(URL + 'profile', {
      headers: {
        'Authorization': 'Bearer ' + this.getToken()
      }
    })
      .then(r => r.json())
      .then(json => this.sortUserDevices(json.user.devices))
  }

/////////////  DEVICE LOGIC, CREATE DESTROY  /////////////////

  modifyCommand = (device, devices) => {
    console.log(device, devices)
    let deviceClone;
    devices.forEach(ele => {
      if(device.id === ele.id) {
        deviceClone = ele
      }
    })
    if(deviceClone.commands[0]==="on"){
      this.sub.send( {commands: ["off"], id: device.id} )
    } else {
      this.sub.send( {commands: ["on"], id: device.id} )
    }
  }

  getDevices = (device) => {
    let config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      }
    }

    fetch(URL + 'devices', config)
      .then(r => r.json())
      .then (data => this.modifyCommand(device, data))
  }

  createDevice = (e, deviceName, deviceCommand, deviceType) => {
    e.preventDefault()
    let deviceConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      },
      body: JSON.stringify({
        device:{
          name: deviceName,
          commands: ["off"],
          icon: deviceType.toString()
        }
      })
    }
    fetch(URL + '/devices', deviceConfig)
      .then(r => r.json())
      .then(json => this.createUsersDevice(json.device))
  }

  createUsersDevice = (device) => {
    let usersDeviceConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      },
      body: JSON.stringify({
        users_device:{
          user_id: this.state.user_id,
          device_id: device.id
        }
      })
    }
    fetch(URL + 'userdevice', usersDeviceConfig)
      .then(this.setDevicesState(device))
  }

  setDevicesState = (device) => {
    if(!this.state.user_devices){
      this.setState({
        user_devices: [device]
      })
    } else {
      this.setState({
        user_devices: [...this.state.user_devices, device]
      })
    }
  }

  sortUserDevices = (devices) => {
    var sortedDevices = devices.sort(function(a, b){return a.id - b.id})
    this.setState({
      user_devices: sortedDevices
    })
  }

  deleteDevice = (device) => {
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      },
      body: JSON.stringify({
        device: {
          id: device.id
        }
      })
    }
    fetch(URL + 'devices/' + device.id, config)
      .then(this.getProfile)
  }

  render(){
    return (

      <Router>
        <Route exact path='/' component={() => <Login handleLogin={this.handleLogin}
                                                      logged_in={this.state.logged_in} />}/>
        <Route exact path ='/createaccount' component={() => <Createaccount createAccount={this.createAccount}
                                                                            logged_in={this.state.logged_in}/>}/>
        <Route exact path='/homepage' component={() => <Homepage logged_in={this.state.logged_in}
                                                                 user_name={this.state.user_name}
                                                                 logout={this.logout}
                                                                 devices={this.state.user_devices}
                                                                 clickCommand={this.getDevices}
                                                                 createDevice ={this.createDevice}
                                                                 deleteDevice={this.deleteDevice}/>}/>
        <Route exact path='/information' component={() => <Info loggedIn={this.state.logged_in}/>} />
        <Route exact path='/construction' component={() => <Construction />} />

    </Router>
    );
  }
}
