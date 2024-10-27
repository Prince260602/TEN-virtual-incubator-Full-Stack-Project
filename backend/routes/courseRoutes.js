import { Router } from 'express';
import { createCourse, getAllCourses, getCourseByID } from '../controllers/courseControllers.js';
import upload from '../config/multerConfig.js'; 


const courseRoute = Router();

courseRoute.post('/course', upload.single('imgSrc'), createCourse); 
courseRoute.get('/courses', getAllCourses);
courseRoute.get('/coursedetails/:id', getCourseByID);

export default courseRoute;
