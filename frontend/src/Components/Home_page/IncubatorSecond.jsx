import React from 'react';
import img1 from './images/incubate-virtual.jpg';
import './IncubatorSecond.css';  // Import CSS for styling
import {Link} from 'react-router-dom'

const IncubatorSecond = () => {
  const navigateToWebsite = () => {
    window.location.href = 'https://ten-investing-nine.vercel.app/';
  };

  return (
    <div className='incubator-container'>
      <div className='text-section'>
        <p>
        TEN - The Entrepreneurship Network’s virtual incubation program supports nearly 400 startups annually, tailored for early to mid-stage startups seeking a boost and valuable connections. The program fosters an ideal environment for growth by offering a Startup Kit and linking companies with our extensive network of evaluators and mentors, including investors, accelerators, and seasoned industry experts.
        </p>
        <p>
        As one of the largest programs of its kind, it attracts a high volume of applications. The selection process involves two rounds of screening conducted by regional leads and our committee, which includes external stakeholders. To speed up the process and minimize waiting times, we now accept startups into the virtual incubator on a monthly basis.
        </p><Link to='/ApplicationForm'>
        <button class="bg-green-500 hover:bg-green-600 mt-3 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 sm:px-6 sm:py-3 sm:text-sm">
  Apply now
</button></Link> 
<button onClick={navigateToWebsite} class="bg-blue-500 hover:bg-blue-600 mt-3 ml-8 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 sm:px-6 sm:py-3 sm:text-sm">
  I am an investor
</button>

      </div>
      <div className='image-section'>
        <img src={img1} alt="Virtual Incubate Program" />
      </div>
    </div>
  );
};

export default IncubatorSecond;
