// src/pages/course/CourseDetail.jsx
import { useParams, Link } from 'react-router-dom';
import courses from '../../data/courses';
import useProgress from '../../hooks/UseProgress';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const { progress } = useProgress(id);

  const enrolledIds = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
  const alreadyEnrolled = enrolledIds.includes(parseInt(id));

  const handleEnroll = () => {
    let enrolled = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    if (!enrolled.includes(parseInt(id))) {
      enrolled.push(parseInt(id));
      localStorage.setItem('enrolledCourses', JSON.stringify(enrolled));
      window.location.reload(); // Instant professional update
    }
  };

  if (!course) return <div className="p-10 text-center text-2xl">Course Not Found</div>;

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm mb-6">
              {course.category} • {course.level}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6">
              {course.title}
            </h1>
            <p className="text-emerald-100 text-xl">{course.description}</p>
          </div>
          <div className="text-center lg:text-right">
            <div className="text-8xl mb-4">{course.image}</div>
            <div className="text-5xl font-bold">Free</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-sm p-10">
            <h2 className="text-3xl font-semibold mb-8">What you'll learn</h2>
            <p className="text-gray-700 text-lg mb-12">{course.description}</p>
            <h2 className="text-3xl font-semibold mb-6">Course Lessons</h2>
            <div className="space-y-4">
              {course.lessons?.map((lesson, index) => (
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
                  <span className="text-emerald-600">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-8">
              <div className="text-center mb-8">
                <div className="text-7xl mb-4">{course.image}</div>
                <div className="text-4xl font-bold text-emerald-700">Free</div>
              </div>
              {!alreadyEnrolled ? (
                <button
                  onClick={handleEnroll}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 rounded-2xl text-lg transition"
                >
                  Enroll Free
                </button>
              ) : (
                <div className="w-full bg-emerald-100 text-emerald-700 font-semibold py-4 rounded-2xl text-center text-lg">
                  ✓ Enrolled
                </div>
              )}
              {progress > 0 && (
                <div className="mt-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Your Progress</span>
                    <span className="font-medium">{progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetail;