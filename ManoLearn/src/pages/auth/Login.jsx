// src/pages/auth/Login.jsx
import { useAuth } from '../../store/AuthContext';  // adjust path
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleDemoLogin = () => {
    login('demo@manolearn.com', '123456');  // calls your fake login
    navigate('/catalog');  // redirect to courses after "login"
  };

  return (
    <div style={{ padding: '60px 20px', maxWidth: '420px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#2e7d32' }}>Login to ManoLearn</h1>
      
      <p style={{ margin: '24px 0', color: '#555' }}>
        Use demo credentials:
      </p>
      <p><strong>Email:</strong> demo@manolearn.com</p>
      <p><strong>Password:</strong> 123456</p>

      <button
        onClick={handleDemoLogin}
        style={{
          marginTop: '32px',
          width: '100%',
          padding: '14px',
          background: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Login (demo)
      </button>

      <p style={{ marginTop: '24px', color: '#777' }}>
        (Placeholder – real login coming later)
      </p>
    </div>
  );
}