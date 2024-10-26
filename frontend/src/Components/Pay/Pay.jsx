// import React from "react";
// import Works from "./works";
// import CourseFees from "./CoursesFee";
// import DropOutClauses from "./Dropout";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// // import placement from "./Courses/placement";
// import FAQForPAP from './FaqForPAP';

// function Pay() {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top of the page on component load
//   }, []); 
//   return (
//     <>
//     <div className="relative min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
//       <h1 className="text-3xl lg:text-4xl text-center font-semibold animate-zoomIn py-8">
//         Pay After Placement
//       </h1>

//       <div className="pay-container flex flex-col lg:flex-row p-4 gap-8 lg:gap-16 animate-fadeIn justify-center">
//         <div className="pay-content flex flex-col gap-8 lg:w-2/3 mx-auto">
//           <div className="pay-card bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300 animate-fadeInLeft">
//             <h1 className="text-xl font-bold mb-4 animate-bounceInLeft">
//               Transform Your Career with Confidence
//             </h1>
//             <div className="flex flex-col lg:flex-row gap-4">
//               <div className="flex-1">
//                 <p className="text-lg lg:text-xl font-light animate-fadeInUp delay-1s">
//                   Are you ready to take the next step in your career without the financial risk? Our Pay After Placement (PAP) Program is designed to empower you with the skills and opportunities you need to succeed, with a payment structure that works for you.
//                 </p>
//               </div>
//               <div className="flex-1">
//                 <img 
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5n7TxHYPT0TSbNKYyBkW_M9yjYP5tlHsk5w&s" 
//                   alt="Career Transformation" 
//                   className="rounded-lg shadow-lg animate-fadeInUp delay-1s"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="pay-card bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300 animate-fadeInRight">
//             <h1 className="text-xl font-bold mb-4 animate-bounceInRight">
//               What is the Pay After Placement Program?
//             </h1>
//             <div className="flex flex-col lg:flex-row gap-4">
//               <div className="flex-1">
//                 <p className="text-lg lg:text-xl font-light animate-fadeInUp delay-1s">
//                   Our Pay After Placement Program is a unique offering that allows you to focus on your education and career development without the burden of upfront tuition fees. Instead, you pay for the program only after you secure a job. This ensures that you can fully commit to your studies and job search, knowing that we are invested in your success.
//                 </p>
//               </div>
//               <div className="flex-1">
//                 <img 
//                   src="/pay.jpg" 
//                   alt="Pay After Placement" 
//                   className="rounded-lg shadow-lg animate-fadeInUp delay-1s"
//                 />
//               </div>
//             </div>
//           </div>

//           <Works />
//           {/* <CourseFees />
//           <DropOutClauses /> */}
//         </div>
//       </div>
//       <FAQForPAP/>

//     </div>
//    </>
//   );
// }

// export default Pay;
















import React from "react";
import Works from "./works";
import CourseFees from "./CoursesFee";
import DropOutClauses from "./Dropout";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import placement from "./Courses/placement";
// import FAQForPAP from './FaqForPAP';

function Pay() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component load
  }, []); 
  return (
    <>
    
<div className="relative min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
      <h1 className="text-3xl lg:text-4xl text-center font-semibold animate-zoomIn py-8">
        Pay After Placement
      </h1>

      <div className="pay-container flex flex-col lg:flex-row p-4 gap-8 lg:gap-16 animate-fadeIn justify-center">
        <div className="pay-content flex flex-col gap-8 lg:w-2/3 mx-auto">
          <div className="pay-card bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300 animate-fadeInLeft">
            <h1 className="text-xl font-bold mb-4 animate-bounceInLeft">
              Transform Your Career with Confidence
            </h1>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <p className="text-lg lg:text-xl font-light animate-fadeInUp delay-1s">
                  Are you ready to take the next step in your career without the financial risk? Our Pay After Placement (PAP) Program is designed to empower you with the skills and opportunities you need to succeed, with a payment structure that works for you.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5n7TxHYPT0TSbNKYyBkW_M9yjYP5tlHsk5w&s" 
                  alt="Career Transformation" 
                  className="rounded-lg shadow-lg animate-fadeInUp delay-1s"
                />
              </div>
            </div>
          </div>

          <div className="pay-card bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300 animate-fadeInRight">
            <h1 className="text-xl font-bold mb-4 animate-bounceInRight">
              What is the Pay After Placement Program?
            </h1>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <p className="text-lg lg:text-xl font-light animate-fadeInUp delay-1s">
                  Our Pay After Placement Program is a unique offering that allows you to focus on your education and career development without the burden of upfront tuition fees. Instead, you pay for the program only after you secure a job. This ensures that you can fully commit to your studies and job search, knowing that we are invested in your success.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="/pay.jpg" 
                  alt="Pay After Placement" 
                  className="rounded-lg shadow-lg animate-fadeInUp delay-1s"
                />
              </div>
            </div>
          </div>

          <Works />
          {/* <CourseFees />
          <DropOutClauses /> */}
        </div>
      </div>
      {/* <FAQForPAP/> */}
    </div>
   </>
  );
}

export default Pay;