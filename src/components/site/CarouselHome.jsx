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
    <div>
      <OwlCarousel></OwlCarousel>
    </div>
  );
}

export default CarouselHome;
