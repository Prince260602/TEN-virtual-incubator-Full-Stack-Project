import React from 'react';

const PayAfterPlacementAgreement = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Pay After Placement Program Agreement</h2>
        
        {/* Company and Participant Details */}
        <div className="mb-4">
          <p className="mb-2"><strong>Company Name:</strong> The Entrepreneurship Network</p>
          <p className="mb-2"><strong>Location:</strong> Noida, Uttar Pradesh</p>
          <p className="mb-4"><strong>Email:</strong> info@entrepreneurshipnetwork.net</p>
          <p className="mb-2"><strong>Participant:</strong></p>
          <p className="mb-2">Name: ______________________________________</p>
          <p className="mb-2">Address: ____________________________________</p>
          <p className="mb-4">Email: ______________________________________</p>
        </div>

        {/* Agreement Sections */}
        <ul className="list-disc list-inside space-y-4 text-sm md:text-base">
          {/* Program Description */}
          <li>
            <strong>Program Description</strong>
            <p className="mt-1">
              The Entrepreneurship Network (TEN) agrees to provide the Participant with placement services, including training, coaching, and career support, as part of the "Pay After Placement Program."
            </p>
          </li>

          {/* Fees */}
          <li>
            <strong>Fees</strong>
            <p className="mt-1">
              The total fee for the program is ₹37,500 (Thirty-Seven Thousand Five Hundred Rupees). This fee is payable within four (4) weeks of the Participant's successful placement in a job.
            </p>
          </li>

          {/* Payment Terms */}
          <li>
            <strong>Payment Terms</strong>
            <p className="mt-1">
              The payment of ₹37,500 must be made by the Participant within four (4) weeks from the date of their official start at a new job. Payments are to be made via bank transfer to the account details provided by TEN, which will be communicated upon the Participant's placement. The Participant is obligated to pay the fee if they secure a placement either through TEN’s services or independently (i.e., from sources outside TEN) during the term of this agreement.
            </p>
          </li>

          {/* Responsibilities of TEN */}
          <li>
            <strong>Responsibilities of The Entrepreneurship Network</strong>
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>Provide professional training and career guidance to the Participant.</li>
              <li>Assist in the Participant’s job search and placement process.</li>
              <li>Ensure that the placement aligns with the Participant's career goals and skills.</li>
            </ul>
          </li>

          {/* Responsibilities of the Participant */}
          <li>
            <strong>Responsibilities of the Participant</strong>
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>Attend all scheduled training sessions and workshops.</li>
              <li>Actively participate in the job search and application process.</li>
              <li>Pay the agreed fee within the stipulated timeframe upon securing employment, regardless of whether the placement is through TEN or from external sources.</li>
            </ul>
          </li>

          {/* Termination */}
          <li>
            <strong>Termination</strong>
            <p className="mt-1">
              Either party may terminate this agreement with written notice if the other party breaches a material term of the agreement. Upon termination by TEN for cause, the Participant will still be obligated to pay any outstanding fees if they have been successfully placed in a job, regardless of the source of placement.
            </p>
          </li>

          {/* Confidentiality */}
          <li>
            <strong>Confidentiality</strong>
            <p className="mt-1">
              Both parties agree to keep confidential any proprietary information and not to disclose such information to any third party without prior written consent.
            </p>
          </li>

          {/* Governing Law */}
          <li>
            <strong>Governing Law</strong>
            <p className="mt-1">
              This Agreement shall be governed by and construed in accordance with the laws of the State of Uttar Pradesh, India.
            </p>
          </li>

          {/* Dispute Resolution */}
          <li>
            <strong>Dispute Resolution</strong>
            <p className="mt-1">
              Any disputes arising under this agreement will be resolved through negotiation or, if necessary, through binding arbitration in Noida, Uttar Pradesh.
            </p>
          </li>

          {/* Entire Agreement */}
          <li>
            <strong>Entire Agreement</strong>
            <p className="mt-1">
              This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements or understandings, whether written or oral, relating to the subject matter hereof.
            </p>
          </li>
        </ul>

        {/* Signature Section */}
        <div className="mt-6">
          <p className="mb-2"><strong>IN WITNESS WHEREOF, the parties hereto have executed this Agreement.</strong></p>
          <div className="mb-2">
            <p><strong>The Entrepreneurship Network (TEN)</strong></p>
            <p>By: ___________________________________________</p>
            <p>Name: _________________________________________</p>
            <p>Title: __________________________________________</p>
            <p>Date: ___________________________________________</p>
          </div>
          <div className="mb-4">
            <p><strong>Participant</strong></p>
            <p>By: ___________________________________________</p>
            <p>Name: _________________________________________</p>
            <p>Date: ___________________________________________</p>
          </div>
          <p className="text-sm text-gray-600">
            Please return a signed copy of this agreement to <a href="mailto:info@entrepreneurshipnetwork.net" className="text-blue-500">info@entrepreneurshipnetwork.net</a>.
          </p>
        </div>

        {/* Accept Agreement Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
            Accept Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayAfterPlacementAgreement;
