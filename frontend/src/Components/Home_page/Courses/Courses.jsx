

import React, { useEffect, useState } from "react";
import "./Courses.css";
import {Link} from 'react-router-dom'
import img from './PIMG.jpg'
import axios from "axios";
import Loader from './Loader';



const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  
  const [courses,setcourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      // axios.get("https://ten-official-1.onrender.com/api/users/courses")
      axios.get("http://localhost:4000/api/users/courses")
     .then((res)=> setcourses(res.data.data))
      // setcourses(res) 
     .catch((err)=>console.log(err))
     setLoading(false);
    },2000);
     
  },[]);
  if (loading) {
    return <Loader />;
  }



  const defaultCourseCount = 6;
  const coursesToShow = showAll ? courses : courses.slice(0, defaultCourseCount);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
  };

  return (
    <div className="Courses-cont">
      <h1 className=" text-2xl md:text-3xl font-bold p-3">Let the journey of self-learning begin</h1>
      <div className="courses-wrapper">
        {coursesToShow.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="course-img h-48"
            />
            <h3>{course.title}</h3>
            <div className="rating">
              {Array(course.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} className="star">
                    &#9733;
                  </span>
                ))}
            </div>
            <div> Price : <span className="text-red-600 font-semibold text-lg"> {course.price} </span> Rs </div>
            
            {/* <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
            > */}
             <Link to={`/Courses/${course._id}`}> <button className="course-btn">Get this Course</button></Link>            
          </div>
        ))}
      </div>
        <Link to={'/Courses'}>
          <button className="py-2 px-4 bg-blue-400 text-white"> View More</button>

        </Link>
        
    </div>
  );
};

export default Courses;

