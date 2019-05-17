import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Lamp from '../images/lamp.jpg'


export default class Device extends Component {

  render(){
    return(
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src={Lamp} />
          <Card.Header>{this.props.device.name}</Card.Header>
          <Card.Description>
            Use the buttons to control your device!
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div centered>
          <Button  fluid onClick={() => {this.props.clickCommand(this.props.device)}}>
              Toggle
          </Button>
        </div>
      </Card.Content>
      </Card>
    )
  }
}
