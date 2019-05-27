import React, {Component} from 'react'
import { Button, Form, Modal, Image } from 'semantic-ui-react'
import Lamp from '../images/lamp.jpg'
import Robot from '../images/robot.png'
import Alarm from '../images/intruder.jpg'
import Temp from '../images/temps.png'


export default class CreateDeviceModal extends Component {
  constructor(){
    super()
    this.state = {
      deviceName: undefined,
      deviceCommand: ''
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }



  render(){
    return(
  <Modal size='mini' trigger={<Button>Add Device</Button>}>
    <Modal.Header>Fill out the form to add a device</Modal.Header>
    <Modal.Content>
        <Form>
          <Form.Field required>
            <label>Device Name</label>
            <input type='text' placeholder='Name of device' name='deviceName' value={this.state.deviceName} onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field readOnly>
            <label>Command</label>
            <input readonly type='text' placeholder='Only on/off currently supported' value={this.state.deviceCommand}/>
          </Form.Field>
          <Form.Field>
            <label>Pick an Icon</label>
            <Image floated='left' size='mini' src={Lamp} />
            <Image floated='left' size='mini' src={Robot} />
            <Image floated='left' size='mini' src={Alarm} />
            <Image floated='left' size='mini' src={Temp} />
          </Form.Field>

          <Button floated='right' centered type='submit' onClick={(e) => {this.props.createDevice(e,this.state.deviceName, this.state.deviceCommand)}}>Submit</Button>
        </Form>
    </Modal.Content>
  </Modal>
)}

}
