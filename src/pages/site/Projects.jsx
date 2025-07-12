import ContactHeader from "../../components/site/ContactHeader";

const events = [
  {
    heading: "A Celebration of Learning and Hope - JULY 2025",
    para1:
      "Education is the foundation of a brighter future, and Sahkarya Educational and Social Foundation is proud to host, a special event dedicated to celebrating the power of knowledge and community learning. This gathering aims to bring together students, educators, volunteers and well-wishers to share stories, inspire young minds, and spark a collective movement towards educational equality.",
    para2:
      "Through interactive workshops, student performances, motivational talks, the event will highlight the journey of underpriviledged children who are overcoming challenges with the support of our programs. It's not just a celebration, but a testimony to the impact that consistent effort, guidance, and access to educaiton can bring. Visitors will also get a chance to see firsthand the creative talent and determination of the students we serve.",
    para3:
      "We invite everyone-individuals, families, institutions, and donors-to be a part of this vibrant day. Let's join hands to empower learning and open new doors of opportunity for the youth of our nation. Together, we can fuel dreams, change lives, and creates a society where educaion is truly for all.",
    venue: "Vitthal Tupe Patil Theater, Hadapsar",
    date: "13/07/2025",
    time: "08:00 AM",
  },
];

function Projects() {
  return (
    <div className="projects">
      <ContactHeader>Our Events</ContactHeader>
      <div
        className="events"
        style={{
          padding: "3rem 7rem",
        }}
      >
        <h2>{events[0].heading}</h2>
        <p className="text-stone-500">
          <strong>{events[0].date}</strong>
        </p>
        <p>{events[0].para1}</p>
        <p>{events[0].para2}</p>
        <p>{events[0].para3}</p>

        <div
          className="venue"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "2px outset gray",
              borderRadius: "0.4rem",
              padding: "0.5rem 2rem",
            }}
          >
            <h5>Venue</h5>
            <p>
              <strong>{events[0].venue}</strong>
            </p>
          </div>
          <div
            style={{
              border: "2px outset gray",
              borderRadius: "0.4rem",
              padding: "0.5rem 2rem",
            }}
          >
            <h5>Time</h5>
            <p>
              <strong>08:00 AM Sunday</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
