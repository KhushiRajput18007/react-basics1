import images from './assets/images/img.png'
import './App.css'
import './style.css'

import React from 'react';


const BlackRock = () => {
  return (
    <>
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#">BlackRock</a>
        </div>
        <ul className="navbar-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Insights</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Corporate sustainability</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
        <div className="navbar-right">
          <a href="#"><span className="search-icon">🔍</span></a>
        </div>
      </nav>

      <div className="container">
        <div className="text">
          <p>Private Markets</p>
          <h1>
            Global <br />
            Infrastructure <br />
            Partners, a part of <br />
            BlackRock
          </h1>
          <p>
            BlackRock and Global Infrastructure Partners announce the successful <br />
            completion of BlackRock's acquisition of GIP. The combination creates an<br />
            industry leader in infrastructure across equity, debt and solutions -<br />
            providing a diverse range of infrastructure sector expertise and exposure<br />
            across developed and emerging markets.
          </p>
          <button>Learn More</button>
        </div>
        <div className="image">
          <img src={images} alt="Global Infrastructure Partners Logo" />
        </div>
      </div>

      <div className="blocki">
        <p>Transforming<br /> BlackRock for our<br /> clients</p>
        <p>Investing in the<br /> transition to a low-<br />carbon economy</p>
        <p>Advancing shareholder<br /> democracy</p>
      </div>

      <div className="blocke">
        <p>
          Read more about changes we're making to help <br />
          our clients meet their investment, portfolio, and<br />
          business needs.
        </p>
        <p>
          Clients are asking for our perspective on the long-<br />
          term megaforces - including transition to a low-<br />
          carbon economy.
        </p>
        <p>
          We are committed to a future where all investors can <br />
          participate in proxy voting if they choose. Find out<br />
          how we are delivering on this through BlackRock<br />
          Voting Choice.
        </p>
      </div>

      <div className="blockv">
        <p>Implication of an aging population</p>
        <p>Weekly market commentary</p>
      </div>

      <div className="blocka">
        <p>
          We track the economic impact of aging - and investment opportunities and<br />
          risks it brings. Fewer people of working age limits how much countries can produce<br />
          and grow - unless they can find a way to adapt.
        </p>
        <p>
          Stay tuned on insights on hot topics, the latest trends in financial markets and<br />
          our broad asset class views via the weekly commentary by the BlackRock<br />
          Investment Institute. Read the latest market commentary.
        </p>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
            <a href="#">About BlackRock</a><br />
            <a href="#">Principles</a><br />
            <a href="#">Leadership</a><br />
            <a href="#">History</a><br />
            <a href="#">Global Impact</a><br />
            <a href="#">Contacts and Locations</a><br />
            <a href="#">Doing Business with BlackRock</a>
          </div>
          <div className="footer-column">
            <h3>Newsroom</h3>
            <a href="#">Overview</a><br />
            <a href="#">Media Contacts</a>
          </div>
          <div className="footer-column">
            <h3>Insights</h3>
            <a href="#">BlackRock Investment Institute</a><br />
            <a href="#">Investment Stewardship</a><br />
            <a href="#">Our approach to sustainability</a><br />
            <a href="#">Public Policy</a><br />
            <a href="#">Long-term capitalism</a><br />
            <a href="#">Investor Perspectives</a>
          </div>
          <div className="footer-column">
            <h3>Investor Relations</h3>
            <a href="#">Overview</a><br />
            <a href="#">Annual Reports & Proxy Information</a><br />
            <a href="#">SEC Filings</a><br />
            <a href="#">Stock Information</a><br />
            <a href="#">Dividend History</a><br />
            <a href="#">Events & Presentations</a><br />
            <a href="#">Corporate Governance</a>
          </div>
          <div className="footer-column">
            <h3>Corporate sustainability</h3>
            <a href="#">Corporate Sustainability</a><br />
            <a href="#">Human capital</a><br />
            <a href="#">Environmental Sustainability</a><br />
            <a href="#">Ethics & Integrity</a><br />
            <a href="#">Health & Safety</a><br />
            <a href="#">Social Impact</a>
          </div>
          <div className="footer-column">
            <h3>Careers</h3>
            <a href="#">Search Jobs</a><br />
            <a href="#">Life at BlackRock</a><br />
            <a href="#">Benefits</a><br />
            <a href="#">Diversity, Equity and Inclusion</a><br />
            <a href="#">Career Development</a><br />
            <a href="#">Students & Graduates</a><br />
            <a href="#">Supporting Veterans</a><br />
            <a href="#">BlackRock Alumni Network</a>
          </div>
        </div>
      </footer>

      <footer className="footer1">
        <div className="footer-content1">
          <div className="footer-logo-section1">
            <div className="footer-logo1">BlackRock</div>
            <p>
              As a global investment manager and fiduciary to our clients, our purpose at BlackRock is to help everyone experience financial well-being. Since 1999, we've been a leading provider of financial technology, and our clients turn to us for the solutions they need when planning for their most important goals.
            </p>
          </div>
          <div className="footer-links-section1">
            <div className="footer-column1">
              <h3>CORPORATE</h3>
              <a href="#">Fraud protection tips</a>
              <a href="#">Careers</a>
              <a href="#">Newsroom</a>
              <a href="#">Investor relations</a>
              <a href="#">UK Corporate Tax Strategy</a>
              <a href="#">UK Gender Pay Reporting</a>
              <a href="#">Accessibility</a>
              <a href="#">Responsible Disclosure</a>
            </div>
            <div className="footer-column1">
              <h3>LEGAL</h3>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Business Continuity</a>
              <a href="#">FINRA BrokerCheck</a>
              <a href="#">Best Ex & Order Placement Policy</a>
              <a href="#">Rule 606 Disclosure</a>
              <a href="#">Investor Rights</a>
              <a href="#">Manage Cookies</a>
            </div>
          </div>
        </div>
      </footer>
      <p>
        &copy; 2024 BlackRock, Inc. All rights reserved. This material is intended for information purposes only and does not constitute investment advice...
      </p>
    </div>
   
    </>
  );
};

export default BlackRock;
