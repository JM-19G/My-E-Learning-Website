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
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-700 rounded-2xl flex items-center justify-center text-white text-2xl font-semibold">
            M
          </div>
          <div>
            <span className="font-bold text-2xl tracking-tight text-gray-900">ManoLearn</span>
            <p className="text-[10px] text-emerald-600 -mt-1">Agriculture Academy</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-emerald-700 ${
                location.pathname === link.path 
                  ? 'text-emerald-700 font-semibold' 
                  : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          to="/login"
          className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium rounded-2xl transition"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;