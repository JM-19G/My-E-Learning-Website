// src/pages/dashboard/MyCourses.jsx
import { Link } from 'react-router-dom';
import courses from '../../data/courses';
import { useCourse } from '../../store/CourseContext';
import { useProgress } from '../../hooks/UseProgress';

const MyCourses = () => {
  const { enrolledCourses } = useCourse();

  const userCourses = courses.filter(course => enrolledCourses.includes(course.id));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">My Courses</h1>
          <p className="text-gray-600 mt-3 text-xl">Continue your learning journey</p>
        </div>
        <Link
          to="/courses"
          className="px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-2xl transition"
        >
          Browse All Courses
        </Link>
      </div>

      {userCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userCourses.map((course) => {
            const { progress } = useProgress(course.id);
            return (
              <div key={course.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-56 bg-gradient-to-br from-emerald-700 to-teal-700 flex items-center justify-center text-8xl">
                  {course.image}
                </div>

                <div className="p-8">
                  <h3 className="font-semibold text-2xl leading-tight mb-3">{course.title}</h3>
                  <p className="text-gray-500 mb-6">{course.instructor}</p>

                  <div className="mb-7">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-medium text-emerald-700">{progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>

                  <Link
                    to={`/course/${course.id}`}
                    className="block w-full text-center bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-2xl font-medium transition"
                  >
                    Continue Learning
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-3xl border border-gray-100">
          <div className="text-7xl mb-6">🌱</div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-3">No enrolled courses yet</h3>
          <p className="text-gray-600 mb-8">Enroll in courses to start your learning journey</p>
          <Link to="/courses" className="inline-block bg-emerald-700 text-white px-10 py-4 rounded-2xl font-medium">
            Browse Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCourses;