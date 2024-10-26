import React from 'react';
import './Commiteemembers.css'; // Import the CSS for styling
import { img1, img2, img3, img4 } from '../../assets/assets';

const CommitteeMembers = () => {
  const members = [
    {
      id: '1',
      name: 'Srikrupa HD',
      description: 'Project Manager & Data Scientist',
      details: "Experienced in data science, specializing in multivariable regression and web scraping using Python, Pandas, and BeautifulSoup.",
			image: img1,
    },
    {
      id: '2',
      name: 'Bhagyashree Patil',
      description: 'Project Manager',
      details: "A mentor at TEN, she excels in React.js, Java, HTML, CSS, and JavaScript, guiding software engineering teams effectively.",
			image: img2,
    },
    {
      id: '3',
      name: 'Priyanshi Sharma',
      description: 'Senior HR Manager',
      details: "professional HR manages recruitment, employee relations, training, and ensures compliance with company policies.",
			image: img4,
    },
    {
      id: '4',
      name: 'Samsul Alam',
      description: 'Web Developer',
      details: "As Web Developer at TEN, he leverages React.js,Java, HTML, CSS, and JavaScript, guiding software engineering teams effectively.",
			image: img3,
    },
  ];

  return (
    <div className="committee-container">
      <h1>Committee Members</h1>
      <p className="description">
        The Committee Members are an integral part of the program offering support in the selection of startups and mentorship.
      </p>
      <div className="members-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.image} alt={member.name} className="member-photo" />
            <h3>{member.name}</h3>
            <p style={{color:'black'}}>{member.description}</p>
            <p>{member.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeMembers;
