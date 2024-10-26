import React from 'react'
import Card from '../Card'
import { FaRegCircle } from "react-icons/fa6";
import Button from '../Button';
import placement from "./placement.pdf";
import { Link } from 'react-router-dom';

const Features = () => {
  const data = [{
    img: <i class="fa-solid fa-clock"></i>,
    heading: 'Flexible Time',
    description: 'Learn at your own pace with flexible scheduling'
  },
  {
    img: <i class="fa-solid fa-user-graduate"></i>,
    heading: 'Certificate',
    description: 'Earn a certificate upon completion of your course'
  },
  {
    img: <i class="fa-solid fa-house"></i>,
    heading: 'Practical Class',
    description: 'Gain practical skills with hands-on learning.'
  },
  {
    img: <i class="fa-solid fa-globe"></i>,
    heading: 'Global access',
    description: 'Access courses from anywhere in the world.'
  },
  {
    img: <i class="fa-solid fa-video"></i>,
    heading: 'Video Course',
    description: 'Discover tailored video courses for you.'
  },
  {
    img: <i class="fa-solid fa-book-open"></i>,
    heading: 'Test series',
    description: 'Unlock personalized test series for you.'
  },
  {
    img: <i class="fa-solid fa-newspaper"></i>,
    heading: 'Current Affairs',
    description: 'AStay updated with curated current affairs.'
  },
  {
    img: <i class="fa-solid fa-book"></i>,
    heading: 'Books and E-books',
    description: 'Explore our library of books and ebooks.'
  }
  ]
  return (
    <div className='  '>
      <div className='flex flex-col px-[20%]'>
        {/* <p className=' text-black font-bold text-3xl p-3'>What we provide</p> */}
        <div>
          <h1 className="font-bold text-2xl mt-1 gradiant-text md:text-6xl md:w-[600px] ">What we provide</h1>
        </div>
        <h1 className='text-black text-2xl'>The amazing features we offer our students</h1>
        <div className='flex gap-10 justify-between px-[3%] mt-8 flex-wrap'>
          {
            data.map((element, index) => (
              <Card element={element} key={index} />
            ))
          }
        </div>

      </div>




      <div className=" m-5 py-12 mb-0 border-2 shadow-md shadow-slate-600 bg-zinc-100">
        <div className=" px-3">

          {/* <div>
            <h1 className=' text-3xl font-bold'>Pay After Placement</h1>
            <h2 className="mt-4 text-2xl font-bold   text-gray-900 ">How it works?</h2>
            <div className=" flex flex-col flex-wrap md:flex-nowrap  gap-3 items-start  text-left mx-auto text-lg px-4 text-gray-700">
              <div className=' flex flex-col md:flex-row gap-3'>
              <div className=' flex border-2 bg-white md:flex-row flex-col rounded-md shadow-md shadow-slate-500 px-3 py-3 justify-evenly'>
                <div>
                <span className='text-black font-bold'>Participate in the Programme: </span> <br/>Applying to our extensive career training programme is the first step. Our courses are created by professionals in the field and are specifically adapted to the needs of the modern workforce.
                </div>
                <div>
                  <img src="https://qph.cf2.quoracdn.net/main-qimg-bb1ec31d8ce32a03376aa0f3ea42442e" alt="img1" className=' h-[200px] rounded-md w-[995px]' />
                </div>

              </div>

              <div className=' flex bg-white justify-evenly md:flex-row flex-col rounded-md shadow-md shadow-slate-500 border-2 px-3 py-3'>
                <div><span className='text-black font-bold'>Career Services Support:</span> <br/>Take advantage of specialised job placement services, resume workshops, career coaching, and interview preparation. Our committed staff works nonstop to put you in touch with prestigious employers.</div>
                <div><img src="https://www.w3webschool.com/blog/wp-content/uploads/2023/12/100-Job-Guarantee-Courses-2024.jpg" alt="img1" className=' h-[200px] rounded-md w-[750px]' /></div>
              </div>
              </div>
              
              <div className=' flex flex-col md:flex-row   gap-3'>
              <div className='flex bg-white justify-evenly md:flex-row flex-col rounded-md shadow-md shadow-slate-500 border-2 px-3 py-3'>
                <div><span className='text-black font-bold'>Learn and Grow:</span> <br/>Encounter our comprehensive programme, which combines practical assignments, guidance, and real-world situations. In order to succeed in your chosen field, develop the technical and soft abilities necessary.</div>
                <div><img src="https://img-c.udemycdn.com/course/750x422/4349590_ac17_6.jpg" alt="img1" className=' h-[200px] rounded-md w-[980px]' /></div>
              </div>
              <div className='flex bg-white justify-evenly md:flex-row flex-col rounded-md shadow-md shadow-slate-500 border-2 px-3 py-3'>
                <div><span className='text-black font-bold'>Secure Your Dream Job:</span><br/> Once you complete the program and land a job, you will start making payments based on a percentage of your salary. This ensures that you only pay once you have the means to do so.</div>
                <div><img src="https://studyhub.org.uk/wp-content/uploads/2023/10/business-man-owner-company-office-min-1024x683.jpg" alt="img1" className=' h-auto rounded-md w-full' /></div>
              </div>
              </div>
              
            </div>
          </div> */}

          <div className="mt-5  py-3 px-3 ">
            <div className="space-y-10">
              {/* <div className="pay-section flex flex-col py-4 md:h-40">
                <h1 className="text-lg lg:text-2xl text-gray-900  font-bold mb-4 lg:mb-0">Who Can Apply?</h1>
                <p className=" text-base text-center md:text-left px-5 py-2 text-gray-700 lg:text-lg font-normal">
                  The Pay After Placement Program is ideal for motivated individuals who are ready to take charge of their careers. Whether you are a recent graduate, a career changer, or someone looking to upskill, our program is tailored to help you achieve your professional goals.
                </p>
              </div> */}

              <div className="flex items-center border-2 bg-white py-4 px-3 shadow-lg shadow-slate-700">
                <div className="ml-4">
                  <h3 className="lg:text-2xl text-lg leading-6 font-bold text-gray-900">Get Started Today</h3>
                  <p className="mt-2 text-center text-base md:text-xl font-normal text-gray-700">
                    Ready to take the first step towards a brighter future? Apply now and join the ranks of successful professionals who have benefited from our Pay After Placement Program. Your dream job is within reach, and we are here to help you achieve it.
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
  <button className="w-48 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md">
    <Link to='https://chat.whatsapp.com/JRMZnwaXsLUFOJylXdOgJ3' target='_blank'>Enroll Now</Link>
  </button>

  <button className="w-48 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md">
    <a href={placement} target='_blank'>View Brochure</a>
  </button>
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      

    </div>
  )
}

export default Features
