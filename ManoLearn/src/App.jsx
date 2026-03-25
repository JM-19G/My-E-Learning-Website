// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import CourseCatalog from './pages/catalog/CourseCatalog';
import CourseDetail from './pages/course/CourseDetail';
import LessonPlayer from './pages/lesson/LessonPlayer';
import MyCourses from './pages/dashboard/MyCourses';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Routes>
        {/* Public Route - Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes with Navbar & Footer */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<CourseCatalog />} />
                  <Route path="/courses" element={<CourseCatalog />} />
                  <Route path="/course/:id" element={<CourseDetail />} />
                  <Route path="/lesson/:courseId/:lessonId" element={<LessonPlayer />} />
                  <Route path="/my-courses" element={<MyCourses />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;