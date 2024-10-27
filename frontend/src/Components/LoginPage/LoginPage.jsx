
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useContext } from "react";
// import { mainContext } from "../../Context";
// import { toast } from "react-hot-toast";

// function Login() {
//   const navigate = useNavigate();
//   const userId = useContext(mainContext);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const rawData = new FormData(e.target);
//     const formData = Object.fromEntries(rawData);
//     console.log(formData);

//     if (!formData.email || !formData.password) {
//       console.log("Details are required");
//     } else {
//       try {
//         const response = await axios.post(
//           'https://ten-official-1.onrender.com/api/users/login',
//           formData,
//           { withCredentials: true }
//         );
//         if (response.status === 201) {
//           toast.success("Logged-in successfully!");
//         } else {
//           toast.error("Failed to Logged-in.");
//         }
//         console.log("login Response", response);
//         console.log(response.data.data._id);

//         // Store token and user data in localStorage
//         localStorage.setItem('token', JSON.stringify(response.data.token));
//         localStorage.setItem('userid', JSON.stringify({
//           id: response.data.data._id,
//           name: response.data.data.username
//         }));

//         // Update context
//         userId.setID(response.data.token);
//         userId.setname(response.data.data.username);

//         // Navigate based on user role
//         if (!response.data.data.isAdmin) {
//           navigate('/');
//         } else {
//           navigate('/admin');
//         }
//       } catch (err) {
//         console.log(err);
//         toast.error("An error occurred. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//       <div className="container h-screen w-screen flex justify-center items-center">
//         <div className="login p-4 border-2 flex flex-col justify-center items-center gap-4 ">
//           <h1 className="text-2xl font-semibold"> Login </h1>

//           <form
//             onSubmit={(e) => handleLogin(e)}
//             className="flex flex-col justify-center items-center gap-4"
//           >
//             <input
//               type="email"
//               placeholder="Email..."
//               name="email"
//               className="text-xl py-2 px-4 border-2 rounded-md outline-none"
//             />
//             <input
//               type="password"
//               placeholder="password..."
//               name="password"
//               className="text-xl py-2 px-4 border-2 rounded-md outline-none"
//             />
//             <button
//               type="submit"
//               className="text-xl w-full py-2 px-4 border-2 rounded-md outline-none bg-slate-600 text-slate-50"
//             >
//               LOGIN
//             </button>
//           </form>

//           <p className="text-md font-normal">
//             Does not have any account{" "}
//             <Link
//               to={'/Sign_Up'}
//               className="text-md font-light text-blue-500 hover:text-blue-700"
//             >
//               create one
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;






import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { mainContext } from "../../Context";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const userId = useContext(mainContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const rawData = new FormData(e.target);
    const formData = Object.fromEntries(rawData);
    console.log(formData);

    if (!formData.email || !formData.password) {
      console.log("Details are required");
    } else {
      try {
        const response = await axios.post(
          // 'https://virtual-or4y.onrender.com/api/users/login',
            'http://localhost:4000/api/users/login',
          formData,
          { withCredentials: true }
        );
        
        if (response.status === 201) {
          toast.success("Logged-in successfully!");
        } else {
          toast.error("Failed to Logged-in.");
        }
        console.log("login Response", response);
        console.log(response.data.data._id);

        // Store token and user data in localStorage
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('userid', JSON.stringify({
          id: response.data.data._id,
          name: response.data.data.username
        }));

        // Update context
        userId.setID(response.data.token);
        userId.setname(response.data.data.username);

        // Navigate based on user role
        if (!response.data.data.isAdmin) {
          navigate('/');
        } else {
          navigate('/admin');
        }
      } catch (err) {
        console.log(err);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="container h-screen w-screen flex justify-center items-center">
        <div className="login p-4 border-2 flex flex-col justify-center items-center gap-4 ">
          <h1 className="text-2xl font-semibold"> Login </h1>

          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex flex-col justify-center items-center gap-4"
          >
            <input
              type="email"
              placeholder="Email..."
              name="email"
              className="text-xl py-2 px-4 border-2 rounded-md outline-none"
            />
            <input
              type="password"
              placeholder="password..."
              name="password"
              className="text-xl py-2 px-4 border-2 rounded-md outline-none"
            />
            <button
              type="submit"
              className="text-xl w-full py-2 px-4 border-2 rounded-md outline-none bg-slate-600 text-slate-50"
            >
              LOGIN
            </button>
          </form>

          <p className="text-md font-normal">
            Does not have any account{" "}
            <Link
              to={'/Sign_Up'}
              className="text-md font-light text-blue-500 hover:text-blue-700"
            >
              create one
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
