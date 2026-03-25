// src/components/layout/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Simple demo auth check - in real app use your AuthContext
  const isAuthenticated = true;   // Change to false to test redirect

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;