import React, { useState } from "react";
import "./CFAQ.css";

const CFAQ = () => {
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
    question: "What is pay after placement?",
    answer:
      "Pay After Placement is a payment model where students cover tuition fees after securing a job. Instead of upfront payments, students agree to pay a portion of their salary or a fixed amount post-employment. This approach aims to alleviate financial barriers to education and aligns tuition costs with students' career success. However, it's essential for students to understand and agree to the terms of repayment",
  },
  {
    question: " How does pay after placement work?   ",
    answer:
      "In pay after placement, the recruitment agency or headhunter identifies and presents suitable candidates to the employer. The employer conducts interviews and selects a candidate. The recruitment fee is paid only after the candidate is successfully hired and starts working.",
  },
  {
    question: "What are the benefits of pay after placement for employers?",
    answer:
      "Pay after placement offers several benefits for employers, including reduced financial risk since fees are only paid upon successful hiring, access to a wider pool of candidates through recruitment agencies, and increased flexibility in budgeting for recruitment expenses",
  },
  {
    question: "Are there any risks associated with pay after placement?",
    answer:
      "While pay after placement can reduce financial risks for employers, there are some potential drawbacks, such as higher fees compared to upfront payment models and the possibility of disputes over the quality of candidates presented.",
  },
  {
    question: "How are fees calculated in pay after placement?",
    answer:
      "Fees for pay after placement services are typically calculated as a percentage of the hired candidate's first-year salary. The exact percentage may vary depending on factors such as the level of the position and the industry.",
  },
  {
    question: "What happens if the hired candidate leaves shortly after placement?",
    answer:
      "In some cases, recruitment agencies may offer guarantees or replacements for candidates who leave shortly after placement. The terms of these guarantees vary between agencies and should be clarified before engaging their services.",
  },
  {
    question: " Is pay after placement legal and ethical?",
    answer:
      "Pay after placement is a legal and widely accepted hiring model, provided that all parties involved adhere to applicable labor laws and ethical recruitment practices. It's essential for employers to work with reputable agencies that prioritize candidate welfare and compliance with regulations.",
  },
  {
    question: "Do you get people placed?",
    answer:
      `on our e-learning platform reflects interest in our job placement assistance. We offer comprehensive support to help learners secure relevant positions post-completion. While we cannot guarantee placement, we equip individuals with skills and resources to enhance their employability. Success in finding employment depends on various factors, including market demand and individual efforts.`
  },
  {
    question: "Is pay after placement suitable for all types of hiring needs?",
    answer:
      "Pay after placement may be more suitable for certain hiring needs, such as filling specialized or senior-level positions where finding the right candidate can be challenging. For high-volume hiring or entry-level positions, other recruitment models may be more appropriate.",
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

export default CFAQ;