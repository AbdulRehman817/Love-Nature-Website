import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="why-love-nature-section">
      <div className="text-container">
        <h2 className="heading">Why Love Nature</h2>
        <p className="description">
          Your customers just learned what services you offer. Tell them why
          they should work with you or your team. For example, you could
          highlight your experience and positive client reviews.
        </p>
        <p className="description">
          The badges illustrate this. We also focus on key benefits they will
          get while using our services, namely quick turnaround times and
          dedicated support. You could also use them to show awards you won for
          your best work.
        </p>
      </div>
      <div className="badge-container">
        <div className="badge">
          <div className="icon">🏅</div>
          <p className="badge-text">8 Years Experience</p>
        </div>
        <div className="badge">
          <div className="icon">⭐</div>
          <p className="badge-text">5 Star Rating</p>
        </div>
        <div className="badge">
          <div className="icon">⏳</div>
          <p className="badge-text">Quick Turnaround</p>
        </div>
        <div className="badge">
          <div className="icon">🎯</div>
          <p className="badge-text">Dedicated Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
