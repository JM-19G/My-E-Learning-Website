// src/pages/dashboard/MyCourses.jsx
import { Link } from 'react-router-dom';
import courses from '../../data/courses';
import { useState, useEffect } from 'react';

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Simulate enrolled courses 
  useEffect(() => {
    // For demo, mark first 2 courses as enrolled
    setEnrolledCourses(courses.slice(0, 2));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600 mt-2">Continue your learning journey</p>
        </div>
        <Link
          to="/courses"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl font-medium transition"
        >
          Browse More Courses
        </Link>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-7xl">
                {course.image}
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{course.instructor}</p>

                {/* Progress Bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium text-emerald-600">45%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full w-[45%]"></div>
                  </div>
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-medium transition"
                >
                  Continue Learning
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-6">🌱</div>
          <h3 className="text-2xl font-semibold text-gray-700">No enrolled courses yet</h3>
          <p className="text-gray-500 mt-3 mb-8">Start your learning journey by enrolling in a course</p>
          <Link
            to="/courses"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-2xl font-medium"
          >
            Browse Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCourses;