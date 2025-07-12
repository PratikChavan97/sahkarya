import { useState } from "react";
import "./module.PaymentDetails.css";

function PaymentDetails() {
  const [display, setDisplay] = useState(false);
  const [utr, setUtr] = useState("");

  function handlePaymentDetails(e) {
    e.preventDefault();
    console.log(utr);
    setUtr("");
    setDisplay(false);
  }

  return (
    <div className="payment-details">
      <h2>Payment Page</h2>
      <div className="details">
        <div className="bank-details">
          <p>Please make payment using this details or Scan QR</p>
          <div>
            <h4>Account Number</h4>
            <p>336205000828</p>
          </div>
          <div>
            <h4>Account Holder's Name</h4>
            <p className="holder-name">
              Sahkarya Educational and social foundation
            </p>
          </div>
          <div>
            <h4>IFSC Code</h4>
            <p>ICIC0003362</p>
          </div>
          <button
            className="sent"
            onClick={() => setDisplay((display) => !display)}
          >
            Payment Sent
          </button>
        </div>
        <div className="qr-details">
          <img src="assets/qr-payment.png" alt="qr" />
        </div>
      </div>
      {display && (
        <div className="payment-verify">
          <input
            type="text"
            placeholder="UTR"
            value={utr}
            onChange={(e) => setUtr(e.target.value)}
          />
          <button
            className="utr-submit"
            onClick={(e) => handlePaymentDetails(e)}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentDetails;
