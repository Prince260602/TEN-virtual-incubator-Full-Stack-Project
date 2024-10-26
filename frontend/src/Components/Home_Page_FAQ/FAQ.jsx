import React, { useState } from "react";
import "./FAQ.css";

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
    question: " What is a virtual incubator?",
    answer:
      "A virtual incubator is an online platform that provides startups and early-stage businesses with resources, mentorship, and tools to grow their business. Unlike traditional incubators, these services are delivered entirely online, making it more accessible to entrepreneurs regardless of their geographical location.",
  },
  {
    question: "How does a virtual incubator work?   ",
    answer:
      "A virtual incubator operates by offering digital access to expert guidance, workshops, training programs, funding opportunities, and sometimes even virtual co-working spaces. Startups can join these programs and interact with mentors, investors, and peers via video calls, webinars, or online forums.",
  },
  {
    question: "What are the key benefits of a virtual incubator?",
    answer:

      <ul>
        <li> "Accessibility: Entrepreneurs can participate from anywhere, making it ideal for those in remote areas."</li>
        <li> "Flexibility: Programs can often be tailored to the needs of individual startups, and entrepreneurs can work at their own pace."</li>
        <li> "Lower Costs: Without the need for physical office space or travel, virtual incubators tend to be more cost-effective for startups."</li>
        <li> "Global Network: Startups can connect with mentors, investors, and peers from around the world."</li>
      </ul>
  },
  {
    question: " What types of startups can benefit from a virtual incubator?",
    answer:
      "Virtual incubators are ideal for tech startups, digital businesses, or any company that doesn’t rely on physical operations. However, startups from various sectors can benefit, as they offer a wide range of business development resources.",
  },
  {
    question: "How do virtual incubators differ from traditional incubators?",
    answer:
      "The key difference is the mode of delivery. Traditional incubators usually require participants to be physically present in a shared workspace, whereas virtual incubators provide all services remotely. This difference allows for greater flexibility and participation by entrepreneurs who may not be able to relocate.",
  },
  {
    question: " What services do virtual incubators typically provide?",
    answer:
      <ul>
        <li> "Mentorship and coaching"</li>
        <li>"Access to funding and investment networks"</li>
        <li>"Workshops and training programs"</li>
        <li>"Business development resources (marketing, legal, finance)"</li>
        <li>"Networking opportunities"</li>
        <li>"Online collaboration tools"</li>
      </ul>
  },
  {
    question: "What challenges might a startup face in a virtual incubator?",
    answer:
      <ul>
        <li>"Lack of physical networking: While virtual incubators offer many online networking opportunities, some entrepreneurs may miss the in-person interactions that come with traditional incubators."</li>
        <li> "Time zone issues: Depending on the incubator’s location and participants’ schedules, coordinating meetings across time zones may be challenging."</li>
        <li> "Limited hands-on support: The virtual format can make it difficult to receive immediate, hands-on guidance that some startups may benefit from."</li>
      </ul>
  },
  {
    question: " How do virtual incubators help startups secure funding?",
    answer:
      "Virtual incubators often have partnerships with venture capital firms, angel investors, or crowdfunding platforms. They may help startups prepare for investment by refining their business models, creating investor pitches, and connecting them with potential funders through virtual events."
  },
  {
    question: " How long do startups typically stay in a virtual incubator program?",
    answer:
      "The duration varies depending on the incubator. Some programs last a few months, while others can be more long-term, lasting up to a year or more. The time frame is often designed to guide startups through the early stages of development and growth.",
  },
  {
    question: "What is the application process like for a virtual incubator?",
    answer:
      "Most virtual incubators have an online application process where startups submit details about their business, including their idea, team, progress, and goals. After the application, there might be an interview or evaluation to determine if the startup is a good fit for the program.",
  },
  {
    question: " What are the key challenges of participating in a virtual incubator? ",
    answer:
      "One key challenge is the lack of face-to-face interaction, which can sometimes limit networking opportunities and personal connections. Additionally, participants must be self-motivated and disciplined to take full advantage of the virtual support offered, as there is less direct oversight than in a physical setting.",
  },

];

export default FAQ;