import React, { useState } from "react";
import "./Course_FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fourthpart bg-black text-white w-full my-1 ">
      <p className="p1">Frequently Asked Questions</p>
      <div className="layout ">
        {faqData.map((faq, index) => (
          <div
            className={`accordion ${activeIndex === index ? "active" : ""} bg-black text-white`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion__question bg-black text-white">
              <p>{faq.question}</p>
            </div>
            <div className="accordion__answer text-white">
              <p className=" text-white">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const faqData = [
    {
        "question": "What types of courses do you offer?",
        "answer": "We offer a wide range of technology-focused courses, including web development, data science, artificial intelligence, digital marketing, and more. Our courses are designed to equip learners with the practical skills needed to excel in today’s fast-evolving job market."
      },
      {
        "question": "How are the courses structured?",
        "answer": "Our courses are structured to be both flexible and comprehensive. They include video tutorials, hands-on projects, quizzes, and mentorship. This blended approach ensures students gain a deep understanding of the subject matter while also getting practical, real-world experience."
      },
      {
        "question": "Are the courses beginner-friendly?",
        "answer": "Yes, we offer beginner-friendly courses that do not require prior knowledge. We also offer more advanced courses for those looking to deepen their expertise. Each course includes clear learning paths and prerequisites to ensure you're in the right place."
      },
      {
        "question": "What is the duration of the courses?",
        "answer": "Course durations vary depending on the topic. Shorter courses can take a few weeks to complete, while more comprehensive programs, such as full-stack development or data science, can take several months. You can learn at your own pace as all courses are self-paced."
      },
      {
        "question": "Do you provide certificates upon course completion?",
        "answer": "Yes, we provide industry-recognized certificates upon successfully completing each course. These certificates can be added to your LinkedIn profile or resume to showcase your skills to potential employers."
      },
      {
        "question": "Do you offer any job placement assistance?",
        "answer": "Yes, we offer job placement assistance as part of select courses. We have partnerships with various tech companies and help students prepare for interviews, build resumes, and connect with potential employers."
      },
      {
        "question": "What kind of support is available during the course?",
        "answer": "We offer a range of support options, including one-on-one mentorship, peer-to-peer interaction, live webinars, and 24/7 access to course materials. Our instructors and mentors are available to guide you throughout the learning process."
      },
      {
        "question": "Are the courses updated regularly?",
        "answer": "Yes, our courses are regularly updated to reflect the latest trends and technologies in the industry. We ensure that the content stays relevant so that you are always learning cutting-edge skills."
      },
  {
    question: "How to get funding by TEN?",
    answer:
      "We give chance to our top students to get funded by us. The funding amount can go upto 20Lakh",
  },
  {
    question: "Is it worth to pursue a course with TEN?",
    answer:
      "Yes, pursuing a course with The Entrepreneurship Network can be beneficial for your e-learning platform. Through their programs, you'll gain valuable insights into creating a compelling business plan and accessing funding opportunities. Engaging with mentors and participating in pitch competitions can significantly enhance your chances of securing financial support and accelerating your platform's growth. However, success ultimately depends on your commitment and ability to leverage the resources",
  },
  
];

export default FAQ;