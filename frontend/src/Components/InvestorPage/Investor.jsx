import React from 'react';
import { Link } from 'react-router-dom';

const InvestorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      {/* <header className="bg-white shadow-md">
        <div className="container py-4 flex justify-center">
          <Link to="/">
            <img
              src="https://i.ibb.co/6J6F1zY/the-entrepreneurship-network-cover.jpg"
              alt="TEN logo"
              className="h-16 w-auto"
            />
          </Link>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto p-4 flex-grow text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-blue-800">Investor Information</h2>
        <p className="mb-8 text-gray-700 max-w-2xl">
          We provide detailed information about our investors. Click the button below to view the complete list of investors in an Excel sheet.
        </p>
        
        <a 
          href="https://docs.google.com/spreadsheets/d/1IHR3W26E4tRjkGMbrxiLEe3KLvPp_Lnt/edit?usp=drive_link&ouid=108809072909559914180&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          View Investors Excel Sheet
        </a>
      </main>

      {/* Footer */}
      {/* <footer className="bg-white shadow-md mt-4">
        <div className="container mx-auto p-4 text-center">
          <p className="text-gray-600">&copy; 2024 TEN. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default InvestorsPage;
