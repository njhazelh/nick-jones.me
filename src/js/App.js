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
                <Col></Col>
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
          Nick Jones is a young software developer working in silicon valley. Lots of bullshit about being an awesome developer and stuff. I have Lots
          of awesome skills and tons of drive so you should hire me and give me lots of money.
          </p>
        </Container>
        </section>
        <Jumbotron className="img_jumbo"></Jumbotron>
        <section>
        <Container>
          <h2>Where has Nick Worked?</h2>
          <ul>
            <li>Facebook</li>
            <li>HubSpot</li>
            <li>Clypd</li>
            <li>Vecna</li>
          </ul>
        </Container>
        </section>
        <footer>
          <Container>
            <p>Nick Jones 2017</p>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
