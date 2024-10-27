
import express from "express";
import dotenv from 'dotenv';
import connection from "./config/database.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import Route from "./routes/UserRoute.js";
import courseRoute from "./routes/courseRoutes.js";
import contactRouter from './routes/contact.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: ["http://localhost:5173", "https://ten-official.vercel.app","https://www.entrepreneurshipnetwork.net"],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.options("*", cors()); // Preflight requests for all routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});
app.use('/api/users', Route);
app.use('/api/users',courseRoute)
app.use('/api/users', contactRouter)


if (connection()) {
  app.listen(process.env.PORT, () => {
    console.log(`App started at ${process.env.PORT}`);
  });
}