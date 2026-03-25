// src/components/common/CourseCard.jsx
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
      <div className="h-52 bg-gradient-to-br from-emerald-700 to-teal-700 flex items-center justify-center text-7xl relative overflow-hidden">
        <span>{course.image}</span>
        <div className="absolute top-4 right-4 bg-white/95 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
          {course.level}
        </div>
      </div>

      <div className="p-7">
        <div className="uppercase text-xs tracking-widest text-emerald-600 font-medium mb-2">
          {course.category}
        </div>

        <h3 className="font-semibold text-xl leading-tight text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-700 transition">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2 mb-5">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-sm mb-6">
          <div className="flex items-center gap-1 text-amber-500">
            ★ <span className="text-gray-700">{course.rating}</span>
          </div>
          <div className="text-gray-500">{course.students?.toLocaleString()} enrolled</div>
        </div>

        <div className="flex gap-3">
          <Link
            to={`/course/${course.id}`}
            className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3.5 rounded-2xl font-medium transition text-sm"
          >
            View Course
          </Link>
          <button className="flex-1 border border-emerald-700 text-emerald-700 hover:bg-emerald-50 py-3.5 rounded-2xl font-medium transition text-sm">
            Enroll Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;