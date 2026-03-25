// src/components/common/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              M
            </div>
            <div>
              <span className="font-bold text-2xl tracking-tight text-white">ManoLearn</span>
              <p className="text-xs text-emerald-500 -mt-1">Agriculture Academy</p>
            </div>
          </div>

          <div className="text-sm text-center md:text-right">
            Empowering farmers, students, and agribusiness professionals with world-class education.<br />
            © 2026 ManoLearn. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;