// src/App.jsx

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AuthProvider } from './store/AuthContext.jsx';
import ProtectedRoute from './components/layout/ProtectedRoute.jsx';

// Pages
import Login from './pages/auth/Login.jsx';
import CourseCatalog from './pages/catalog/CourseCatalog.jsx';
import CourseDetail from './pages/course/CourseDetail.jsx';
import LessonPlayer from './pages/lesson/LessonPlayer.jsx';
import MyCourses from './pages/dashboard/MyCourses.jsx';

// Simple layout (you can make this nicer later - Navbar, Footer, etc.)
function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* You can put Navbar here later */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      {/* You can put Footer here later */}
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // Public routes
      {
        path: 'login',
        element: <Login />,
      },

      // Anyone can browse catalog (you can protect it later if you want)
      {
        path: 'catalog',
        element: <CourseCatalog />,
      },

      // Protected routes - require login
      {
        path: 'my-courses',
        element: (
          <ProtectedRoute>
            <MyCourses />
          </ProtectedRoute>
        ),
      },

      // Course detail + nested lesson player
      {
        path: 'courses/:courseId',
        element: (
          <ProtectedRoute>
            <CourseDetail />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'lessons/:lessonId',
            element: <LessonPlayer />,
          },
        ],
      },

      // Optional: redirect root to catalog or login
      {
        path: '/',
        element: <Login />, 
      },
    ],
  },
],
  {
   future: {
     v7_startTransition: true, 
   },
});


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} 
       future={{ v7_startTransition: true }}
      />
    </AuthProvider>
  );
}

// Very important: default export
export default App;