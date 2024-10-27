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
