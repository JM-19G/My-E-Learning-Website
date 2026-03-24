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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Course Not Found</h2>
          <p className="text-gray-500 mt-4">The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="mt-6 inline-block bg-emerald-600 text-white px-8 py-3 rounded-2xl font-medium">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    setEnrolled(true);
    alert(`🎉 Successfully enrolled in "${course.title}"!\nYou can now access all lessons.`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-emerald-700 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {course.category}
              </span>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {course.level}
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6">{course.title}</h1>
            
            <div className="flex items-center gap-6 text-lg">
              <div> {course.instructor}</div>
              <div> {course.duration}</div>
              <div> {course.lessonsCount || course.lessons?.length || 0} lessons</div>
            </div>
          </div>

          <div className="flex-shrink-0 text-center lg:text-right">
            <div className="text-8xl mb-6">{course.image}</div>
            <div className="text-4xl font-bold">Free</div>
            <p className="text-emerald-200">for everyone</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">About This Course</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {course.description}
            </p>
          </div>

          {/* Lessons List */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              Course Lessons
              <span className="text-base font-normal text-gray-500">({course.lessons?.length || 0})</span>
            </h2>

            <div className="space-y-4">
              {course.lessons && course.lessons.length > 0 ? (
                course.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className="bg-white rounded-2xl p-6 flex items-center justify-between hover:shadow-md transition group"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                        <p className="text-sm text-gray-500">{lesson.duration}</p>
                      </div>
                    </div>
                    <Link
                      to={`/lesson/${course.id}/${lesson.id}`}
                      className="text-emerald-600 hover:text-emerald-700 font-medium group-hover:translate-x-1 transition"
                    >
                      Watch →
                    </Link>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-3xl p-12 text-center">
                  <p className="text-gray-500">Lessons will be added soon. Stay tuned!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-8 sticky top-8 shadow-sm">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">{course.image}</div>
              <div className="text-4xl font-bold text-emerald-700">Free</div>
            </div>

            {!enrolled ? (
              <button
                onClick={handleEnroll}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-2xl text-lg transition mb-4"
              >
                Enroll Now - It's Free
              </button>
            ) : (
              <div className="w-full bg-emerald-100 text-emerald-700 font-semibold py-4 rounded-2xl text-center text-lg">
                 You are enrolled!
              </div>
            )}

            <div className="mt-8 space-y-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Rating</span>
                <span className="font-medium"> {course.rating}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Students Enrolled</span>
                <span className="font-medium">{course.students?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Duration</span>
                <span className="font-medium">{course.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;