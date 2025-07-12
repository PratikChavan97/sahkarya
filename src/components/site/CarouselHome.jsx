import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import OwlCarousel from "react-owl-carousel";

import "./module.CarouselHome.css";

function CarouselHome() {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <div className="owl-carousel-wrapper carousel-home">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <img src="assets/carousel.png" alt="carousel-1" />
        </div>
        <div className="item">
          <img src="assets/carousel-2.png" alt="carousel-2" />
        </div>
        <div className="item">
          <img src="assets/carousel-3.jpg" alt="carousel-3" />
        </div>
        <div className="item last">
          <img src="assets/carousel-4.jpg" alt="carousel-4" />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default CarouselHome;
