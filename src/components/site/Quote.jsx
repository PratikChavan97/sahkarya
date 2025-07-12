import "./module.Quote.css";

function Quote({ children, name }) {
  return (
    <div className="quote">
      <h3>{children}</h3>
      <h4>- {name}</h4>
    </div>
  );
}

export default Quote;
