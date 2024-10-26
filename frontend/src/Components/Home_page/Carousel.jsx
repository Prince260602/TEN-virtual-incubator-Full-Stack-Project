import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import project1 from "./images/projectOneImage.png";
import project2 from "./images/ProjectTwoImage.png";
import project3 from "./images/ProjectThreeImage.png";
import project4 from "./images/ProjectFourImage.png";
import project5 from "./images/ProjectFiveImage.png";
import project6 from "./images/ProjectSixImage.png";
import project7 from "./images/ProjectSevenImage.png";
import project8 from "./images/ProjectEightImage.png";

SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

const projects = [
  {
    id: 1,
    title: "Idea Engine",
    description:
      "Idea Engine is an innovative platform designed to help aspiring entrepreneurs and business enthusiasts turn their ideas into actionable business plans. By guiding users through a series of structured questions, the platform helps in formulating a comprehensive business plan that is tailored to their specific vision and goals.",
    image: project1,
    link: "https://ideaengine.entrepreneurshipnetwork.net/",
  },
  {
    id: 2,
    title: "Ten Jobs",
    description:
      "At TEN Jobs, our mission is to revolutionize the way students prepare for their careers. We're dedicated to offering a comprehensive platform that equips students with not just theoretical knowledge, but also practical skills and real-world exposure.",
    image: project2,
    link: "https://jobs.entrepreneurshipnetwork.net/",
  },
  {
    id: 3,
    title: "Ten Mentors",
    description:
      "Ten Mentor is an innovative platform designed to connect students with experienced mentors who can help enhance their knowledge and skills. Whether students need assistance with academic subjects, professional development, or personal growth, Ten Mentor provides a seamless way to book one-on-one sessions with experts in various fields.",
    image: project3,
    link: "https://mentor.entrepreneurshipnetwork.net/ ",
  },
  {
    id: 4,
    title: "Ten Resume Builder",
    description:
      "Create a standout resume with our intuitive builder! Choose from sleek templates, customize effortlessly, and impress employers. Elevate your job search and land your dream job today!",
    image: project4,
    link: "https://resume.entrepreneurshipnetwork.net/ ",
  },
  {
    id: 5,
    title: "Ten Influencer Marketing",
    description:
      "We have helped over 500 Brands across 30 different niches to streamline and scale their influencer marketing",
    image: project5,
    link: "https://marketing.entrepreneurshipnetwork.net/ ",
  },
  {
    id: 6,
    title: "Ten AI Consulting Labs",
    description:
      "Transforming businesses with next Ten AI Consulting that are Available, Affordable, and Accessible to all",
    image: project6,
    link: "https://ten-ai-consulting-labs.vercel.app",
  },
  {
    id: 7,
    title: "Ten Internal HRMS",
    description:
      "Internal HRMS is a tailored software solution designed for streamlined internal human resource management. It efficiently centralizes employee data, automates payroll processes, and enhances communication through user-friendly interfaces. This system optimizes internal operations, ensures data accuracy, and empowers HR professionals for effective workforce management within the organization. it promotes employee engagement and facilitates informed decision-making.",
    image: project7,
    link: "https://hrportal.entrepreneurshipnetwork.net",
  },
  {
    id: 8,
    title: "Ten AI Labs",
    description:
      "Dive into the cutting-edge world of artificial intelligence with our curated selection of ten innovative ai labs. from pioneering research to groundbreaking applications, embark on a transformative exploration of ai's limitless possibilities.",
    image: project8,
    link: "https://ailabs.entrepreneurshipnetwork.net",
  },
];

const Carousel = () => {
  return (<>

  <h1 className="font-bold text-5xl mt-5 mb-7">Our Tools</h1>
    <div className="mx-auto mt-4 mb-10 w-full max-w-3xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          // disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-100 shadow-lg p-4 rounded-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={`Image of ${project.title}`}
                  className="mb-4 rounded-lg w-full h-64 object-cover"
                />
                <h2 className="font-bold text-xl">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div></>
  );
};

export default Carousel;
