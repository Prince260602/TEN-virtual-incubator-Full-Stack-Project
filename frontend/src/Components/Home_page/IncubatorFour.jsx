import React from 'react';
import './IncubatorFour.css';

const IncubatorFour = () => {
  return (
    <div className="offerings-container">
      <h2>WHAT TO EXPECT</h2>
      <h3>OFFERINGS FOR EARLY STAGE STARTUPS</h3>
      <div className="offerings-grid">
        {/* Startup Kit Column */}
        <div className="offering-column">
          <div className="column-header">STARTUP KIT</div>
          <p>The startup kit offers free credits from partners like Google Cloud, Amazon Web Services, Digital Ocean, IBM Cloud, and more (25+ partners). It is designed to help startups reach the next growth level.</p>
        </div>

        {/* Weekend Sessions Column */}
        <div className="offering-column">
          <div className="column-header">WEEKEND SESSIONS</div>
          <p>Workshops on key topics for startups are held quarterly, facilitated by industry experts across the country.</p>
        </div>

        {/* Community Meetup Column */}
        <div className="offering-column">
          <div className="column-header">COMMUNITY MEETUP (10,000 STARTUPS SOCIAL)</div>
          <p>A one-day event attended by key figures in the ecosystem. It introduces new startups to the community and fosters knowledge sharing.</p>
        </div>

        {/* Founder Circle Column */}
        <div className="offering-column">
          <div className="column-header">FOUNDER CIRCLE</div>
          <p>Successful startup founders share their experiences with member startups. These are informal gatherings of alumni and current startups in the program.</p>
        </div>

        {/* Consulting Sessions Column */}
        <div className="offering-column">
          <div className="column-header">CONSULTING SESSIONS</div>
          <p>Provides consulting support in legal, accounting, sales, marketing, product design, and management for cohort startups.</p>
        </div>
      </div>
    </div>
  );
};

export default IncubatorFour;
