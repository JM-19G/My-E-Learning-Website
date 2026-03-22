// Example using createBrowserRouter (React Router v6)

import ProtectedRoute from './components/layout/ProtectedRoute';
import MyCourses from './pages/dashboard/MyCourses';
import CourseDetail from './pages/course/CourseDetail';
// ... other imports

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,           // your layout with Navbar etc.
    children: [
      { path: "login", element: <Login /> },
      { path: "catalog", element: <CourseCatalog /> },

      // Protected routes ↓
      {
        path: "my-courses",
        element: (
          <ProtectedRoute>
            <MyCourses />
          </ProtectedRoute>
        ),
      },
      {
        path: "courses/:courseId",
        element: (
          <ProtectedRoute>
            <CourseDetail />
          </ProtectedRoute>
        ),
        children: [
          { path: "lessons/:lessonId", element: <LessonPlayer /> }
        ]
      },
    ]
  }
]);