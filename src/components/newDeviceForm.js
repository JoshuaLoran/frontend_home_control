import React, {Component} from 'react'
import { Button, Header, Form, Modal } from 'semantic-ui-react'


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
    console.log('name: ', e.target.name, 'value: ', e.target.value)
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
            {/*name='deviceCommand' value={this.state.deviceCommand} onChange={this.handleChange}*/}
            <input readonly type='text' placeholder='Only on/off currently supported' value={this.state.deviceCommand}/>
          </Form.Field>
          <Button type='submit' onClick={(e) => {this.props.createDevice(e,this.state.deviceName, this.state.deviceCommand)}}>Submit</Button>
        </Form>
    </Modal.Content>
  </Modal>
)}

}
