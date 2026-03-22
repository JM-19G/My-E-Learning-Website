// src/components/layout/ProtectedRoute.jsx

import { Navigate } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';   // adjust path if your folder structure is different

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // If user is logged in → show the protected content
  // If not → redirect to login page
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;