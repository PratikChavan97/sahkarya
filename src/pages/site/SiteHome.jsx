import CarouselHome from "../../components/site/CarouselHome";
import ServeCards from "../../components/site/ServeCards";
import WelcomeOrganisation from "../../components/site/WelcomeOrganisation";
import AddVolunteer from "../../components/site/AddVolunteer";
import Doners from "../../components/site/Doners";

function SiteHome() {
  return (
    <div className="home">
      <CarouselHome />
      <WelcomeOrganisation />
      <ServeCards />
      <Doners />
      <AddVolunteer />
    </div>
  );
}

export default SiteHome;
