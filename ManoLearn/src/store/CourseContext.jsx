// src/store/CourseContext.jsx
import { createContext, useContext, useState } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses(prev => [...prev, courseId]);
      console.log(`✅ Enrolled in course ${courseId}`);
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