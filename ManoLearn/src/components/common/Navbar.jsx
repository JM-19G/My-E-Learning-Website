// src/components/common/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'My Courses', path: '/my-courses' },
  ];

  return (
    <nav className="bg-white border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-2xl flex items-center justify-center text-2xl">
            🌱
          </div>
          <span className="font-bold text-2xl text-emerald-800">ManoLearn</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-emerald-600 ${
                location.pathname === link.path ? 'text-emerald-600 font-semibold' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          to="/login"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-2xl font-medium transition text-sm"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;