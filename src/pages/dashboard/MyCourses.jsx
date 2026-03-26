// src/pages/dashboard/MyCourses.jsx
import { Link } from 'react-router-dom';
import courses from '../../data/courses';
import useProgress from '../../hooks/useProgress';

const MyCourses = () => {
  const enrolledIds = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
  const userCourses = courses.filter(course => enrolledIds.includes(course.id));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-12">My Courses</h1>
      {userCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userCourses.map((course) => {
            const { progress } = useProgress(course.id);
            return (
              <div key={course.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
                <div className="h-56 bg-gradient-to-br from-emerald-700 to-teal-700 flex items-center justify-center text-8xl">
                  {course.image}
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-2xl mb-3">{course.title}</h3>
                  <p className="text-gray-500 mb-6">{course.instructor}</p>
                  <div className="mb-7">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-medium text-emerald-700">{progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                  <Link to={`/course/${course.id}`} className="block w-full text-center bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-2xl font-medium">
                    Continue Learning
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-24">
          <h3 className="text-3xl font-semibold text-gray-900 mb-3">No enrolled courses yet</h3>
          <Link to="/courses" className="inline-block bg-emerald-700 text-white px-10 py-4 rounded-2xl font-medium">Browse Courses</Link>
        </div>
      )}
    </div>
  );
};
export default MyCourses;