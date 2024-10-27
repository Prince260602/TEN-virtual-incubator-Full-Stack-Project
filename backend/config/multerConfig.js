// config/multer.js
import multer from 'multer';
import path from 'path';

// Define storage for the uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid filename collisions
  },
});

// Create a multer instance
const upload = multer({ storage });

export default upload;
