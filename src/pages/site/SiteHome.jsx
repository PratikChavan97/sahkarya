import CarouselHome from "../../components/site/CarouselHome";
import ServeCards from "../../components/site/ServeCards";
import WelcomeOrganisation from "../../components/site/WelcomeOrganisation";
import AddVolunteer from "../../components/site/AddVolunteer";
import Doners from "../../components/site/Doners";
import Quote from "../../components/site/Quote";

function SiteHome() {
  const images = [
    "assets/carousel.png",
    "assets/carousel-2.png",
    "assets/carousel-3.jpg",
    "assets/carousel-4.jpg",
  ];

  return (
    <div className="home">
      <CarouselHome slides={images} />
      <WelcomeOrganisation />
      <Quote name="Ralph Waldo Emerson">
        "To know even one life has breathed easier because you have lived, that
        is to have succeeded."
      </Quote>
      <ServeCards />
      <Quote name="Mahatma Gandhi">
        "The best way to find yourself is to lose yourself in the service of
        others."
      </Quote>
      <Doners />
      <AddVolunteer />
    </div>
  );
}

export default SiteHome;
