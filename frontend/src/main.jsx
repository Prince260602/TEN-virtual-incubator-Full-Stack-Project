

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Login from "./Components/login/login.jsx";
import Home from "./Home";
import ApplicationForm from "./Components/ApplicationForm/ApplicationForm.jsx";
import Layout from "./Layout.jsx";
import "./index.css";
import Contact from "./Components/Contact-us/Contact.jsx";
import Pay from "./Components/Pay/Pay.jsx";
import Our_Work from "./Components/Our_Works/Our_Work.jsx";
// import JobPortal from "./Components/HiringPage/JobPortal.jsx";
import { Toaster } from "react-hot-toast";
import App_Testimonial from "./Components/Testimonial/App_Testimonial.jsx";
import Section from "./Components/HRMS/Section.jsx";
import Section_Idea from "./Components/TEN_Idea/Section_Idea.jsx";
import Section_AI from "./Components/TEN-AI_labs/Section_AI.jsx";
import Section_Accelerator from "./Components/TEN_Accelerator/Section_Accelerator.jsx";
import AboutUs from "./Components/About-Us/AboutUs.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import Sign_up from "./Components/Sign-Up/Sign_up.jsx";
import Courses_page from "./Components/Home_page/Courses/Courses_page.jsx";
import CoursesDetails from "./Components/Home_page/Courses/Course_Detail.jsx";
import Payment from "./Components/payment/Payment.jsx";
import { ContextProvider } from "./Context.jsx";
import AdminDashboard from "./Components/Admin/AdminDashboard.jsx";
import Students from "./Components/Admin/Students.jsx";
import Revenue from './Components/Admin/Revenue.jsx';
import Layout2 from './Layout2.jsx';
import Privacy_policy from './Components/Privacy - Policy/Privacy _policy.jsx';
import Terms_Condition from './Components/Privacy - Policy/Terms_Condition.jsx';
import Profile from "./Components/Student/ProfilePage.jsx";
import LayersPage from "./Components/Our_Layers/Layers.jsx";
import InvestorsPage from "./Components/InvestorPage/Investor.jsx";
import Aggrement from './Components/Aggrement/Aggrement.jsx';
import LeadershipPrinciplesFooter from "./Components/LeadershipPrinciplesFooter/LeadershipPrinciplesFooter.jsx";
import Section_mentor from "./Components/Ten_mentor/Section_mentor.jsx";
import Section_Resume from "./Components/Resume_Building/Section_Resume.jsx";
import Section_Influencer from "./Components/Influencer_Marketing/Section_Influencer.jsx";
import Section_Consulting from "./Components/Ten_ai_consulting_labs/Section_Consulting.jsx";
import FirstPart from "./Components/Home_page/FirstPart"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {path: "/ApplicationForm", element:<ApplicationForm/>},
      { path: "/About-us", element: <AboutUs /> },
      { path: "/Our_layer", element: <Our_Work /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/Interview", element: <Pay /> },
      // { path: "/Hiring", element: <JobPortal /> },
      { path: "/Testimonial", element: <App_Testimonial /> },
      { path: "/HRMS", element: <Section /> },
      { path: "/AI-Labs", element: <Section_AI /> },
      { path: "/Idea-Engine", element: <Section_Idea /> },
      { path: "/Accelerator", element: <Section_Accelerator /> },
      { path: "/Login", element: <LoginPage /> },
      { path: "/Sign_Up", element: <Sign_up /> },
      { path: "/Courses", element: <Courses_page /> },
      { path: "/FirstPart", element: <FirstPart/>},
      { path: "/Courses/:id", element: <CoursesDetails /> },
      { path: "/payment/:id", element: <Payment /> }, 
      { path: "/terms", element: <Terms_Condition/> },
      { path: "/p&p", element: <Privacy_policy/> },
      { path: "/profile/:id", element: <Profile/> },
      { path: "/Layers", element: <LayersPage/> },
      { path: "/investor", element: <InvestorsPage/> },
      { path: "/aggrement", element: <Aggrement/> },
      { path: "/LeadershipPrinciplesFooter", element: <LeadershipPrinciplesFooter/>},
      { path: "/Ten_mentor", element: <Section_mentor /> },
      { path: "/Resume_Building", element: <Section_Resume /> },
      { path: "/Influencer_Marketing", element: <Section_Influencer /> },
      { path: "/Ten_ai_consulting_labs", element: <Section_Consulting /> },
      
    ],
  },
  {
    // path: "/",
    element: <Layout2 />,
    children: [
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/students", element: <Students /> },
      { path: "/revenue", element: <Revenue /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ContextProvider>
  </React.StrictMode>
);
