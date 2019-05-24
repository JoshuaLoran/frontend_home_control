import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Container, Header, Image} from 'semantic-ui-react'
import '../App.css';
import Robot from '../images/ArduinoRobot.jpeg'
import Pi from '../images/RaspPi.png'
import Earth from '../images/satEarth.jpeg'

// const floatRight = {
//   text-align: 'center'
// }

class ValuePropCarousel extends React.Component {

  render() {
    return (
      <Container>
        <CarouselProvider
          orientation= 'vertical'
          naturalSlideWidth={10}
          naturalSlideHeight={1}
          totalSlides={3}
          isPlaying={true}
          interval={2500}
          playDirection='forward'
          id="carousel"
        >
          <Slider className='centerCarousel' id="carousel">
            <Header as='h2'>
              <Slide className='carousel-font' id='carousel' index={0}>
                <Image spaced size='small' src={Robot} />
                  Make devices for your home
                <Image spaced size='small' src={Robot} />
              </Slide>
          </Header>

            <Header as='h2'>
              <Slide className='carousel-font' id='carousel' index={1}>
                <Image spaced size='small' src={Pi} />
                Connect your devices to a RaspberryPi
                <Image spaced size='small' src={Pi} />
              </Slide>
            </Header>

            <Header as='h2'>
              <Slide className='carousel-font' id='carousel' index={2}>
                <Image spaced size='small' src={Earth} />
                Control your homemade devices from anywhere in the world
                <Image spaced size='small' src={Earth} />
              </Slide>
            </Header>

          </Slider>
        </CarouselProvider>
      </Container>
    );
  }
}
export default ValuePropCarousel;
