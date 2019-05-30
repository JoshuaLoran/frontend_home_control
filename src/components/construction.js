import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Header, List, Button, Image } from 'semantic-ui-react'
import Work from '../images/working.jpg'

export default class Construction extends Component {
  constructor(){
    super()
    this.state={
      gotoInfo: false
    }
  }

  gotoInformation = () => {
    this.setState({
      gotoInfo: true
    })
  }

  render(){
    if(this.state.gotoInfo){
      return <Redirect to='/information' />
    }
    return(
      <Container textAlign='center'>
      <br/><br/><br/>
      <Image className='topMargin' src={Work} centered  size='large' /><br/><br/><br/>
      <h1>Under Construction</h1><br/><br/>
      <Button onClick={this.gotoInformation} color='blue' size='huge'>Go Back</Button>
      </Container>
    )
  }
}
