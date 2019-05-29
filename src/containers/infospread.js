import React, {Component} from 'react'
import Steps from '../components/steps.js'
import Blurb from '../components/infoBlurb.js'
import { Sticky } from 'semantic-ui-react'

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
      <Sticky>
      <Steps page={this.state.page} handleClick={this.handleClick}/>
      </Sticky>
      <Blurb loggedIn={this.props.loggedIn} page={this.state.page}/>
      </div>
    )
  }
}
