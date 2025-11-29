import { useState, useEffect, useRef } from "react";

import "./module.CarouselHome.css";

function CarouselHome({ slides = [], autoPlay = true, interval = 3000 }) {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);
  let touchStartX = 0;
  let touchEndX = 0;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current, autoPlay, interval, nextSlide]);

  // Touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${current * 100}%)` }}
        ref={slideRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button className="carousel-btn left" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-btn right" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselHome;
