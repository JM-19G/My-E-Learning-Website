// src/pages/catalog/CourseCatalog.jsx
import CourseCard from '../../components/common/CourseCard';
import courses from '../../data/courses';

const CourseCatalog = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Explore Our Courses
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl">
          High-quality agricultural education designed for students, farmers, and agribusiness professionals.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by course title or category..."
            className="w-full pl-12 pr-5 py-4 bg-white border border-gray-200 rounded-3xl focus:outline-none focus:border-emerald-600 text-base"
          />
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;