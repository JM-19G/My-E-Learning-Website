// src/pages/auth/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleDemoLogin = (e) => {
    e.preventDefault();

    if (email === 'demo@manolearn.com' && password === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/courses');           // This redirects you properly
    } else {
      alert('❌ Wrong credentials\n\nUse:\ndemo@manolearn.com\n123456');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-emerald-700 rounded-3xl flex items-center justify-center text-white text-4xl font-bold mb-4">
            M
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">ManoLearn</h1>
          <p className="text-emerald-600 mt-1">Agriculture Academy</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-8">Sign in to continue your learning</p>

          <form onSubmit={handleDemoLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@manolearn.com"
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-200 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="123456"
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-200 transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 rounded-2xl text-lg transition duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-500">
            Demo Credentials:<br />
            <span className="font-mono text-emerald-700">demo@manolearn.com</span> / <span className="font-mono text-emerald-700">123456</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;