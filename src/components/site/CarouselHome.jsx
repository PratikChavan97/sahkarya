import ReactOwlCarousel from "react-owl-carousel";
import "./module.CarouselHome.css";

function CarouselHome() {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <ReactOwlCarousel
      className="owl-theme carousel-home"
      options={{ ...options }}
    >
      <div className="item">
        <h4>1</h4>
      </div>
      <div className="item">
        <h4>2</h4>
      </div>
    </ReactOwlCarousel>
  );
}

export default CarouselHome;
