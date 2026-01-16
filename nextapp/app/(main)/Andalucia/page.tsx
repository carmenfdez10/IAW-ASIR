'use client';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="/almeria.jpg" alt="Almeria" width="800" height="600" />
        <Carousel.Caption>
          <a href="/Andalucia/almeria"><h3>Almeria</h3></a>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/granada.jpg" alt="Granada" width="800" height="600" />
        <Carousel.Caption>
            <a href="/Andalucia/almeria"><h3>Almeria</h3></a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
        <img src="/malaga.jpg" alt="Malaga" width="800" height="600" />
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;