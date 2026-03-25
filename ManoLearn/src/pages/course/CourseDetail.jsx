// src/pages/course/CourseDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import courses from '../../data/courses';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const [enrolled, setEnrolled] = useState(false);

  if (!course) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Course Not Found</h2>
          <Link to="/courses" className="mt-6 inline-block text-emerald-700 hover:underline">
            ← Back to All Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    setEnrolled(true);
    alert(`Successfully enrolled in "${course.title}"`);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section */}
      <div className="bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm mb-6">
              {course.category} • {course.level}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6">
              {course.title}
            </h1>
            <p className="text-emerald-100 text-xl max-w-lg">{course.description}</p>
          </div>

          <div className="text-center lg:text-right">
            <div className="text-8xl mb-4">{course.image}</div>
            <div className="text-5xl font-bold">Free</div>
            <p className="text-emerald-300">Lifetime access</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-sm p-10">
            <h2 className="text-3xl font-semibold mb-8">What you'll learn</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-12">
              {course.description}
            </p>

            <h2 className="text-3xl font-semibold mb-6">Course Lessons</h2>
            <div className="space-y-4">
              {course.lessons && course.lessons.length > 0 ? (
                course.lessons.map((lesson, index) => (
                  <Link
                    key={lesson.id}
                    to={`/lesson/${course.id}/${lesson.id}`}
                    className="flex items-center justify-between p-6 border border-gray-100 rounded-2xl hover:border-emerald-200 group"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-emerald-700">{lesson.title}</p>
                        <p className="text-sm text-gray-500">{lesson.duration}</p>
                      </div>
                    </div>
                    <span className="text-emerald-600 group-hover:translate-x-1 transition">→</span>
                  </Link>
                ))
              ) : (
                <p className="text-gray-500 py-8">Lessons coming soon...</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-8">
              <div className="text-center mb-8">
                <div className="text-7xl mb-4">{course.image}</div>
                <div className="text-4xl font-bold text-emerald-700">Free</div>
              </div>

              {!enrolled ? (
                <button
                  onClick={handleEnroll}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 rounded-2xl text-lg transition"
                >
                  Enroll in this Course
                </button>
              ) : (
                <div className="w-full bg-emerald-100 text-emerald-700 font-semibold py-4 rounded-2xl text-center text-lg">
                  ✓ Enrolled
                </div>
              )}

              <div className="mt-10 space-y-5 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Instructor</span>
                  <span className="font-medium">{course.instructor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-medium">★ {course.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Enrolled Students</span>
                  <span className="font-medium">{course.students?.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;