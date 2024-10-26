import React from 'react';
import leadershipImage from '../footer/assests/tenculture.jpg'; // Adjust the path to your image

const LeadershipPrinciplesFooter = () => {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Core Leadership Principles
        </h2>
        <p className="text-gray-600 mb-8">
          Our leadership principles are designed to foster a culture of excellence and innovation. These principles prioritize clients, encourage continuous improvement, and ensure accountability at every level. We believe in being smart and ingenious, always striving to stay a step ahead in our approach. Our leaders are prudent and grounded, focusing on building trust and maintaining high standards. With a commitment to being bold and decisive, we aim to navigate challenges with confidence and integrity. Explore how these values shape our commitment to outstanding leadership and customer satisfaction.
        </p>
        <img
          src={leadershipImage}
          alt="Leadership Principles"
          className="w-[60%] max-h-[50%] mx-auto rounded-lg shadow-lg"
        />
      </div>
    </footer>
  );
};

export default LeadershipPrinciplesFooter;
