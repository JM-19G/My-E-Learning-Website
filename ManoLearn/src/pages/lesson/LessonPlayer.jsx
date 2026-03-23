// src/pages/lesson/LessonPlayer.jsx
import { useParams } from 'react-router-dom';

export default function LessonPlayer() {
  const { courseId, lessonId } = useParams();

  return (
    <div style={{
      padding: '40px 20px',
      background: '#f8fafc',
      minHeight: '100vh'
    }}>
      <h2 style={{ color: '#1a5c37' }}>Lesson Player (Safe Mode)</h2>
      
      <div style={{
        marginTop: '24px',
        padding: '24px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <p><strong>Course ID:</strong> {courseId || 'not found'}</p>
        <p><strong>Lesson ID:</strong> {lessonId || 'not found'}</p>
        
        <p style={{ marginTop: '20px', color: '#d32f2f', fontWeight: 500 }}>
          This is a safe version — real video + progress coming after we fix data import
        </p>
      </div>
    </div>
  );
}