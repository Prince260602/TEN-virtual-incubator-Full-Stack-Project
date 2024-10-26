import React from 'react';
import './IncubatorThird.css';

const IncubatorThird = () => {
  return (
    <div className="eligibility-container">
      <h2>ELIGIBILITY CRITERIA</h2>
      <p>Startups in the early and mid-stage that fall in the below-given criteria are welcome to apply to the program.</p>
      <div className="eligibility-grid">
        {/* Early Stage Column */}
        <div className="eligibility-column">
          <div className="column-header">EARLY STAGE</div>
          <ul>
            <li>Focus on technological innovation</li>
            <li>Product-based (not service-based)</li>
            <li>Registered in India or founded by Indian founders with operations in India</li>
          </ul>
        </div>

        {/* Mid Stage Column */}
        <div className="eligibility-column">
          <div className="column-header">MID STAGE</div>
          <ul>
            <li>Product ready with some early traction</li>
            <li>B2B SaaS, any vertical, any domain</li>
            <li>Paying customers or proof of concept (POC)</li>
            <li>B2C mobile apps can be considered if they have 5000+ user visits/downloads</li>
            <li>Full-time founders with diverse skills, including one tech co-founder</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IncubatorThird;
