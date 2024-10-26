import { Course } from '../models/courseModel.js';

export const createCourse = async (req, res) => {
  try {
    const { title, description, price, imgSrc, category } = req.body;
    const course = await Course.create({ title, description, price, imgSrc, category });
    res.status(201).json({ success: true, msg: 'Course Added', data: course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: `Course creation error: ${error.message}` });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: 'Courses not present' });
  }
};

export const getCourseByID = async (req, res) => {
  try {
    const courseDetails = await Course.findById(req.params.id);
    if (!courseDetails) {
      return res.status(404).json({ success: false, msg: 'Course not found' });
    }
    res.status(200).json({ success: true, courseDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: 'Error retrieving course' });
  }
};
