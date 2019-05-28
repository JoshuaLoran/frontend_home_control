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
      deviceCommand: '',
      deviceType: 1
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  imageClick = (e) => {
    this.setState({deviceType: e.target.id})
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
            <input
              id='1'
              type='radio'
              value='1'
              checked={this.state.deviceType === '1'}
              onChange={this.imageClick}
              />
            <label htmlFor='1'>
              <Image className='avatar-img' id='1' floated='left' size='mini' src={Lamp} />
            </label>
            <input
              id='2'
              type='radio'
              value='2'
              checked={this.state.deviceType === '2'}
              onChange={this.imageClick}
              />
            <label htmlFor='2'>
              <Image className='avatar-img' id='2' floated='left' size='mini' src={Robot} />
            </label>
            <input
              id='3'
              type='radio'
              value='3'
              checked={this.state.deviceType === '3'}
              onChange={this.imageClick}
              />
            <label htmlFor='3'>
              <Image className='avatar-img' id='3' floated='left' size='mini' src={Alarm} />
            </label>
            <input
              id='4'
              type='radio'
              value='4'
              checked={this.state.deviceType === '4'}
              onChange={this.imageClick}
              />
            <label htmlFor='4'>
              <Image className='avatar-img' id='4' floated='left' size='mini' src={Temp} />
            </label>
          </Form.Field>
          <Button floated='right' centered type='submit' onClick={(e) => {this.props.createDevice(e,this.state.deviceName, this.state.deviceCommand, this.state.deviceType)}}>Submit</Button>
        </Form>
    </Modal.Content>
  </Modal>
)}

}
