import CarouselHome from "../../components/site/CarouselHome";
import ServeCards from "../../components/site/ServeCards";
import Volunteer from "../../components/site/Volunteer";
import WelcomeOrganisation from "../../components/site/WelcomeOrganisation";

function SiteHome() {
  return (
    <div className="home">
      <CarouselHome />
      <WelcomeOrganisation />
      <ServeCards />
      <Volunteer />
    </div>
  );
}

export default SiteHome;
