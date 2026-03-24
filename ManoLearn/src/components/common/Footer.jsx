// src/components/common/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-3xl">🌾</span>
          <h3 className="text-2xl font-bold">ManoLearn</h3>
        </div>
        <p className="text-emerald-300 text-sm">
          Empowering farmers and agriculture students with quality e-learning
        </p>
        <p className="text-emerald-400 text-xs mt-6">
          © 2026 ManoLearn. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;  