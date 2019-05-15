import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      name: undefined,
      pw: undefined,
      createaccount: false
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
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
    return (
    <div>
      <h2> Home Control Login</h2>
      <h4> Log in your account</h4>
      <h6> or </h6>
      <h4> Create and account</h4>
      <form>
      <input  type="text" placeholder="username" value={this.state.name} name="name" onChange={this.handleChange}/> <br/>
      <input  className="pwfield" type="password" placeholder="password" name="pw" value={this.state.pw} onChange={this.handleChange} required/> <br/>
      <input className="btn btn-success btn-lg btn3d" type="submit" value="submit" onClick={(e) => {this.props.handleLogin(e,this.state.name, this.state.pw)}}/> <br/>
      <button  className="btn btn-success btn-lg btn3d" onClick={this.onClickRedirect}> create account </button>
      </form>
    </div>)
  }
}
