// src/pages/lesson/LessonPlayer.jsx
import { useParams, Link } from 'react-router-dom';
import courses from '../../data/courses';

const LessonPlayer = () => {
  const { courseId, lessonId } = useParams();

  const course = courses.find(c => c.id === parseInt(courseId));
  const lesson = course?.lessons?.find(l => l.id === parseInt(lessonId));

  if (!course || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Lesson Not Found</h2>
          <Link to="/courses" className="text-emerald-600 hover:underline">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to={`/course/${course.id}`} className="flex items-center gap-3 text-emerald-600 hover:text-emerald-700 font-medium">
            ← Back to {course.title}
          </Link>
          <div className="font-semibold text-gray-800">{course.title}</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Video Player */}
          <div className="lg:col-span-8">
            <div className="bg-black rounded-3xl overflow-hidden shadow-xl aspect-video mb-8">
              <iframe
                className="w-full h-full"
                src={lesson.content}
                title={lesson.title}
                allowFullScreen
              ></iframe>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-3">{lesson.title}</h1>
            <p className="text-gray-600 text-lg">{lesson.duration}</p>
          </div>

          {/* Sidebar - Course Progress / Lessons List */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
              <h3 className="font-semibold text-lg mb-5">Course Lessons</h3>
              
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                {course.lessons.map((l, index) => (
                  <Link
                    key={l.id}
                    to={`/lesson/${course.id}/${l.id}`}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition ${
                      l.id === parseInt(lessonId)
                        ? 'bg-emerald-50 border border-emerald-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-sm font-medium flex-shrink-0
                      ${l.id === parseInt(lessonId) ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium truncate ${l.id === parseInt(lessonId) ? 'text-emerald-700' : 'text-gray-800'}`}>
                        {l.title}
                      </p>
                      <p className="text-xs text-gray-500">{l.duration}</p>
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