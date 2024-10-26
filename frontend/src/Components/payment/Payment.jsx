// import React from 'react';
// import { useParams,Link } from 'react-router-dom';
// import QR from './QRCode.jpg'

// const PaymentForm = () => {
//   const { id } = useParams();
//   const courses = [
//     { id: 1, title: "Java Development", price: 5000 },
//     { id: 2, title: "Python Programming", price: 5000 },
//     { id: 3, title: "Web Development", price: 37500 },
//     { id: 4, title: "JavaScript Programming", price: 5000 },
//     { id: 5, title: "Angular Development", price: 5000 },
//     { id: 6, title: "Wix Web Developer", price: 5000 },
//     { id: 7, title: "Data Structures", price: 5000 },
//     { id: 8, title: "WordPress Development", price: 5000 },
//     { id: 9, title: "Android App Development", price: 5000 },
//     { id: 10, title: "Spring Boot Development", price: 5000 },
//     { id: 11, title: "C & C++ Development", price: 5000 },
//     { id: 12, title: "Big Data", price: 5000 },
//     { id: 13, title: "Software Testing", price: 5000 },
//     { id: 14, title: "Data Science and Machine Learning", price: 5000 },
//     { id: 15, title: "Blockchain", price: 5000 },
//     { id: 16, title: "Technical Program Management", price: 5000 },
//     { id: 17, title: "React Development", price: 5000 },
//     { id: 18, title: "Artificial Intelligence", price: 5000 },
//     { id: 19, title: "Cloud Computing", price: 5000 },
//     { id: 20, title: "DevOps", price: 5000 },
//     { id: 21, title: "Full Stack Development", price: 5000 },
//   ];

//   const courseId = parseInt(id, 10); // Convert id to integer with base 10

//   const course = courses.find((course) => course.id === courseId);

//   if (!course) {
//     return <div>Course not found</div>;
//   }

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-md">
//       <div className="bg-white p-6 rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Make a payment to Buy Course</h2>
//         <div className="mb-4">
//           <span className="font-semibold">Course Title:</span>
//           <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
//           <span className="font-semibold">Amount to Pay:</span>
//           <span className="ml-2 text-black">{course.price}</span>
//         </div>
//        <a href={QR}>
//        <button 
//         className="w-full bg-red-600 text-white py-3 rounded-md font-semibold">
//           Pay Now
//         </button>
//        </a>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QR from './QRCode.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [course,SetCourse] =useState([])
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  // const courses = [
  //   { id: 1, title: "Java Development", price: 5000 },
  //   { id: 2, title: "Python Programming", price: 5000 },
  //   { id: 3, title: "Placement Course", price: 37500 },
  //   { id: 4, title: "JavaScript Programming", price: 5000 },
  //   { id: 5, title: "Angular Development", price: 5000 },
  //   { id: 6, title: "Wix Web Developer", price: 5000 },
  //   { id: 7, title: "Data Structures", price: 5000 },
  //   { id: 8, title: "WordPress Development", price: 5000 },
  //   { id: 9, title: "Android App Development", price: 5000 },
  //   { id: 10, title: "Spring Boot Development", price: 5000 },
  //   { id: 11, title: "C & C++ Development", price: 5000 },
  //   { id: 12, title: "Big Data", price: 5000 },
  //   { id: 13, title: "Software Testing", price: 5000 },
  //   { id: 14, title: "Data Science and Machine Learning", price: 5000 },
  //   { id: 15, title: "Blockchain", price: 5000 },
  //   { id: 16, title: "Technical Program Management", price: 5000 },
  //   { id: 17, title: "React Development", price: 5000 },
  //   { id: 18, title: "Artificial Intelligence", price: 5000 },
  //   { id: 19, title: "Cloud Computing", price: 5000 },
  //   { id: 20, title: "DevOps", price: 5000 },
  //   { id: 21, title: "Full Stack Development", price: 5000 },
  // ];

   const token = localStorage.getItem('token')

  useEffect(()=>{
    axios.get(`https://ten-official-1.onrender.com/api/users/coursedetails/${id}`)
    .then((res)=>SetCourse(res.data.courseDetails))
    .catch((Err)=>console.log(Err))
  },[id])
  // const courseId = parseInt(id, 10); 

  // const course = courses.find((course) => course.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }
  
  const handlePayNowClick = () => {
    if(token) setIsPopupOpen(true);
    else navigate('/Login')
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className=" p-6 rounded-lg shadow-md flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg md:h-[50vh] md:w-[30vw] border-2 flex flex-col justify-between items-right">
        <h2 className="text-lg font-semibold mb-4">Make a payment to Buy Course</h2>
        <div className="mb-4">
          <span className="font-semibold text-2xl">Course Title:</span>
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <span className="font-semibold">Amount to Pay:</span>
          <span className="ml-2 text-red-500 text-2xl font-medium ">{course.price} Rs</span>
        </div>
        <button
          onClick={handlePayNowClick}
          className="w-full bg-red-600 text-white py-3 rounded-md font-semibold"
        >
          Pay Now
        </button>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <button
              onClick={closePopup}
              className="absolute top-0 right-0 m-2 text-gray-700 font-bold"
            >
              &times;
            </button>
            <img src={QR} alt="QR Code" className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
