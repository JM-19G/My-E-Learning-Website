// src/pages/catalog/CourseCatalog.jsx
import { Link } from 'react-router-dom';
import CourseCard from '../../components/common/CourseCard';
import courses from '../../data/courses';   // ← Default import

const CourseCatalog = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Discover Agriculture Courses
          </h1>
          <p className="text-xl text-gray-600 mt-3 max-w-2xl">
            Learn modern farming techniques, crop management, livestock care, 
            and sustainable agriculture from expert instructors.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search courses by title or category..."
              className="w-full pl-12 pr-5 py-4 bg-white border border-gray-200 rounded-3xl focus:outline-none focus:border-emerald-500 shadow-sm text-base"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🌾</div>
          <h3 className="text-2xl font-semibold text-gray-700">No courses found</h3>
          <p className="text-gray-500 mt-2">We're adding more exciting courses soon!</p>
        </div>
      )}
    </div>
  );
};

export default CourseCatalog;