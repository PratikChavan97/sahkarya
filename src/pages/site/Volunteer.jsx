import Quote from "../../components/site/Quote";
import VolunteerForm from "../../components/site/VolunteerForm";

function Volunteer() {
  return (
    <div className="volunteer">
      <Quote name="Henry Ford">
        "Coming together is a beginning; keeping together is progress; working
        together is success."
      </Quote>
      <VolunteerForm />
    </div>
  );
}

export default Volunteer;
