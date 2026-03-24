// src/pages/Login.jsx   (or replace in your login file)

import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDemoLogin = () => {
    // For now just alert - we'll connect real auth later
    alert(`Welcome to ManoLearn! 🌱\nDemo login successful with:\nEmail: ${email || 'demo@manolearn.com'}\nPassword: ${password || '123456'}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-10">
          <div className="mx-auto w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg">
            🌾
          </div>
          <h1 className="text-4xl font-bold text-emerald-800 tracking-tight">ManoLearn</h1>
          <p className="text-emerald-600 mt-2 text-lg">Agriculture E-Learning Platform</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-8">Login to continue your farming journey</p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@manolearn.com"
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="123456"
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition"
              />
            </div>

            <button
              onClick={handleDemoLogin}
              className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-4 rounded-2xl text-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Login (Demo) 🌱
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            Demo credentials:<br />
            <span className="font-medium text-emerald-700">demo@manolearn.com</span> / <span className="font-medium text-emerald-700">123456</span>
          </p>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Real authentication coming soon • Built for farmers & students
        </p>
      </div>
    </div>
  );
};

export default Login;