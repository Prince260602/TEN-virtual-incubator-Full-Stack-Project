import { Router } from 'express';
import { createCourse, getAllCourses, getCourseByID } from '../controllers/courseControllers.js';

const courseRoute = Router();

courseRoute.post('/course', createCourse);

courseRoute.get('/courses', getAllCourses);

courseRoute.get('/coursedetails/:id', getCourseByID);

export default courseRoute;
