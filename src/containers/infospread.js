import React, {Component} from 'react'
import Steps from '../components/steps.js'
import Blurb from '../components/infoBlurb.js'

export default class Info extends Component {

  constructor(){
    super()
    this.state = {
      page: '1'
    }
  }

  handleClick = (e) => {
    this.setState({
      page: e.target.id
    })
  }

  render(){
    return (<div>
      <Steps page={this.state.page} handleClick={this.handleClick}/>
      <Blurb page={this.state.page}/>
      </div>
    )
  }
}
