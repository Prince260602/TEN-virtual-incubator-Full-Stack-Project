// import React, { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { mainContext } from "../../Context";
// import "./Navbar.css";
// import { toast } from "react-hot-toast";

// const Nav = () => {
//   const navigate = useNavigate();
//   const context = useContext(mainContext);
//   const [isNavbarActive, setIsNavbarActive] = useState(false);
//   const [user, setUser] = useState(context);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('userid');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, [context]);

//   const token = localStorage.getItem('token');
//   const toggleNavbar = () => {
//     setIsNavbarActive(!isNavbarActive);
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userid');
//     navigate('/');
//     toast.success("Logged out successfully!");
//   };

//   return (
//     <div className={`App ${isNavbarActive ? "active" : ""}`}>
//       <div className="App">
//         <header
//           className="header flex"
//           style={{
//             boxShadow:
//               "0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <Link to="/">
//             <img
//               src="https://i.ibb.co/6J6F1zY/the-entrepreneurship-network-cover.jpg"
//               alt="ten logo"
//               className="logo"
//             />
//           </Link>

//           <nav className="navbar">
//             <ul className="navbar-list">
//               <Link className="navbar-link" to="/">
//                 Home
//               </Link>
//               <Link className="navbar-link" to="/About-us">
//                 About
//               </Link>
//               <Link className="navbar-link" to="/Courses">
//                 Courses
//               </Link>
//               <Link className="navbar-link" to="/Testimonial">
//                 Testimonial
//               </Link>

//               <div className="dropdown">
//                 <a href="" className="nav-link-navbar">
//                   Career <i className="fa fa-caret-down"></i>
//                 </a>
//                 <div className="dropdown-content">
//                   <a
//                     href="https://www.expertia.ai/entrepreneurshipnetwork-net?utm_source=corp_site"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Apply for Internship
//                   </a>
//                   <a
//                     href="https://www.expertia.ai/entrepreneurshipnetwork-net?utm_source=corp_site"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     We're Hiring
//                   </a>
//                   <a
//                     href="https://calendly.com/techten/book-a-demo-session"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Book a Demo session
//                   </a>
//                 </div>
//               </div>

//               <div className="dropdown">
//                 <a href="" className="nav-link-navbar">
//                   More <i className="fa fa-caret-down"></i>
//                 </a>
//                 <div className="dropdown-content">
//                   <a
//                     href="https://hrportal.entrepreneurshipnetwork.net"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     HRMS
//                   </a>
//                   <a
//                     href="https://ailabs.entrepreneurshipnetwork.net/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     TEN AI labs
//                   </a>
//                   <a
//                     href="https://ideaengine.entrepreneurshipnetwork.net"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     TEN Idea Engine
//                   </a>
//                   {/* <Link to={"/Interview_for_course"}>Interview For Course</Link> */}
//                   <Link to={'https://discord.com/invite/2p8mh8vE'} target="_blank" > Virtual Campus</Link>
//                 </div>
//               </div>

//               <Link className="navbar-link" to="/contact-us">
//                 Contact
//               </Link>

//               { 
//                 !token ? (
//                   <div className="navbar-buttons">
//                     <Link to="/Login">
//                       <button className="login-btn">Log in</button>
//                     </Link>
//                     <Link to="Sign_Up">
//                       <button className="signup-btn">Sign Up</button>
//                     </Link>
//                   </div>
//                 ) : (
//                   <div className="flex gap-4 justify-center items-center">
//                     <Link to={`/profile/${user.id}`}><p className="text-white text-md"> {user.name} </p></Link>
//                     <button className="text-md py-1 px-4 bg-gray-500 text-white" onClick={handleLogout}> LogOut </button>
//                   </div>
//                 )
//               }
//             </ul>
//           </nav>

//           <div className="mobile-navbar-btn" onClick={toggleNavbar}>
//             <div className="toggle_btn" onClick={toggleDropdown}></div>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Nav;


import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mainContext } from "../../Context";
import { toast } from "react-hot-toast";
import "./Navbar.css";

const Nav = () => {
  const navigate = useNavigate();
  const context = useContext(mainContext);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [user, setUser] = useState(context);

  useEffect(() => {
    const storedUser = localStorage.getItem('userid');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [context]);

  const token = localStorage.getItem('token');
  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const closeNavbar = () => {
    setIsNavbarActive(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    navigate('/');
    toast.success("Logged out successfully!");
    closeNavbar();
  };

  return (
    <div className={`App ${isNavbarActive ? "active" : ""}`}>
      <header
        className="header flex"
        style={{
          boxShadow:
            "0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Link to="/" onClick={closeNavbar}>
          <img
            src="https://i.ibb.co/6J6F1zY/the-entrepreneurship-network-cover.jpg"
            alt="ten logo"
            className="logo"
          />
        </Link>

        <nav className={`navbar ${isNavbarActive ? "active" : ""}`}>
          <ul className="navbar-list">
            <Link className="navbar-link" to="/" onClick={closeNavbar}>
              Home
            </Link>
            <div className="dropdown">
              <a href="#" className="nav-link-navbar">
                About <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a
                  href="/About-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  About Us
                </a>
                <a
                  href="/Testimonial"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Testimonials
                </a>
                <a
                  href="https://halloffame.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Hall of Fame
                </a>
                <Link
                  to="/LeadershipPrinciplesFooter"
                  target="_blank"
                  onClick={closeNavbar}>
                  Leadership Principles
                </Link>
                <Link
                  to="/Layers"
                  target="_blank"
                  onClick={closeNavbar}>
                  Our Layers
                </Link>
              </div>
            </div>
            {/* <Link className="navbar-link" to="/About-us" onClick={closeNavbar}>
              About
            </Link> */}
            <Link className="navbar-link" to="/Courses" onClick={closeNavbar}>
              Courses
            </Link>
            {/* <Link className="navbar-link" to="/Testimonial" onClick={closeNavbar}>
              Testimonial
            </Link> */}
            
            <div className="dropdown">
              <a href="#" className="nav-link-navbar">
                Career <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a
                  href="https://career.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Career
                </a>
                <a
                  href="https://jobs.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                 TEN Jobs
                </a>
                <a
                  href="https://ten-internship.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                 TEN Internship
                </a>
                </div>
            </div>
            
            {/* <Link className="navbar-link" to="https://jobs.entrepreneurshipnetwork.net/" target="_blank" onClick={closeNavbar}>
              Ten Jobs
            </Link> */}
           

            <Link className="navbar-link"
                  to="/Interview"
                  onClick={closeNavbar}>
                 PAP             
                 </Link>
                
            <Link className="navbar-link" to="/contact-us" onClick={closeNavbar}>
              Contact
            </Link>
            {/* <Link className="navbar-link" to="https://halloffame.entrepreneurshipnetwork.net/" onClick={closeNavbar}>
              HallOfFame
            </Link> */}
            
            <div className="dropdown">
              <a href="#" className="nav-link-navbar">
                Hackathon <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a
                  href="https://hackathon.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Hackathon
                </a>
                <a
                  href="https://ideathon.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                 Ideathon
                </a>
                </div>
            </div>

            {/* <Link className="navbar-link" to="https://hackathon-mocha-iota.vercel.app/" onClick={closeNavbar}>
              Hackathon
            </Link> */}

            <div className="dropdown">
              <a href="#" className="nav-link-navbar">
                Our Tools <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-content"> 
              <a
                  href="Ten_mentor"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Ten Mentor
                </a>
              <a
                  href="Resume_Building"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >  
                
                  Resume Building
                </a>
                <a
                  href="Influencer_Marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >  
                  Influencer Marketing
                </a>
                <a
                  href="Ten_ai_consulting_labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >  
                  TEN AI consulting labs
                </a>
                <a
                  href="HRMS"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  HRMS
                </a>
                <a
                  href="AI-Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  TEN AI labs
                </a>
                <a
                  href="Idea-Engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  TEN Idea Engine
                </a>
                <Link
                  to={token?'/investor':'/login'}
                >
                  TEN Investors
                </Link>
                <Link
                  to="https://discord.com/invite/wdgH95JY6a"
                  target="_blank"
                  onClick={closeNavbar}
                >
                  Virtual Campus
                </Link>
                {/* <Link
                  to="/LeadershipPrinciplesFooter"
                  target="_blank"
                  onClick={closeNavbar}>
                  Leadership Principles
                </Link>
                <Link
                  to="/Layers"
                  target="_blank"
                  onClick={closeNavbar}>
                  Our Layers
                </Link> */}
                <Link
                  to="https://godengine.entrepreneurshipnetwork.net/"
                  target="_blank"
                  onClick={closeNavbar}>
                  God Engine
                </Link>
                <Link
                  to="https://employeemanagement.entrepreneurshipnetwork.net/"
                  target="_blank"
                  onClick={closeNavbar}>
                  Employee Management System
                </Link>
                <Link
                  to="https://ten-news-vert.vercel.app/"
                  target="_blank"
                  onClick={closeNavbar}>
                Newsin10
                </Link>
              </div>
            </div>
            
             
            {!token ? (
              <div className="navbar-buttons">
                <Link to="/Login" onClick={closeNavbar}>
                  <button className="login-btn">Log in</button>
                </Link>
                <Link to="Sign_Up" onClick={closeNavbar}>
                  <button className="signup-btn">Sign Up</button>
                </Link>
              </div>
            ) : (
              <div className="flex gap-4 justify-center items-center">
                <Link to={`/profile/${user.id}`} onClick={closeNavbar}>
                  <p className="text-white text-md">{user.name}</p>
                </Link>
                <button className="text-md py-1 px-4 bg-gray-500 text-white" onClick={handleLogout}>
                  LogOut
                </button>
              </div>
            )}
          </ul>
        </nav>

        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
          <div className={`toggle_btn ${isNavbarActive ? "open" : ""}`}></div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
