import { Icon, Step } from 'semantic-ui-react'
import React, { Component } from 'react'

export default class Steps extends Component {


  render(){
  const active = this.props.page
  return(
    <Step.Group fluid>
    <Step active={active === '1'} fluid id='1' onClick={this.props.handleClick}>
      <Icon id='1' name='address card' />
      <Step.Content>
        <Step.Title id='1'>Create Account</Step.Title>
      </Step.Content>
    </Step>

    <Step active={active === '2'} fluid id='2' onClick={this.props.handleClick}>
      <Icon id='2' name='microchip' />
      <Step.Content>
        <Step.Title id='2'>Create Device</Step.Title>
      </Step.Content>
    </Step>

    <Step active={active === '3'} fluid id='3' onClick={this.props.handleClick}>
      <Icon id='3' name='info' />
      <Step.Content>
        <Step.Title id='3' >Setup Your Pi</Step.Title>
      </Step.Content>
    </Step>
    <Step active={active === '4'} fluid id='4' onClick={this.props.handleClick}>
      <Icon id='4' name='info' />
      <Step.Content>
        <Step.Title id='4' >Connect Your Device</Step.Title>
      </Step.Content>
    </Step>
    </Step.Group>

  )}
}
