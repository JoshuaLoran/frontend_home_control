import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Header, List, Button, Image } from 'semantic-ui-react'
import Lamp from '../images/lamp.jpg'
import Robot from '../images/robot.png'
import Alarm from '../images/intruder.jpg'
import Temp from '../images/temps.png'
import Work from '../images/working.jpg'
import Mkdir from '../images/makeDir.png'
import Cdinto from '../images/cdInto.png'
import Cloneit from '../images/cloneIt.png'
import WithNull from '../images/withnull.png'
import WithId from '../images/idadded.png'
import Noderun from '../images/noderun.png'

export default class Blurb extends Component {
  constructor(){
    super()
    this.state={
      gotoCreate: false,
      gotoHomepage: false,
      gotoConstruction: false
    }
  }

  gotoConstruction = () => {
    this.setState({
      gotoConstruction: true
    })
  }

  gotoCreate = () => {
    this.setState({
      gotoCreate: true
    })
  }

  gotoHomepage = () => {
    this.setState({
      gotoHomepage: true
    })
  }

  pageDisplay(page){
    if(this.state.gotoConstruction){
      return <Redirect to='/construction' />
    }
    if(this.state.gotoHomepage){
      return <Redirect to='/homepage' />
    }
    if(this.state.gotoCreate){
      return <Redirect to='/createaccount' />
    }
    if(page === '1'){
      return(
        <Container className='topMargin' textAlign='center' text>
    <Header as='h1'>Getting Started</Header>
    <p>
      Hey there! You’ve probably come to this site because you’re interested in using your Raspberry Pi to control devices in your home but you’re looking for a simpler solution than building your own web server.
      Home control allows you to design custom devices that are connected to your Pi and control them with an easy to use framework.
    </p>
    <List>
      <List.Item><h3>Some of the technologies used to build Home Control are</h3></List.Item><br/>
        <List.Item><h4>-- Responsive React front end --</h4></List.Item>
        <List.Item><h4>--JSON Web Token authentication--</h4></List.Item>
        <List.Item><h4>--Websocket communication for fast response time world-wide--</h4></List.Item>
        <List.Item><h4>--Raspberry Pi programmed in NodeJS--</h4></List.Item><br/>
      <List.Item><h3>Some perks of using Home Control for your home</h3></List.Item><br/>
        <List.Item><h4>--Only need basic knowledge of javascript--</h4></List.Item>
        <List.Item><h4>--No web routing--</h4></List.Item>
        <List.Item><h4>--Keep your main focus on building devices to control--</h4></List.Item>
    </List>
  <p>
    Don't worry! You don't need to be familiar with the technologies above, you just need to have a RaspberryPi
    and the desire to setup your own smart home. After you get the first few steps down and get your "Hello House"
    program functional, you can incorporate arduino and other micro-controllers of your projects
    to make your system even more robust.  We will set you up for success by walking you step by step through your first
    "Hello House" project.
  </p><br />
<Button onClick={this.gotoCreate} color='blue' size='huge'>Sign up here</Button>
  </Container>
)
    } else if (page === '2'){
      return <Container className='topMargin' textAlign='center' text>
    <Header as='h1'>Create a device in our database</Header>
    <p>
      This step sounds like the fun part, but really it's just a quick intermediary to tell Home Control that you
      want to make a device and have linked through your account. When you create device in the system you will be given
      a <b>Device ID</b> number that you will then use to identify the device on your Raspberry Pi.
    </p><br/>
    <List>
      <List.Item><h3>We currently support 4 types of devices</h3></List.Item><br/>
        <List.Item><h4><Image size='mini' spaced src={Lamp}/>On/Off Lights</h4></List.Item>
        <List.Item><h4><Image size='mini' spaced src={Robot}/>Appliance Hack</h4></List.Item>
        <List.Item><h4><Image size='mini' spaced src={Alarm}/>Alerts, (security or otherwise)</h4></List.Item>
        <List.Item><h4><Image size='mini' spaced src={Temp}/>Temperature Control</h4></List.Item><br/><br/>
    </List>
    <p>
      If you've already created an account, just click the button below to get to your homepage and create a device in the system.
       Otherwise, you will be taken to account creation to sign up with a secure account.
    </p><br/><br/>
  <Button onClick={this.gotoHomepage} color='blue' size='huge'>Get Started!</Button><br/><br/><br/>

    <Image className='topMargin' size='small' spaced src={Work}/><div><h2>Coming Soon...</h2><h4>Multiple Instructions</h4><h4>More project walkthroughs</h4></div><br/><br/>
  </Container>
    } else if (page === '3'){
      return <Container className='topMargin' textAlign='center' text>
    <Header as='h1'>Setup your RaspberryPi</Header>
    <p>
      You've most likely done an initial setup on your Pi when you got. You've install some OS of your choosing,
      most people go with Raspian and the tutorial below assumes you are using this OS. However, as long as you can
      install and use NodeJS, then you are good to go!  If you've just got your Pi, opened the box, and came here, then
      we recommend going through some sample projects to get yourself acquainted with how the Pi works with it's GPIO
      interface. <a href='https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp' target="_blank" rel="noopener noreferrer">Here</a> is a good resource to get you started on your first few projects.
    </p><br/>
    <p>
     Be sure to follow the instructions where they walk you through the installation of NodeJS. We also recommend getting
     a good code editor. VScode is great and includes many features. It is customizable, has built in Git interations, is free,
     and has great debugging features. For a walkthrough on how to install VScode, <a href='https://pimylifeup.com/raspberry-pi-visual-studio-code/' target="_blank" rel="noopener noreferrer">Click Here</a>
    </p>
    <p>
      Sweet! Your Pi is all set up, you've installed NodeJS, NPM, you've used your favorite editor (VSCode for us) to make
      a small project or two, and you have a basic understanding of how to use Node to interact with the GPIO pins. Now
      it's time to clone down the boiler plate code to get your projects working through home control. You can do this by <a href='https://github.com/WTFCodingPotato/Pi-with-socket' target="_blank" rel="noopener noreferrer">Clicking here</a>.  Once on that page click the big green "Clone or Download" button.
    </p><br/>
    <List>
      <List.Item><h3>Step One: Make a project folder from the command line</h3></List.Item><br/>
        <List.Item><Image src={Mkdir}/></List.Item><br/>
      <List.Item><h3>Step Two: Cd into your folder</h3></List.Item><br/>
        <List.Item><Image src={Cdinto}/></List.Item><br/>
      <List.Item><h3>Step Three: Clone down the Repo</h3></List.Item><br/>
      <List.Item><h4>Type in "git clone" and then paste the url you copied from the green "clone or download" button <a href='https://github.com/WTFCodingPotato/Pi-with-socket' target="_blank" rel="noopener noreferrer">here</a>.</h4></List.Item>
        <List.Item><Image src={Cloneit}/></List.Item><br/>
    </List>
    <p >
      Now you have the boiler plate software needed to interact with Home Control. Open the index.js file from that folder
      in your text editor and we're ready to move on to the next step.
    </p><br/><br/><br/>

  </Container>
    } else {
      return <Container className='topMargin' textAlign='center' text>
    <Header as='h1'>Connect Your Device</Header>
    <p>
      You've made it! You've created an account, logged a device you'll make into Home Control, taken note of your device ID,
      and you've setup your Raspberry Pi with the neccessary software.  You have your index.js open on your Raspberry Pi and are ready to start coding
      the logic that will make you device work from anywhere in the world.
    </p>
    <p>
      We've made the setup for your first few devices very straightforward. With your index.js open, find the lines 10, 11, and 12.
      This is where you're going to make your modification and enter your device ID next to the device type. If you are adding a light, for example,
      you enter the ID for the onOffDeviceId variable. If your Home Control device ID number is 1, the code would change from this:<br/><br/>
    <Image src={WithNull}/><br/><br/>
    into this: <br/><br/>
    <Image src={WithId}/><br/><br/>
    </p>
    <p>
      That's it!  Now you can open your Pi's command line, navigate to the proper directory (where you've placed index.js), type in
      the follwing: <br/><br/><br/>
    <Image size='large' centered src={Noderun}/><br/><br/>
    </p>
    <p>
      Now your Pi is listening to Home Control and you can control your device! You can now follow these instructions for your
      first device of each type, as the methods are already setup for you. But you want more devices...You want ALL the devices...You want your
      house to be a giant robot! I get it, me too. So lets do it. You can add an unlimited amount of custom devices to your Home Control profile.  From here
      on out, you'll need to dive a little deeper into the programming side in NodeJS. In the process, you'll become more familiar with
      Javascript, object oriented programming, and web interfacing.
    </p>
    <p>
      We've setup an intermediate walkthrough for next few devices that will help guide you through a few projects while
      keeping enough ambiguity that you can customize the devices you make throughout the walkthrough.  So, when you've setup your
      first few devices and your ready for more advanced interactions, click the button below.
    </p><br/>
  <Button onClick={this.gotoConstruction} color='blue' size='huge'>Intermediate Instructions</Button><br/><br/>
  </Container>
    }
  }
  render(){
    return(<div>{this.pageDisplay(this.props.page)}</div>)
  }
}
