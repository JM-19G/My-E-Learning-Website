// src/pages/lesson/LessonPlayer.jsx
import { useParams, Link } from 'react-router-dom';
import courses from '../../data/courses';
import useProgress from '../../hooks/UseProgress';
// import { useProgress } from '../../hooks/useProgress';

const LessonPlayer = () => {
  const { courseId, lessonId } = useParams();
  const course = courses.find(c => c.id === parseInt(courseId));
  const lesson = course?.lessons?.find(l => l.id === parseInt(lessonId));
  const { markLessonComplete, progress } = useProgress(courseId);

  if (!course || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Lesson Not Found</h2>
          <Link to="/courses" className="mt-6 text-emerald-700 hover:underline inline-block">
            ← Return to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to={`/course/${course.id}`} className="flex items-center gap-3 text-emerald-700 hover:text-emerald-800 font-medium">
            ← Back to Course
          </Link>
          <div className="font-semibold text-gray-900">{course.title}</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video mb-8">
              <iframe
                className="w-full h-full"
                src={lesson.content}
                title={lesson.title}
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-semibold text-gray-900 mb-3">{lesson.title}</h1>
                <p className="text-gray-600">{lesson.duration}</p>
              </div>
              <button
                onClick={() => markLessonComplete(parseInt(lessonId))}
                className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl text-sm font-medium transition"
              >
                Mark as Complete
              </button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-8">
              <h3 className="font-semibold text-xl mb-6">Course Content</h3>
              <div className="space-y-3 max-h-[520px] overflow-y-auto">
                {course.lessons.map((l, index) => (
                  <Link
                    key={l.id}
                    to={`/lesson/${course.id}/${l.id}`}
                    className={`flex gap-4 p-5 rounded-2xl border transition-all ${
                      l.id === parseInt(lessonId) ? 'border-emerald-600 bg-emerald-50' : 'hover:border-gray-200'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-2xl flex-shrink-0 flex items-center justify-center text-sm font-medium
                      ${l.id === parseInt(lessonId) ? 'bg-emerald-700 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium leading-tight ${l.id === parseInt(lessonId) ? 'text-emerald-700' : 'text-gray-900'}`}>
                        {l.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{l.duration}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlayer;