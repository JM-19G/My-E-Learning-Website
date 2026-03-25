// src/store/CourseContext.jsx
import { createContext, useContext, useState } from 'react';
import courses from '../data/courses';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      alert(`✅ Successfully enrolled in the course!`);
    }
  };

  const isEnrolled = (courseId) => enrolledCourses.includes(courseId);

  return (
    <CourseContext.Provider value={{ enrolledCourses, enrollCourse, isEnrolled }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);