import React, { Component } from 'react'
import { Button, Card, Image, Confirm } from 'semantic-ui-react'
import Lamp from '../images/lamp.jpg'
import Robot from '../images/robot.png'
import Alarm from '../images/intruder.jpg'
import Temp from '../images/temps.png'


export default class Device extends Component {
  state = {open: false}

  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })
  show = () => {this.setState({ open: true })}

  buttonReturn = () => {
    if(this.props.device.icon === '3'){
      if(this.props.device.commands[0] === "on"){
        return <Button fluid color='green'>
                Clear
               </Button>
      } else {
        return <Button fluid color="red" onClick={() => {this.props.clickCommand(this.props.device)}}>
                Intruder!
               </Button>
      }
    } else {
    if(this.props.device.commands[0] === "on"){
      return <Button fluid basic color="green" onClick={() => {this.props.clickCommand(this.props.device)}}>
              On
             </Button>
    } else {
      return <Button fluid basic color="red" onClick={() => {this.props.clickCommand(this.props.device)}}>
              Off
             </Button>
    }
  }
  }

  render(){
    let icon;
    if(this.props.device.icon === '1'){
      icon = Lamp
    } else if (this.props.device.icon === '2'){
      icon = Robot
    }
    else if (this.props.device.icon === '3'){
      icon = Alarm
    } else {
      icon = Temp
    }
    return(
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src={icon} />
          <Card.Header>{this.props.device.name}</Card.Header>
          <Card.Description>
            Your device ID is {this.props.device.id}
          <Button floated='right' compact size='mini' onClick={this.show}>delete</Button>
          <Confirm
            open={this.state.open}
            header='This will delete this device forever!'
            cancelButton='Never mind'
            confirmButton="Destroy!"
            size='mini'
            onCancel={this.handleCancel}
            onConfirm={() => {this.props.deleteDevice(this.props.device)}}
          />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div centered>
          {this.buttonReturn()}
        </div>
      </Card.Content>
      </Card>
    )
  }
}
