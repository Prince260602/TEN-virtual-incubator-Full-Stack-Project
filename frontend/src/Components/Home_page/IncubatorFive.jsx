import React from 'react';
import './IncubatorFive.css'; // Import external CSS for styling

const IncubatorFive = () => {
  return (
    <div className="container">
      <h2 className="heading">OFFERINGS FOR MID-STAGE STARTUPS</h2>
      <p>All the offerings of early stage startups are valid for mid-stage startups. Mid-stage startups are eligible for:</p>
      
      <div className="offerings">
        <div className="offering-card">
          <h3>INVESTOR CONNECTS</h3>
          <p>
          From seed to growth capital, the TEN Incubation Program helps shortlisted startups secure funding from a variety of investors, including angels, micro VCs, venture capitalists, and government funds.
          </p>
        </div>

        <div className="offering-card">
          <h3>MENTORSHIP</h3>
          <p>
          A vast network of mentors and influencers closely works with startups to provide the necessary guidance at different stages of their journey.
          </p>
        </div>

        <div className="offering-card">
          <h3>INDUSTRY CONNECTS</h3>
          <p>
          Selected startups are given the chance to present their products to industry partners and explore opportunities for strategic partnerships, alliances, mergers & acquisitions, or direct business deals.
          </p>
        </div>
      </div>

      <h3 className="sub-heading">For mid-stage startups subject to eligibility and relevance, they will be considered for:</h3>
      <ul className="considered-list">
        <li>Showcase at NPC, NTLF, and other larger relevant NASSCOM events</li>
        <li>Global access opportunities through InnoTrek, GTD delegations</li>
        <li>Support in reaching out to Governments based on relevance</li>
        <li>Consulting support in legal, accounting, sales, marketing, product design, and management</li>
      </ul>
    </div>
  );
}

export default IncubatorFive;
