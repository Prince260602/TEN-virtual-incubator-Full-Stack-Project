import React, { useState } from "react";
import "./contact.css";
import officeIcon from "./images/office-png.png";
import locationIcon from "./images/location.png";
import mailIcon from "./images/mail.png";
import callIcon from "./images/call.png";
import facebookIcon from "./images/1.png";
import instagramIcon from "./images/3.png";
import twitterIcon from "./images/2.png";
import linkedInIcon from "./images/5.png";


import axios from "axios";
import { toast } from "react-hot-toast";

const Contactus = () => {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  })

  const { firstName, lastName, email, mobile, message } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true);
    const toastId = toast.loading("Loading...")
    try {
      const res = await axios.post("https://ten-official-1.onrender.com/api/users/contact", formData);

      toast.success("Email Sent Successfully")

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });

    } catch (error) {
      console.log("Error: ", error.message);

      toast.error("Could Not Send Email")
    }


    setLoading(false);
    toast.dismiss(toastId)

  }


  return (
    <>
      <section className="contactus_section">
        <div className="contactUs_container">
          <div className="contactUs_contactInfo">
            <div>
              <h2>Contact Info</h2>
              <ul className="contactUs_info">
                <li>
                  <span>
                    <img src={officeIcon} alt="Office Icon" />
                  </span>{" "}
                  {/* Enter company address Here */}
                  <span>
                    The Entrepreneurship <br />
                    Network(TEN)
                  </span>
                </li>
                <li>
                  <span>
                    <img src={locationIcon} alt="Location Icon" />
                  </span>{" "}
                  {/* Enter company address Here */}
                  <span>
                    Delhi, India                                
                  </span>
                </li>
                <li>
                  <span>
                    <img src={mailIcon} alt="Mail Icon" />
                  </span>
                  <span>
                    <a href="mailto:@gmail.com">info@entrepreneurshipnetwork.net</a>
                  </span>{" "}
                  {/* Enter company gamil Here */}
                </li>                
              </ul>
            </div>
            <ul className="contactUs_sci">
              {/* <li>
                <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                  <img src={facebookIcon} alt="Facebook Icon" />
                </a>
              </li>{" "} */}
              {/* Enter Facebook Link Here */}
              <li>
                <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                  <img src={instagramIcon} alt="Instagram Icon" />
                </a>
              </li>{" "}
              {/* Enter Instagram Link Here */}
              {/* <li>
                <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                  <img src={twitterIcon} alt="Twitter Icon" />
                </a>
              </li>{" "} */}
              {/* Enter Twitter Link Here */}
              <li>
                <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                  <img src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="contactUs_contactForm">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="contactUs_formBox">
              <div className="contactUs_inputBox w50">
                <input type="text" onChange={handleOnChange} value={firstName} name="firstName" required />
                <span>First Name</span>
              </div>
              <div className="contactUs_inputBox w50">
                <input type="text" onChange={handleOnChange} value={lastName} name="lastName" required />
                <span>Last Name</span>
              </div>
              <div className="contactUs_inputBox w50">
                <input type="email" onChange={handleOnChange} value={email} name="email" required />
                <span>Email Address</span>
              </div>
              <div className="contactUs_inputBox w50">
                <input type="text" minLength={10} maxLength={10} onChange={handleOnChange} value={mobile} name="mobile" required />
                <span>Mobile Number</span>
              </div>
              <div className="contactUs_inputBox w100">
                <textarea onChange={handleOnChange} value={message} name="message" required></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="contactUs_inputBox w100">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
