// src/pages/dashboard/MyCourses.jsx

export default function MyCourses() {
  return (
    <div 
      style={{
        padding: '40px 20px',
        minHeight: '100vh',
        background: '#f5f8f5',
        color: '#1b3c1b',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <h1 style={{ color: '#2e7d32', marginBottom: '24px' }}>
        My Enrolled Courses
      </h1>
      
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          This is your dashboard where you'll see all the agriculture courses you've enrolled in.
        </p>
        
        <p style={{ color: '#555', marginTop: '16px' }}>
          (Currently empty — we'll add your enrolled courses list + progress here soon)
        </p>
        
        <button
          onClick={() => alert("This button works! Dashboard is now loading correctly.")}
          style={{
            marginTop: '24px',
            padding: '12px 28px',
            fontSize: '16px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Test Dashboard
        </button>
      </div>
    </div>
  );
}