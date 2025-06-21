import "./module.PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy">
      <h2 className="page-top">Privacy Policy</h2>
      <div className="policy">
        <div>
          <b>Effective Date: [Insert Date]</b>
          <br />
          <b>Organization Name: Sahkarya</b>
          <br />
          <b>Location: Pune, Maharashtra, India</b>
          <br />
          <p>
            At Sahkarya, your privacy is important to us. This Privacy Policy
            explains how we collect, use, store, and protect your personal
            information when you interact with our organization through our
            website, events, campaigns, or services. By using our services, you
            agree to the practices outlined in this policy.
          </p>
        </div>
        <div className="lists">
          <ol style={{ listStyle: "i" }}>
            <li>
              <h4>Information We Collect</h4>
              <p>We collect the following types of information:</p>
              <ul>
                <li>
                  <h5>Personal Information</h5>
                  <ul className="insider">
                    <li>Name</li>
                    <li>Email</li>
                    <li>Phone</li>
                    <li>Postal Code</li>
                    <li>Date of birth (if required for specific programs)</li>
                    <li>
                      PAN/Aadhaar number (for donation or legal compliance, if
                      applicable)
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Non Personal Information</h5>
                  <ul className="insider">
                    <li>Browser type and version</li>
                    <li>IP address</li>
                    <li>Date and time of visit</li>
                    <li>Pages visited on our website</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <h4>How We Collect Information</h4>
              <p>We collect information through:</p>
              <ul className="insider">
                <li>Our website’s contact and donation forms</li>
                <li>Email or phone communication</li>
                <li>Event registration forms</li>
                <li>Volunteer sign-up forms</li>
                <li>Cookies and similar technologies on our website</li>
              </ul>
            </li>

            <li>
              <h4>How We Use Your Information</h4>
              <p>We use your information to:</p>
              <ul className="insider">
                <li>Respond to your queries and feedback</li>
                <li>Process donations and issue receipts</li>
                <li>Keep you informed about our work, campaigns, and events</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our website and outreach efforts</li>
              </ul>
            </li>

            <li>
              <h4>Sharing of Information</h4>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only with:
              </p>
              <ul className="insider">
                <li>
                  Trusted service providers who assist in our operations (e.g.,
                  payment gateways, mailing platforms)
                </li>
                <li>
                  Legal authorities when required by law or to protect our legal
                  rights
                </li>
              </ul>
            </li>

            <li>
              <h4>Security of Your Information</h4>
              <p>
                We take reasonable and appropriate security measures to protect
                your personal information from unauthorized access, disclosure,
                alteration, or destruction. However, no method of data
                transmission over the internet is completely secure.
              </p>
            </li>

            <li>
              <h4>Your Rights</h4>
              <p>You have the right to:</p>
              <ul className="insider">
                <li>Access your personal data</li>
                <li>Correct inaccuracies in your data</li>
                <li>
                  Request deletion of your data (subject to applicable laws)
                </li>
                <li>Opt-out of email communications at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us at [Insert NGO Email
                Address].
              </p>
            </li>

            <li>
              <h4>Cookies and Tracking</h4>
              <p>
                Our website may use cookies to enhance your browsing experience.
                You can control or disable cookies through your browser
                settings.
              </p>
            </li>

            <li>
              <h4>Third-Party Links</h4>
              <p>
                Our website may contain links to other websites. We are not
                responsible for the privacy practices of such third-party sites.
                We encourage you to review their privacy policies separately.
              </p>
            </li>

            <li>
              <h4>Children’s Privacy</h4>
              <p>
                We do not knowingly collect personal information from children
                under the age of 13 without parental or guardian consent. If we
                learn we have collected such information, we will delete it
                promptly.
              </p>
            </li>

            <li>
              <h4>Changes to This Privacy Policy</h4>
              <p>
                We may update this policy from time to time. Any changes will be
                posted on this page with the revised date. We encourage you to
                review this page periodically.
              </p>
            </li>

            <li>
              <h4>Contact Us</h4>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or how your data is handled, please contact:
              </p>
              <p>
                Sahkarya <br />
                [Insert Office Address if any] <br /> Pune, Maharashtra, India{" "}
                <br />
                Email: [Insert NGO Email] <br /> Phone: [Insert Contact Number]
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
