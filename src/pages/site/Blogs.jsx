import ContactHeader from "../../components/site/ContactHeader";
import "./module.Blogs.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import OwlCarousel from "react-owl-carousel";

function Blogs() {
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
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <div className="blogs">
      <ContactHeader>Gallery</ContactHeader>
      <h3>Glances 2023</h3>
      <div className="blogs-gallery owl-carousel-wrapper">
        <OwlCarousel classID="owl-theme" {...options}>
          <div className="item">
            <img src="assets/gallery/2023/img-1.JPG" alt="carousel-1" />
          </div>
          <div className="item">
            <img src="assets/gallery/2023/img-2.JPG" alt="carousel-2" />
          </div>
          <div className="item">
            <img src="assets/gallery/2023/img-3.JPG" alt="carousel-3" />
          </div>
          <div className="item">
            <img src="assets/gallery/2023/img-4.JPG" alt="carousel-4" />
          </div>
          <div className="item">
            <img src="assets/gallery/2023/img-5.JPG" alt="carousel-5" />
          </div>
          <div className="item">
            <img src="assets/gallery/2023/img-6.JPG" alt="carousel-6" />
          </div>
          <div className="item">
            <img src="assets/gallery/2023/img-7.JPG" alt="carousel-7" />
          </div>
          <div className="item">
            <img src="assets/gallery/2023/img-8.JPG" alt="carousel-8" />
          </div>
        </OwlCarousel>
      </div>
      <h3>Glances 2024</h3>
      <div className="blogs-gallery owl-carousel-wrapper">
        <OwlCarousel classID="owl-theme" {...options}>
          <div className="item">
            <img src="assets/gallery/2024/img-1.JPG" alt="carousel-1" />
          </div>
          <div className="item">
            <img src="assets/gallery/2024/img-2.JPG" alt="carousel-2" />
          </div>
          <div className="item">
            <img src="assets/gallery/2024/img-3.JPG" alt="carousel-3" />
          </div>
          <div className="item">
            <img src="assets/gallery/2024/img-4.JPG" alt="carousel-4" />
          </div>
          <div className="item">
            <img src="assets/gallery/2024/img-5.JPG" alt="carousel-5" />
          </div>
          <div className="item">
            <img src="assets/gallery/2024/img-6.JPG" alt="carousel-6" />
          </div>
          <div className="item">
            <img src="assets/gallery/2024/img-7.JPG" alt="carousel-7" />
          </div>
          <div className="item">
            <img src="assets/gallery/2024/img-8.JPG" alt="carousel-8" />
          </div>
          <div className="item">
            <img src="assets/gallery/2024/img-9.JPG" alt="carousel-9" />
          </div>
          <div className="item">
            <img src="assets/gallery/2024/img-10.JPG" alt="carousel-10" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Blogs;
