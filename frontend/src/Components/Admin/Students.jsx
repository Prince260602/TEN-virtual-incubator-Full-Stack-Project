

// import React, { useEffect, useState } from 'react';
// import AdminHeader from './AdminHeader';
// import Sidebar from './Sidebar';
// import axios from 'axios';

// function Students() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/users/allusers')
//       .then((res) => {
//         console.log(res.data.data[0]);
//         setUsers(res.data.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <AdminHeader />
//       <div className='flex flex-col md:flex-row gap-2'>
//         <Sidebar />
//         <div className='text-2xl flex gap-4 flex-wrap p-4 md:justify-center md:items-center '>
//           {
//             users.length > 0 ? users.map((user) => 
//               {if(!user.isAdmin)
//                 {
//                   " "
//                 }
//                 else{
//                   <div key={user.id} className='border-2 p-4 h-64 w-64 flex flex-col justify-start items-center shadow-lg rounded-md bg-white'>
//                   <img src={user.profilepicture} alt={`${user.username}'s profile`} className='w-24 h-24 object-cover rounded-full mb-4'/>
//                   <p className='text-lg font-semibold'>{user.username}</p>
//                 </div>
//                 }

//               }
//             ) : <p>No data</p>
//           }
//         </div>
//       </div>
//     </>
//   );
// }

// export default Students;



import React, { useEffect, useState } from 'react';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';
import axios from 'axios';

function Students() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://ten-official-1.onrender.com/api/users/allusers')
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AdminHeader />
      <div className='flex flex-col md:flex-row gap-2'>
        <Sidebar />
        <div className='text-2xl flex gap-4 flex-wrap p-4 md:justify-center md:items-center'>
          {
            users.length > 0 ? users.map((user) => 
              user.isAdmin ? (
                null
              ) :  <div key={user.id} className='border-2 p-4 h-64 w-64 flex flex-col justify-start items-center shadow-lg rounded-md bg-white'>
              <img src={user.profilepicture} alt={`${user.username}'s profile`} className='w-24 h-24 object-cover rounded-full mb-4'/>
              <p className='text-lg font-semibold'>{user.username}</p>
            </div>
            ) : <p>No data</p>
          }
        </div>
      </div>
    </>
  );
}

export default Students;
