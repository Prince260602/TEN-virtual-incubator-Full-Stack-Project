import React from "react";
import img1 from "./images/virtual-Incubate.jpg";
import "./IncubatorFirstPart.css"; // Import the CSS file
import { Link } from "react-router-dom";

const IncubatorFirstPart = () => {
  return (
    <div className="main-container">
      <div className="background">
        <div className="text-overlay">Virtual Incubate Program</div>
        {/* <div className="subheading">
          • 310+ Startups • 160+ Partners • 900+ Jobs created
        </div> */}
        {/* <div className="button-container">
        <Link to='/ApplicationForm'> <button className="btn btn-primary">APPLY NOW</button></Link>
          <button className="btn btn-secondary">I AM AN INVESTOR</button>
        </div> */}
      </div>
    </div>
  );
};

export default IncubatorFirstPart;
