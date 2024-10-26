// import React from 'react';
// import './Layer.css';

// const LayerCard = ({ title, description, icon }) => (
//   <div className="p-6 bg-white rounded-lg shadow-md shadow-slate-400 hover:text-xl w-full md:w-1/2 lg:w-2/5">
//     <div className="flex items-center space-x-4">
//       <div className="p-2 bg-blue-500 rounded-full">
//         <i className={`${icon} text-white text-2xl`}></i>
//       </div>
//       <h2 className="text-xl font-semibold">{title}</h2>
//     </div>
//     <p className="mt-4 text-gray-600">{description}</p>
//   </div>
// );

// const LayersPage = () => {
//   const layers = [
//     {
//       title: 'Startup club community',
//       description: 'Give a brief overview of this. Community spread over 500+ colleges with more than 10k members',
//       icon: 'fas fa-layer-group'
//     },
//     { 
//       title: 'TEN interns',
//       description: 'Intern in TEN that are hired and trained by world-class people in-house. Give a description of how we give world-class training',
//       icon: 'fas fa-cogs'
//     },
//     {
//       title: 'TEN employees',
//       description: 'Employees of TEN that help us in growing our company',
//       icon: 'fas fa-users'
//     },
//     {
//       title: 'TEN entrepreneurs',
//       description: 'Entrepreneurs that we work with to grow their company. They are also funded by TEN',
//       icon: 'fas fa-briefcase'
//     },
//     {
//       title: 'TEN investors',
//       description: 'People who invest in TEN as well as the entrepreneurs that are part of TEN',
//       icon: 'fas fa-hand-holding-usd'
//     },
//     {
//       title: 'TEN alumni',
//       description: 'People who were part of TEN and have grown to join prestigious organizations',
//       icon: 'fas fa-graduation-cap'
//     }
//   ];

//   return (
//     <div className="container mx-auto p-8 relative">
//       <h1 className="text-3xl font-bold mb-6 text-center">Our Layers</h1>
//       <div className="vertical-bar absolute left-1/2 transform -translate-x-1/2 bg-blue-500 w-1"></div>
//       <div className="relative">
//         {layers.map((layer, index) => (
//           <div
//             key={index}
//             className={`layer-card relative mb-16 ${index % 2 === 0 ? 'left-side' : 'right-side'}`}
//           >
//             <LayerCard
//               title={layer.title}
//               description={layer.description}
//               icon={layer.icon}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LayersPage;
import React from 'react';
import './Layer.css';

const LayerCard = ({ title, description, icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="p-6 bg-white rounded-lg shadow-md shadow-slate-400 hover:text-xl w-full md:w-1/2 lg:w-2/5">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-blue-500 rounded-full">
          <i className={`${icon} text-white text-2xl`}></i>
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  </a>
);

const LayersPage = () => {
  const layers = [
    {
      title: 'Startup club community',
      description: 'Give a brief overview of this. Community spread over 500+ colleges with more than 10k members',
      icon: 'fas fa-layer-group',
      link: 'https://discord.com/invite/wdgH95JY6a'
    },
    {
      title: 'TEN interns',
      description: 'Intern in TEN that are hired and trained by world-class people in-house. Give a description of how we give world-class training',
      icon: 'fas fa-cogs',
      link: 'https://career.entrepreneurshipnetwork.net/'
    },
    {
      title: 'TEN employees',
      description: 'Employees of TEN that help us in growing our company',
      icon: 'fas fa-users',
      link: 'https://www.linkedin.com/company/the-entrepreneurship-network/?viewAsMember=true'
    },
    {
      title: 'TEN entrepreneurs',
      description: 'Entrepreneurs that we work with to grow their company. They are also funded by TEN',
      icon: 'fas fa-briefcase',
      // link: 'https://example.com/ten-interns'
    },
    {
      title: 'TEN investors',
      description: 'People who invest in TEN as well as the entrepreneurs that are part of TEN',
      icon: 'fas fa-hand-holding-usd',
      link: 'https://www.entrepreneurshipnetwork.net/login'
    },
    {
      title: 'TEN alumni',
      description: 'People who were part of TEN and have grown to join prestigious organizations. Alumini name : Shwets Sabu, Pranshu Gupta, Amesha Khozikode',
      icon: 'fas fa-graduation-cap',
      link: 'https://halloffame.entrepreneurshipnetwork.net/',
     
    }
    // Add more layers with links
  ];

  return (
    <div className="container mx-auto p-8 relative">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Layers</h1>
      <div className="vertical-bar absolute left-1/2 transform -translate-x-1/2 bg-blue-500 w-1"></div>
      <div className="relative">
        {layers.map((layer, index) => (
          <div
            key={index}
            className={`layer-card relative mb-16 ${index % 2 === 0 ? 'left-side' : 'right-side'}`}
          >
            <LayerCard
              title={layer.title}
              description={layer.description}
              icon={layer.icon}
              link={layer.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayersPage;
