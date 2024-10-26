import React from "react";

const Policy = () => {
  return (
    <main className="main_wrapper p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Terms & Policies</h1>
        <span className="block text-gray-600 mb-1">Effective May 23, 2024</span>
        <span className="block text-gray-600">Our terms as per the FA '24 - '25</span>
      </header>
      <p className="text-gray-700">Welcome to The Entrepreneurship Network ("TEN"). By accessing or using our website, mobile application, or any other services we provide (collectively, the "Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Services</p>
      

      <section className="privacy__section mb-8" id="contract">
        <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
        <p className="text-gray-700">By using our Services, you affirm that you are at least 18 years of age and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms.</p>
      </section>

      <section className="privacy__section mb-8" id="obligations">
        <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
        <p className="text-gray-700">
        We reserve the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
        </p>
      </section>

      <section className="privacy__section mb-8" id="intellect">
        <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
        <p className="text-gray-700">
        <p className="text-gray-700">
          <strong>Eligibility </strong>
          <p>Our Services are available only to individuals who are at least 18 years old. By using our Services, you represent and warrant that you meet this requirement.</p>
        </p>
        <br />
        <p className="text-gray-700">
          <strong>Account Registration </strong>
          <p>To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and agree not to disclose your password to any third party.</p>
        </p>
        <br/>
        <p className="text-gray-700">
          <strong>Prohibited Conduct </strong>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Services for any illegal purpose or in violation of any local, state, national, or international law.</li>
            <li>Harass, threaten, demean, embarrass, or otherwise harm any other user of our Services.</li>
            <li>Impersonate any person or entity, or falsely state or otherwise misrepresent yourself, your age, or your affiliation with any person or entity.</li>
            <li>Interfere with or disrupt the operation of our Services or servers or networks connected to our Services.</li>
          </ul>
        </p>
        </p>
      </section>

      <section className="privacy__section mb-8" id="obligations">
        <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
        <p className="text-gray-700">
        All content and materials available on our Services, including but not limited to text, graphics, website name, code, images, and logos are the intellectual property of TEN and are protected by applicable copyright and trademark law. You are not permitted to modify, copy, reproduce, create derivative works from, republish, upload, post, transmit, or distribute in any way any content or materials from our Services without prior written permission from us.
        </p>
      </section>
    
      <section className="privacy__section mb-8" id="intellect">
        <h2 className="text-2xl font-semibold mb-4">User Content</h2>
        <p className="text-gray-700">
        <p className="text-gray-700">
          <strong>Responsibilty of User Content </strong>
          <p>You are solely responsible for all content that you upload, post, email, transmit, or otherwise make available via our Services ("User Content"). By making any User Content available through our Services, you grant TEN a worldwide, non-exclusive, royalty-free license to use, copy, modify, distribute, and display such User Content in connection with operating and providing our Services.</p>
        </p>
        <br />
        <p className="text-gray-700">
          <strong>Prohibited Content </strong>
          <p>You agree not to post or make available any User Content that:</p>
          <ul>
            <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
            <li>Infringes the intellectual property rights of any party.</li>
            <li>Contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware.</li>
          </ul>
        </p>
        
        </p>
      </section>

      <section className="privacy__section mb-8" id="obligations">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="text-gray-700">
        Your use of our Services is also governed by our Privacy Policy, which can be found at [Privacy Policy URL]. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.
        </p>
      </section>

      <section className="privacy__section mb-8" id="obligations">
        <h2 className="text-2xl font-semibold mb-4">Termination</h2>
        <p className="text-gray-700">
        We may terminate or suspend your access to our Services, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms.
        </p>
      </section>


      <section className="privacy__section mb-8" id="obligations">
        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="text-gray-700">
        To the maximum extent permitted by applicable law, in no event shall TEN be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the Services; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from the Services.
        </p>
      </section>


      <section className="privacy__section mb-8" id="obligations">
        <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
        <p className="text-gray-700">
        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which TEN is headquartered, without regard to its conflict of law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or complaints about this Privacy Policy, please contact us at:
          <br />
          Email:{" "}
          <a href="mailto:tech@entrepreneurshipnetwork.net" className="text-blue-500 hover:underline">
            tech@entrepreneurshipnetwork.net
          </a>
          <br />
        </p>
      </section>
    </main>
  );
};

export default Policy;