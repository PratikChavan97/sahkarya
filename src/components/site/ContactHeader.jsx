import "./module.ContactHeader.css";

function ContactHeader({ children }) {
  return (
    <div className="contact-header">
      <h2 className="page-top">{children}</h2>
      {/* <p>You can connect with us</p> */}
    </div>
  );
}

export default ContactHeader;
