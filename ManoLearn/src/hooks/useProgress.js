import { useState, useEffect } from 'react';

export const useProgress = (courseId) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(`progress_${courseId}`);
    return saved ? JSON.parse(saved) : {};
  });

  const markComplete = (lessonId) => {
    const updated = { ...progress, [lessonId]: true };
    setProgress(updated);
    localStorage.setItem(`progress_${courseId}`, JSON.stringify(updated));
  };

  const getProgressPercentage = () => {
    const total = courses.find(c => c.id === courseId)?.lessons.length || 0;
    const completed = Object.keys(progress).length;
    return total ? Math.round((completed / total) * 100) : 0;
  };

  return { progress, markComplete, getProgressPercentage };
};