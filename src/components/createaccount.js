import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import House from '../images/house3.jpg'

export default class Createaccount extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: undefined,
      password: undefined
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  render (){
    const loggedIn = this.props.logged_in

    if(loggedIn === true){
      return <Redirect to='/homepage'/>
    }
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style>
        <Image centered size='medium' src={House} />
        <Grid  textAlign='center' style={{ height: '100%' }}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' textAlign='center'>
              <Segment stacked>
                <Header as='h2' color='blue' textAlign='center'>
                   Create an account
                </Header><br /><br />
                <input type="text" placeholder="username"  name="name" onChange={this.handleChange}/> <br/>
                <input className="pwfield" type="password" placeholder="password" name="pw"  onChange={this.handleChange} required/> <br/><br/>
                <Button color='blue' type="submit" value="create account" onClick={(e) => {this.props.createAccount(e,this.state.name, this.state.pw)}}>Create Account</Button> <br/>
              </Segment>
            </Form><br/>
          <a href='/'><h3>Back to Login</h3></a>
          </Grid.Column>
        </Grid>
      </div>
    )
  }

}
