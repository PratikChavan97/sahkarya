import "./module.TeamCard.css";

function TeamCard({ team }) {
  return (
    <div className="team-card">
      <img src={team.photourl} />
      <h4>
        {team.gender === "male" ? "Mr." : "Mrs."} {team.name}
      </h4>
    </div>
  );
}

export default TeamCard;
