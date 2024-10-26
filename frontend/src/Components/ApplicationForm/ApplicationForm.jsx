import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    startupName: '',
    startupWebsite: '',
    startupLogo: '', 
    yearFounded: '',
    yearIncorporation: '',
    currentLocation: '',
    nearestHub: '',
    companyProfile: '',
    founderName: '',
    founderEmail: '',
    contactNumber: '',
    gender: '',
    linkedin: '',
    profile: '',
    coFounder1: { name: '', email: '', contactNumber: '', linkedin: '', briefProfile: '' },
    coFounder2: { name: '', email: '', contactNumber: '', linkedin: '', briefProfile: '' },
    coFounder3: { name: '', email: '', contactNumber: '', linkedin: '', briefProfile: '' },
    dpiit: '',
    startup: '',
    hearAbout: '',
    agreeToTerms: false,
  });

  const [result, setResult] = useState("");

  const handleChange = (e, coFounderIndex = null, field = null) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]); 
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result, 
        }));
      };
    } else if (coFounderIndex && field) {
      
      setFormData((prevData) => ({
        ...prevData,
        [`coFounder${coFounderIndex}`]: {
          ...prevData[`coFounder${coFounderIndex}`],
          [field]: value,
        },
      }));
    } else {
    
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    const submissionData = new FormData();

    
    for (const key in formData) {
      if (typeof formData[key] === 'object' && formData[key] !== null) {
      
        for (const subKey in formData[key]) {
          submissionData.append(`${key}[${subKey}]`, formData[key][subKey]);
        }
      } else {
        submissionData.append(key, formData[key]);
      }
    }

 
    submissionData.append("access_key", "7bec698f-2a32-4864-8391-8b7985e04256");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        
        e.target.reset();
        setFormData({
          startupName: '',
          startupWebsite: '',
          startupLogo: '',
          yearFounded: '',
          yearIncorporation: '',
          currentLocation: '',
          nearestHub: '',
          companyProfile: '',
          founderName: '',
          founderEmail: '',
          contactNumber: '',
          gender: '',
          linkedin: '',
          profile: '',
          coFounder1: { name: '', email: '', contactNumber: '', linkedin: '', briefProfile: '' },
          coFounder2: { name: '', email: '', contactNumber: '', linkedin: '', briefProfile: '' },
          coFounder3: { name: '', email: '', contactNumber: '', linkedin: '', briefProfile: '' },
          dpiit: '',
          startup: '',
          hearAbout: '',
          agreeToTerms: false,
        });
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Submission failed. Please try again.");
    }
  };

  
  return ( 
    <div className="flex flex-col items-center">
      <div className="bg-gray-200  text-gray-800 rounded-lg p-20 text-center shadow-lg mb-6 max-w-4xl">
        <h1 className="text-xl font-semibold mb-4">
          Application Form for TEN Startups Incubation Programs - Virtual and Tech
        </h1>
        {/* 
        <div className="flex justify-center space-x-4 text-red-600 mb-6">
          <a className="text-2xl" href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a className="text-2xl" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="text-2xl" href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="text-2xl" href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="text-2xl" href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a className="text-2xl" href="#">
            <i className="fas fa-globe"></i>
          </a>
          <a className="text-2xl" href="#">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
         */}
     
  
    
          <p className="text-sm mb-4">
          TEN's incubation programs are designed to support startups seeking growth and connections
          </p>
          <p className="text-sm mb-4">
          The virtual incubation program offers startups a platform to scale by providing digital opportunities and industry connections. Our programs deliver market access, investor networks, access to government initiatives, a startup toolkit, and personalized mentoring—both one-on-one and group sessions with industry experts. Additional scaling resources include webinars, meetups, CXO roundtables, workshops and more.
          </p>

          <p className="text-sm mb-4 font-bold">
            Note: Only startups with a minimum viable technology product (not services) are eligible to apply for the programs. It is strongly suggested that the product be beyond its ideation phase.
          </p>
          <p className="text-sm font-bold mb-2">Eligibility</p>
          <p className="text-sm">
            Only startups with a minimum viable technology product (not services) are eligible to apply for the programs. It is strongly suggested that the product be beyond its ideation phase.
          </p>
      
      </div>
      



      <div className="flex flex-col items-center min-h-screen ">
        <div className="bg-gray-200 rounded-lg p-12 shadow-lg max-w-4xl">
          <h2 className="text-sm mb-4">Company Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm mt-2 text-gray-700 mb-1" htmlFor="startup-name">
                <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">1</span>
                Startup Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="startup-name"
                name="startupName"
                className="w-full border border-gray-300 rounded-md p-2"
                value={formData.startupName}
                onChange={handleChange}
                required
              />
              <p className="text-right text-xs text-gray-500">500 character(s) remaining</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm mt-2 text-gray-700 mb-1" htmlFor="startup-website">
                <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">2</span>
                Startup Website <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="startup-website"
                name="startupWebsite"
                className="w-full border border-gray-300 rounded-md p-2"
                value={formData.startupWebsite}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
            <label className="block text-sm mt-2 text-gray-700 mb-1" htmlFor="startup-logo">
              <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">3</span>
              Startup Logo <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="startup-logo"
              name="startupLogo"
              className=""
              onChange={handleChange}
              required
            />
          </div>


            <div className="mb-4">
              <label className="block text-sm mt-2 text-gray-700 mb-1" htmlFor="year-founded">
                <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">4</span>
                Year Founded <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="year-founded"
                name="yearFounded"
                className="w-full border border-gray-300 rounded-md p-2"
                value={formData.yearFounded}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mt-2 text-gray-700 mb-1" htmlFor="year-incorporation">
                <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">5</span>
                Year of Incorporation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="year-incorporation"
                name="yearIncorporation"
                className="w-full border border-gray-300 rounded-md p-2"
                value={formData.yearIncorporation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mt-2 text-gray-700 mb-1" htmlFor="current-location">
                <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">6</span>
                Current Location / HQ <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="current-location"
                name="currentLocation"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Please mention your city"
                value={formData.currentLocation}
                onChange={handleChange}
                required
              />
              <p className="text-right text-xs text-gray-500">250 character(s) remaining</p>
            </div>

            <div>
              <label htmlFor="nearest-hub" className="block text-sm mt-2 text-gray-700">
                <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">7</span>
                Nearest Hub <span className="text-red-500">*</span>
              </label>
              <select
                id="nearest-hub"
                name="nearestHub"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.nearestHub}
                onChange={handleChange}
                required
              >
                <option>Select...</option>
                <option value="hub1">Hub 1</option>
                <option value="hub2">Hub 2</option>
                <option value="hub3">Hub 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="company-profile" className="block text-sm mt-2 text-gray-700">
                <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">8</span>
                Company Profile (Max 50 words) <span className="text-red-500">*</span>
              </label>
              <textarea
                id="company-profile"
                name="companyProfile"
                rows="4"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Brief description, Customer traction, any awards, recognitions etc."
                value={formData.companyProfile}
                onChange={handleChange}
                required
              ></textarea>
              <p className="mt-2 text-right text-sm text-gray-500">1200 character(s) remaining</p>
            </div>

            <div>
          <h3 className="text-sm  text-gray-900">Founder/ CEO Details</h3>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm mt-2  text-gray-700">
          <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">9  </span>Name  <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="founderName"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Founder/CEO's Name"
            value={formData.founderName}
            onChange={handleChange}
            required
          />
          <p className="mt-2 text-right text-sm text-gray-500">50 character(s) remaining</p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mt-2 text-gray-700">
          <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">10 </span> Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="founderEmail"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Founder/CEO's Email"
            value={formData.founderEmail}
            onChange={handleChange}
            required
          />
          <p className="mt-2 text-sm text-gray-500">This email will be used for further communications.</p>
        </div>

        <div>
          <label htmlFor="contact-number" className="block text-sm text-gray-700 mt-2">
          <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">11  </span> Primary Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact-number"
            name="contactNumber"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Founder/CEO - Preferably WhatsApp Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
          
          <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">12  </span>  Gender <span className="text-red-500">*</span>
        
          <div className="space-y-2">
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleChange}
                required
              />
              <label htmlFor="male" className="ml-2">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
                required
              />
              <label htmlFor="female" className="ml-2">Female</label>
            </div>
            <div>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                onChange={handleChange}
                required
              />
              <label htmlFor="other" className="ml-2">Other</label>
            </div>
          </div>
        <div>
          <label className="block  text-sm mb-2 mt-2" htmlFor="linkedin">
          <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">13  </span> Startup LinkedIn URL <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-gray-300 p-2"
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block  text-sm mb-2 mt-2" htmlFor="profile">
          <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">14  </span> Brief Profile (Max 50 Words) <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full border border-gray-300 p-2"
            id="profile"
            name="profile"
            rows="4"
            placeholder="Qualification, Education, Skills etc. of Founder/CEO"
            value={formData.profile}
            onChange={handleChange}
            required
          ></textarea>          
          <div className="text-right text-gray-500 text-sm">1200 character(s) remaining</div>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
        <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">15  </span>
          <h1 className="text-sm">Co Founders Details</h1>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">
          <div></div>
          <div className="text-center text-sm">Co Founder 1</div>
          <div className="text-center text-sm">Co Founder 2</div>
          <div className="text-center text-sm ">Co Founder 3</div>

          <div className="text-right text-sm">Name</div>
          <input
            type="text"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder1.name}
            onChange={(e) => handleChange(e, 1, 'name')}
          />
          <input
            type="text"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder2.name}
            onChange={(e) => handleChange(e, 2, 'name')}
          />
          <input
            type="text"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder3.name}
            onChange={(e) => handleChange(e, 3, 'name')}
          />

          <div className="text-right text-sm">Email Id</div>
          <input
            type="email"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder1.email}
            onChange={(e) => handleChange(e, 1, 'email')}
          />
          <input
            type="email"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder2.email}
            onChange={(e) => handleChange(e, 2, 'email')}
          />
          <input
            type="email"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder3.email}
            onChange={(e) => handleChange(e, 3, 'email')}
          />

          <div className="text-right text-sm">Contact Number</div>
          <input
            type="text"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder1.contactNumber}
            onChange={(e) => handleChange(e, 1, 'contactNumber')}
          />
          <input
            type="text"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder2.contactNumber}
            onChange={(e) => handleChange(e, 2, 'contactNumber')}
          />
          <input
            type="text"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder3.contactNumber}
            onChange={(e) => handleChange(e, 3, 'contactNumber')}
          />

          <div className="text-right text-sm">LinkedIn Profile URL</div>
          <input
            type="url"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder1.linkedin}
            onChange={(e) => handleChange(e, 1, 'linkedin')}
          />
          <input
            type="url"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder2.linkedin}
            onChange={(e) => handleChange(e, 2, 'linkedin')}
          />
          <input
            type="url"
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder3.linkedin}
            onChange={(e) => handleChange(e, 3, 'linkedin')}
          />

          <div className="text-right text-sm">
            Brief Profile (Education, Skills, Experience etc.) Max 50 Words
          </div>
          <textarea
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder1.briefProfile}
            onChange={(e) => handleChange(e, 1, 'briefProfile')}
          ></textarea>
          <textarea
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder2.briefProfile}
            onChange={(e) => handleChange(e, 2, 'briefProfile')}
          ></textarea>
          <textarea
            className="col-span-1 border border-gray-300 p-2 rounded"
            value={formData.coFounder3.briefProfile}
            onChange={(e) => handleChange(e, 3, 'briefProfile')}
          ></textarea>
        </form>
        <div className="text-right mt-2 text-gray-500">1200 character(s) remaining</div>
      </div>
    </div>
   
        
          <label className="flex items-center space-x-2 mt-2 text-sm ">
          <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">16  </span>Are you registered with Department for Promotion of Industry and Internal Trade (DPIIT)? <span className='text-red-500'>*</span>
          </label>
          <div className="mt-2 space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="dpiit"
                value="yes"
                checked={formData.dpiit === 'yes'}
                onChange={handleChange}
                className="form-radio"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="dpiit"
                value="no"
                checked={formData.dpiit === 'no'}
                onChange={handleChange}
                className="form-radio"
              />
              <span>No</span>
            </label>
          </div>
      

        <div>
          <label className="flex items-center space-x-2 mt-2 text-sm ">
          <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">17  </span>
            Are you a product start-up? <span className='text-red-500'>*</span>
          </label>
          <div className="mt-2 space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="startup"
                value="yes"
                checked={formData.startup === 'yes'}
                onChange={handleChange}
                className="form-radio"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="startup"
                value="no"
                checked={formData.startup === 'no'}
                onChange={handleChange}
                className="form-radio"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 mt-2 text-sm ">
          <span className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2">18 </span>
            How did you hear about nasscom startups Incubation Program? <span className='text-red-500'>*</span>
          </label>
          <select
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md p-2"
          >
            <option>Select...</option>
            <option value="socialMedia">Social Media</option>
            <option value="newsArticle">News Article</option>
            <option value="wordOfMouth">Word of Mouth</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-2 mt-2 text-sm">
          <span className="inline-block bg-blue-500  text-white rounded-full px-2 py-1 text-xs mr-2">19  </span>
            I agree to the nasscom Privacy Policy, Terms Of Use And Disclaimer <span className='text-red-500'>*</span>
          </label>
          <div className="mt-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2 mt-2">I agree</span>
            </label>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Terms Of Use And Disclaimer</p>
          <p className="mt-1 mt-2">
            Privacy Policy:{' '}
            <a href="https://www.nasscom.in/privacy-policy" className="text-blue-600">
              https://www.nasscom.in/privacy-policy
            </a>
          </p>
          <p className="mt-1">
            Terms Of Use And Disclaimer:{' '}
            <a href="https://www.nasscom.in/terms-use-and-disclaimer" className="text-blue-600">
              https://www.nasscom.in/terms-use-and-disclaimer
            </a>
          </p>
        </div>
            <div className="mt-4 space-x-4">

            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md" disabled={!formData.agreeToTerms}>
              Submit Form
            </button>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
              Save as Draft
            </button>
            </div>
          </form>
          <span className="mt-2 text-green-600">{result}</span>

          <div className="  item-center mt-5 text-center text-gray-600 text-sm">
           <p>This form was created inside of nasscom.accubate.app</p>
           <p className="font-bold text-sm">Powered by Cunomial</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;








