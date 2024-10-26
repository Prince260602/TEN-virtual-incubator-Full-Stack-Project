// // // const express = require('express');
// // // const app = express();
// // // const dotenv = require('dotenv');
// // // dotenv.config();
// // // app.use(express.json());
// // // const cors = require('cors');

// // // const contactRoute = require('./routes/contact.js');
// // // const userRoute = require('./routes/UserRoute.js');
// // // const errorMiddleware = require("./Middleware/error.js");

// // // app.use(errorMiddleware);

// // // const PORT = process.env.PORT || 4000;
// // // //Connecting to DB
// // // const connectDatabase = require("./config/database.js");
// // // connectDatabase();

// // // // app.use(
// // // //     cors({
// // // //         origin: "https://ten-bl2h.vercel.app",
// // // //         credentials: true,
// // // //     })
// // // // );
// // // app.use(cors());

// // // app.use("/api/v1", contactRoute);
// // // app.use("/api/v2", userRoute);

// // // app.get('/', (req, res) => {
// // //     return res.json({
// // //         success: true,
// // //         message: "Your server is up and running..."
// // //     });
// // // });

// // // app.listen(PORT, () => {
// // //     console.log(`App is running at port ${PORT}`);
// // // });

// // import express from "express";
// // import dotenv from 'dotenv'
// // import connection from "./config/database.js";
// // import cors from 'cors'
// // import cookieParser from "cookie-parser";
// // const app = express()
// // app.use(express.json())
// // app.use(cookieParser());

// // app.use(cors({
// //     // origin: "http://localhost:5173", 
// //     // origin: "https://ten-official.vercel.app",
// //     origin: ["https://www.entrepreneurshipnetwork.net","https://ten-official.vercel.app"],
    
// //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //     allowedHeaders: ['Content-Type', 'Authorization'],
// //     credentials: true
// //   }));
// // dotenv.config()

// // import Route from "./routes/UserRoute.js";
// // import courseRoute from "./routes/courseRoutes.js";
// // import contactRouter from './routes/contact.js'


// // app.use('/api/users', Route)
// // app.use('/api/users',courseRoute)
// // app.use('/api/users', contactRouter)


// // if(connection()){
// // app.listen(process.env.PORT ,()=>{
// //     console.log(`App started at ${process.env.PORT} `);
// // })}
















// // import express from "express";
// // import dotenv from 'dotenv';
// // import connection from "./config/database.js";
// // import cors from 'cors';
// // import cookieParser from "cookie-parser";
// // import Route from "./routes/UserRoute.js";
// // import courseRoute from "./routes/courseRoutes.js";
// // import contactRouter from './routes/contact.js'

// // dotenv.config();

// // const app = express();
// // app.use(express.json());
// // app.use(cookieParser());

// // app.use(cors({
// //   origin: ["http://localhost:5173", "https://ten-official.vercel.app","https://www.entrepreneurshipnetwork.net"],
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true
// // }));

// // app.options("*", cors()); // Preflight requests for all routes
// // app.get("/", (req, res) => {
// //   res.status(200).json({ message: "Welcome to the API" });
// // });
// // app.use('/api/users', Route);
// // app.use('/api/users',courseRoute)
// // app.use('/api/users', contactRouter)


// // if (connection()) {
// //   app.listen(process.env.PORT, () => {
// //     console.log(`App started at ${process.env.PORT}`);
// //   });
// // }










// import express from "express";
// import dotenv from 'dotenv';
// import connection from "./config/database.js";
// import cors from 'cors';
// import cookieParser from "cookie-parser";
// import Route from "./routes/UserRoute.js";
// import courseRoute from "./routes/courseRoutes.js";
// import contactRouter from './routes/contact.js';

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cookieParser());

// app.use(cors({
//   origin: ["http://localhost:5173", "https://ten-official.vercel.app", "https://www.entrepreneurshipnetwork.net"],
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));

// app.options("*", cors()); // Preflight requests for all routes

// // Root route
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Welcome to the API" });
// });

// // API routes
// app.use('/api/users', Route);
// app.use('/api/users', courseRoute);
// app.use('/api/users', contactRouter);

// if (connection()) {
//   app.listen(process.env.PORT, () => {
//     console.log(`App started at ${process.env.PORT}`);
//   });
// }


















































































import express from "express";
import dotenv from "dotenv";
import connection from "./config/database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/UserRoute.js";
import courseRoute from "./routes/courseRoutes.js";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://ten-official.vercel.app", "https://www.entrepreneurshipnetwork.net"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.options("*", cors());

// Root route for testing
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
  console.log("Root route accessed");
});

// API routes
app.use("/api/users", userRoute);
app.use("/api/courses", courseRoute);
app.use("/api/contacts", contactRouter);

// Database connection and server start
connection()
  .then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`App started at port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
