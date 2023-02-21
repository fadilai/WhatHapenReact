import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


import "./App.css";
import { Container } from 'react-bootstrap';

function App() {
  return (

    <div className="App">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 hs"
            src="https://images.unsplash.com/photo-1676763134018-9e68ec8cc913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hs"
            src="https://images.unsplash.com/photo-1676907540730-56869c01132e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80800x400?text=Second slide&bg=282c34"
            alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hs"
            src="https://images.unsplash.com/photo-1676907257273-ace57214b4d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80/800x400?text=Third slide&bg=20232a"
            alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <md className="warnaTulisan">q</md>
      </Container>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card className="card">
              <Card.Img variant="top" src="https://s.kaskus.id/images/2014/05/12/3374133_20140512012844.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>

                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Aksi
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Aksi</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
