// src/pages/catalog/CourseCatalog.jsx
import { courses } from '../../data/courses.js';

export default function CourseCatalog() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ color: '#2e7d32', marginBottom: '32px' }}>
        Agriculture Courses
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {courses.map(course => (
          <div
            key={course.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              style={{ width: '100%', height: '160px', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px' }}>
              <h3 style={{ margin: '0 0 8px', color: '#1b5e20' }}>
                {course.title}
              </h3>
              <p style={{ color: '#555', fontSize: '0.95rem', margin: '0 0 12px' }}>
                {course.level} • {course.sector}
              </p>
              <button
                style={{
                  padding: '10px 20px',
                  background: '#4caf50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => alert(`Enroll in ${course.title} – coming soon`)}
              >
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}