// import React from 'react';
// import './Sliding.css';

// const logos = [
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhCRY2406uVmKDGOCLGsUkwsd6qJkFXNwERgFVk0NwA&s',
//   'https://via.placeholder.com/100x50?text=Logo2',
//   'https://via.placeholder.com/100x50?text=Logo3',
//   'https://via.placeholder.com/100x50?text=Logo4',
//   'https://via.placeholder.com/100x50?text=Logo5',
//   'https://via.placeholder.com/100x50?text=Logo6',
// ];

// const SlidingLogos = () => {
//   return (
//     <div className="relative overflow-hidden bg-gray-100 py-8">
//       <div className="flex animate-slide gap-4">
//         {logos.map((logo, index) => (
//           <div key={index} className="flex-shrink-0">
//             <img src={logo} alt={`Logo ${index + 1}`} className="h-12 w-auto object-contain" />
//           </div>
//         ))}
//         {logos.map((logo, index) => (
//           <div key={index + logos.length} className="flex-shrink-0">
//             <img src={logo} alt={`Logo ${index + 1}`} className="h-12 w-auto object-contain" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SlidingLogos;


import React from 'react';
import './Sliding.css';

const logos = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhCRY2406uVmKDGOCLGsUkwsd6qJkFXNwERgFVk0NwA&s',
  'https://www.designrush.com/uploads/users/customer-2/image_1505931862_e2896044118462ae451d87076f16ce6d.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iA-VKtFd_7hQzAqj719rx52o96wBUBA5jg&s',
  'https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609375996518-DZU53FYNB3FMBYB1JHG6/HP-logo+2021.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtOGt4Un5bpakY_yaDvU92g6bdeWwrGh9pfFpAQRBnQ&s',
  'https://inkbotdesign.com/wp-content/uploads/2015/07/Chanel-Logo-Design-1024x683.png.webp',
  'https://www.zarla.com/images/walmart-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2',
  'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcL0NFTGJncGdhUjc3NENFSEpMYUtKLnBuZyJ9:weare:O9wkuw13HEvmh8dhWvmoop5aKzVI61DKkYUIoShgtlA?width=1700&height=798',
  'https://fabrikbrands.com/wp-content/uploads/Famous-Blue-Logos-13-1200x750.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXV7-ZMSfGaP0jLXDCAvZ_E7PDBNsp2e08F6dr0S8md23U0emSejl33GOe9zIHKc16vQ&usqp=CAU',
  'https://www.zarla.com/images/bmw-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPI26UiCi5SBRFmJXHsSFqxxdS2ZNKqbZz2RKHcC445g&s',
];

const SlidingLogos = () => {
  return (
    <div className="relative border-2  overflow-hidden py-8">
      <div className="flex animate-slide gap-4 whitespace-nowrap">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-12 md:h-24 w-auto object-contain" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="flex-shrink-0">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-12 md:h-24 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingLogos;