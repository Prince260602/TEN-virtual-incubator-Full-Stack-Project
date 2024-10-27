// // // import multer from 'multer';
// // // import path from 'path';

// // // // Set up multer storage
// // // const storage = multer.diskStorage({
// // //   destination: (req, file, cb) => {
// // //     cb(null, 'uploads/'); // Directory for uploaded files
// // //   },
// // //   filename: (req, file, cb) => {
// // //     cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
// // //   }
// // // });

// // // // Initialize multer
// // // const upload = multer({ storage });

// // // export { upload };































// // import multer from 'multer';
// // import path from 'path';

// // // Set up multer storage
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, 'uploads/'); // Set upload folder
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, `${Date.now()}-${file.originalname}`); // Set a unique filename
// //   }
// // });

// // // Initialize multer for handling single file uploads
// // const upload = multer({ storage });

// // export { upload };

// import multer from 'multer';
// import path from 'path';

// // Set up multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Directory for uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
//   }
// });

// // Initialize multer
// const upload = multer({ storage });

// export { upload };
