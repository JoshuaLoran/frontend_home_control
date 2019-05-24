import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Lamp from '../images/lamp.jpg'


export default class Device extends Component {

  buttonReturn = () => {
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
// () => {this.props.clickCommand(this.props.device)}
  render(){
    return(
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src={Lamp} />
          <Card.Header>{this.props.device.name}</Card.Header>
          <Card.Description>
            Your device ID is {this.props.device.id}
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
