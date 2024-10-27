import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import placement from "./placement.pdf";
import axios from "axios";

const CourseDetails = () => {
  const [course,SetCourse] =useState([])
  const { id } = useParams();
 
  useEffect(()=>{
    // axios.get(`https://ten-official-1.onrender.com/api/users/coursedetails/${id}`)
    axios.get(`http://localhost:4000/api/users/coursedetails/${id}`)
    .then((res)=>SetCourse(res.data.courseDetails))
    .catch((Err)=>console.log(Err))
  },[id])

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="md:[80%] mx-auto py-8 px-8 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="">
          <img
            src={course.imgSrc}
            alt={course.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-700 mr-2">
              {course.category}
            </span>
            {/* <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-700">
              {course.level}
            </span> */}
          </div>
          {/* <div className="flex items-center mb-4">
            {Array(course.rating)
              .fill()
              .map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div> */}
          <div>{course.description}</div>
          {/* <a href={`/${course.link}`}> */}
          {/* <button 
          onClick={() => window.location.href = course.link}
          className='px-4 py-2 hover:bg-black hover:text-white text-black bg-white'> View Brochure </button> */}
          {/* </a> */}
          <div>
            {" "}
            Price :{" "}
            <span className="text-red-600 font-semibold text-lg">
              {" "}
              {course.price}{" "}
            </span>{" "}
            Rs{" "}
          </div>
          <div className=" flex gap-4 justify-center items-center">
          <a href={placement} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 hover:bg-black hover:text-white text-black bg-white">
              View Brochure
            </button>
          </a>
            {/* <Link to={`/payment/${course._id}`}> */}
            <Link to="https://chat.whatsapp.com/JRMZnwaXsLUFOJylXdOgJ3"> 
              <button 
               className=" py-2 px-4 ">Enroll Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
