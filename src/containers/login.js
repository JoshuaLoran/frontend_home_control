import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import House from '../images/house3.jpg'
import ValuePropCarousel from '../components/carousel.js'

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      name: undefined,
      pw: undefined,
      createaccount: false,
      infoSwitch: false
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  gotoInfo = () => {
    this.setState({infoSwitch: true})
  }

  onClickRedirect = () => {
    this.setState({createaccount: true})
  }

  render(){
    if(this.props.logged_in === true){
      return <Redirect to='/homepage'/>
    }
    if(this.state.createaccount === true){
      return <Redirect to='/createaccount' />
    }
    if(this.state.infoSwitch === true){
      return <Redirect to= '/information' />
    }
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style>
        <Image onClick={this.gotoInfo} centered size='medium' src={House} />
          <Header as='h1' textAlign='center'>
            Or you can click the house for more information
          </Header>
        <ValuePropCarousel />
        <Grid  textAlign='center' style={{ height: '100%' }}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' textAlign='center'>
              <Segment stacked>
                <Header as='h2' color='blue' textAlign='center'>
                   Please log in to your account
                </Header><br /><br />
                <input  type="text" placeholder="username" value={this.state.name} name="name" onChange={this.handleChange}/> <br/><br/>
                <input  type="password" placeholder="password" name="pw" value={this.state.pw} onChange={this.handleChange} required/> <br/><br/>
                <Button color='blue'  type="submit" value="submit" onClick={(e) => {this.props.handleLogin(e,this.state.name, this.state.pw)}}>Submit</Button> <br/>
              </Segment>
            </Form>
            <Message>
              New to us?   <Button size='mini' color='blue' onClick={this.onClickRedirect}> Create account </Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
