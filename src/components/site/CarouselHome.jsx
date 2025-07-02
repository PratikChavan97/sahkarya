import { Carousel } from "react-bootstrap";

import "./module.CarouselHome.css";

function CarouselHome() {
  return (
    <Carousel fade className="carousel-home">
      <Carousel.Item>
        <img src="assets/demo-1.webp" alt="carousel-1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-items">
        <div className="carousel-text">
          <h4>Education brings prosperity</h4>
        </div>
        <div className="carousel-image">
          <img src="assets/demo-3.webp" alt="carousel-2" />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img src="assets/demo-3.webp" alt="carousel-3" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
