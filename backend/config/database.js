
// import { connect } from "mongoose";

// const connection =async()=>{
//     try {
//        await connect(`${process.env.DB_URL}/TEN`)
//        .then(()=>console.log("DB connected"))
//        .catch((err)=>console.log(err))
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default connection;







// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const connection = async () => {
//   try {
//     await mongoose.connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Database connected");

//     return true;
//   } catch (error) {
//     console.error("Database connection error:", error);
//     return false;
//   }
// };

// export default connection;

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL); // No need for useNewUrlParser or useUnifiedTopology
    console.log("Database connected");
    
    return true;
  } catch (error) {
    console.error("Database connection error:", error);
    return false;
  }
};

export default connection;
