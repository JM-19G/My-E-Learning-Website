// src/pages/course/CourseDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../../data/courses.js'; 
import { Link } from 'react-router-dom';

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === Number(courseId));

  if (!course) {
    return (
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#d32f2f' }}>Course not found</h1>
        <button
          onClick={() => navigate('/catalog')}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            background: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
      <button
        onClick={() => navigate('/catalog')}
        style={{
          marginBottom: '24px',
          padding: '10px 20px',
          background: '#e0e0e0',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        ← Back to Catalog
      </button>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
      }}>
        <img
          src={course.thumbnail}
          alt={course.title}
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />

        <div style={{ padding: '32px' }}>
          <h1 style={{ color: '#1b5e20', margin: '0 0 16px' }}>
            {course.title}
          </h1>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <span style={{
              background: '#e8f5e9',
              color: '#2e7d32',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              {course.level}
            </span>
            <span style={{
              background: '#e3f2fd',
              color: '#1565c0',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              {course.sector}
            </span>
          </div>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333', marginBottom: '32px' }}>
            {course.description}
          </p>

          <h2 style={{ color: '#2e7d32', margin: '0 0 20px' }}>Lessons</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {course.lessons.map(lesson => (
              <Link
                key={lesson.id}
                to={`/courses/${course.id}/lessons/${lesson.id}`}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  background: '#f5f5f5',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'background 0.2s'
                }}
                onMouseOver={e => e.currentTarget.style.background = '#e8f5e9'}
                onMouseOut={e => e.currentTarget.style.background = '#f5f5f5'}
              >
                <div>
                  <strong>{lesson.title}</strong>
                  <div style={{ color: '#666', fontSize: '0.9rem', marginTop: '4px' }}>
                    {lesson.duration}
                  </div>
                </div>
                <span style={{ color: '#4caf50' }}>▶</span>
              </Link>
            ))}
          </div>

          {/* We'll add "Enroll" button later – for now just browse lessons */}
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <button
              style={{
                padding: '14px 40px',
                background: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
              onClick={() => alert('Enrollment feature coming soon!')}
            >
              Enroll in this Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}