// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Courses.css";
// import axios from "axios";
// import Loader from './Loader';
// import FirstPart from '../FirstPart';
// import Features from '../Features';
// import Sliding from '../Sliding_companies';
// import FAQ from "../../Home_Page_FAQ/FAQ";



// const Courses = () => {
  
//   const [courses,setcourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top of the page on component load
//   }, []); 
//   useEffect(()=>{
//     setTimeout(()=>{
//       axios.get("https://ten-official-1.onrender.com/api/users/courses")
//      .then((res)=> setcourses(res.data.data))
//       // setcourses(res) 
//      .catch((err)=>console.log(err))
    
//     setLoading(false);
//   }, 2000);
//   },[])
//   if (loading) {
//     return <Loader />;
//   }

//   return (
    
//     <div className="Courses-cont">
//     <FirstPart/>
//     <Features/>
//     <Sliding/>
    
//     {/* <Courses/> */}
//       <h1 className=" text-2xl md:text-3xl font-bold p-3">Let the journey of self-learning begin</h1>
//       <div className="courses-wrapper">
//         {courses.map((course, index) => (
//           <div key={index} className="course-card">
//             <img
//               src={course.imgSrc}
//               alt={course.title}
//               className="course-img h-48"
//             />
//             <h3>{course.title}</h3>
//             <div> Price : <span className="text-red-600 font-semibold text-lg"> {course.price} </span> Rs </div>

           
//               <Link to={`/Courses/${course._id}`}>
//               <button className="course-btn">Get this Course</button>
//               </Link>
    
//           </div>
//         ))}
//       </div>
//       <FAQ/>
//     </div>
//   );
// };

// export default Courses;

































import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";
import axios from "axios";
import Loader from './Loader';
import FirstPart from '../FirstPart';
import Features from '../Features';
import Sliding from '../Sliding_companies';
import FAQ from "../../Home_Page_FAQ/FAQ";
import CFAQ from "../../Course_Page_FAQ/CFAQ";



const Courses = () => {
  
  const [courses,setcourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component load
  }, []); 
  useEffect(()=>{
    setTimeout(()=>{
      // axios.get("https://ten-official-1.onrender.com/api/users/courses")
      axios.get("http://localhost:4000/api/users/courses")
     .then((res)=> setcourses(res.data.data))
      // setcourses(res) 
     .catch((err)=>console.log(err))
    
    setLoading(false);
  }, 2000);
  },[])
  if (loading) {
    return <Loader />;
  }

  return (
    
    <div className="Courses-cont">
    <FirstPart/>
    <Features/>
    <Sliding/>
    
    {/* <Courses/> */}
      <h1 className=" text-2xl md:text-3xl font-bold p-3">Let the journey of self-learning begin</h1>
      <div className="courses-wrapper">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="course-img h-48"
            />
            <h3>{course.title}</h3>
            <div> Price : <span className="text-red-600 font-semibold text-lg"> {course.price} </span> Rs </div>

           
              <Link to={`/Courses/${course._id}`}>
              <button className="course-btn">Get this Course</button>
              </Link>
    
          </div>
        ))}
      </div>
      <CFAQ/>
    </div>
  );
};

export default Courses;