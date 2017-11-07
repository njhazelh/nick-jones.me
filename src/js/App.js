import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron fluid style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
          <Container>
            <div className="jumbotron_text">
              <Row>
                <Col>
                  <h1 className="welcome">Welcome!</h1>
                </Col>
              </Row>
              <Row>
                <Col style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <Button color="primary" href="https://www.linkedin.com/in/njhazelh/">LinkedIn</Button>
                  <Button color="primary" href="https://github.com/njhazelh">Github</Button>
                  <Button color="primary" href="#blog">Blog</Button>
                </Col>
              </Row>
            </div>
          </Container>
        </Jumbotron>
        <section>
        <Container>
          <h2>Who is Nick Jones?</h2>
          <p>
          Nick Jones is a talented, young software developer working in Silicon Valley.
          After graduating Summa Cum Laude from Northeastern University in 2017,
          he now works as a Software Engineer at Facebook HQ.  Nick has a range of full-stack
          experience involving web/android development, distributed systems, networking,
          machine-learning, and security.  He loves non-trivial problems where solid,
          scalable engineering can blend with seamless user experience to change the way
          we interact with the world.
          </p>
        </Container>
        </section>
        <Jumbotron className="img_jumbo">
          <p style={{
            position:'absolute',
            bottom: 0,
            right: 0,
            margin: '5px 10px',
            color: '#d0dbe5',
            fontSize: '14px'
          }}>The Black Mountains, Wales</p>
        </Jumbotron>
        <section className='resume'>
        <Container>
          <Row>
            <Col><h2>Work History</h2></Col>
            <Col><Button color='primary' style={{float:'right'}}>Download Resume</Button></Col>
          </Row>
          <Row className='job'>
            <Col className='role' xs='3'>
              <span className='company'>Facebook</span><br/>
              <span className='position'>Software Engineer</span>
            </Col>
            <Col className='job_description' xs='6'>
              Working to develop communities and bring the world closer together.
            </Col>
            <Col className='job_duration' xs='3'>Aug 2017 - Present</Col>
          </Row>
          <Row className='job'>
            <Col className='role' xs='3'>
              <span className='company'>HubSpot</span><br/>
              <span className='position'>Software Engineer Coop</span>
            </Col>
            <Col className='job_description' xs='6'>
              Developed metrics and optimizations to maximize HBase availability across a
              variety of workloads.
            </Col>
            <Col className='job_duration' xs='3'>Sept 2016 - Dec 2016</Col>
          </Row>
          <Row className='job'>
            <Col className='role' xs='3'>
              <span className='company'>Facebook</span><br/>
              <span className='position'>Software Engineer Intern</span>
            </Col>
            <Col className='job_description' xs='6'>
              Developed a code generation framework for ElasticSearch to increase
              developer efficiency.
            </Col>
            <Col className='job_duration' xs='3'>May 2016 - Aug 2016</Col>
          </Row>
          <Row className='job'>
            <Col className='role' xs='3'>
              <span className='company'>Clypd</span><br/>
              <span className='position'>Software Engineer Coop</span>
            </Col>
            <Col className='job_description' xs='6'>
              Developed API infrastructure using Go, handled DevOps, optimized
              memory allocation in simulated annealing algorithm
            </Col>
            <Col className='job_duration' xs='3'>July 2015 - Feb 2016</Col>
          </Row>
          <Row className='job'>
            <Col className='role' xs='3'>
              <span className='company'>Vecna</span><br/>
              <span className='position'>Software Engineer Coop</span>
            </Col>
            <Col className='job_description' xs='6'>
              Developed single page application in Backbone to remotely control robots.
              Helped organize company standards on front-end development.  Implemented
              websocket upgrades to improve robot-browser communication.
            </Col>
            <Col className='job_duration' xs='3'>June 2014 - Dec 2014</Col>
          </Row>
        </Container>
        </section>
        <footer>
            Nick Jones 2017
        </footer>
      </div>
    );
  }
}

export default App;
