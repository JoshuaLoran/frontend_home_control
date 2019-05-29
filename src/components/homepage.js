import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Device from './device'
import CreateDeviceModal from './newDeviceForm'
import { Card, Header, Icon, Divider, Button } from 'semantic-ui-react'

export default class Homepage extends Component {

  constructor(){
    super()
    this.state = {
      gotoInfo: false
    }
  }

  gotoInfoPage = () => {
    this.setState({
      gotoInfo: true
    })
  }

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
        return <Device deleteDevice={this.props.deleteDevice} clickCommand={this.props.clickCommand} key={idx} device={device} />
      })
      return components
    } else {
      return <h1>You have no devices.</h1>
    }
  }

  render(){
    if(this.state.gotoInfo){
      return <Redirect to='/information' />
    }

    if(this.props.logged_in === false){
      return <Redirect to='/'/>
    }

    return (
              <Container className='topMargin' textAlign='center' centered>
                <Header as='h1' icon>
                  <Icon name='settings' />
                  Welcome, {this.name()}!
                </Header>
                <Divider className='bottomMargin' horizontal>This is the Device management page</Divider>
                <Button onClick={this.gotoInfoPage} >Info Page</Button>
                <CreateDeviceModal createDevice={this.props.createDevice}/>
                <Divider className='bottomMargin' horizontal>Control your devices below</Divider>
                <Card.Group className='topMargin' centered>{this.nullCheck()}</Card.Group>
                <button className='topMargin' onClick={this.props.logout}>Log Out</button>
              </Container>
    )
  }
}
