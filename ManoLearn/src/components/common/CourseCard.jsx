// src/components/common/CourseCard.jsx
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
      {/* Image / Emoji Header */}
      <div className="h-52 bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-8xl relative">
        <span className="drop-shadow-lg">{course.image}</span>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-2xl text-xs font-semibold text-emerald-700">
          {course.level}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium uppercase tracking-widest text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
            {course.category}
          </span>
          <span className="text-sm text-gray-500">{course.duration}</span>
        </div>

        <h3 className="font-semibold text-xl leading-tight text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-700 transition">
          {course.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-amber-500">
            ★ <span className="text-gray-700 font-medium">{course.rating}</span>
          </div>
          <div className="text-gray-500">
            {course.students.toLocaleString()} students
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            to={`/course/${course.id}`}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3.5 rounded-2xl font-semibold transition"
          >
            View Details
          </Link>
          
          <button className="flex-1 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-3.5 rounded-2xl font-semibold transition">
            Enroll Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;