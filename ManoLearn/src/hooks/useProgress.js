// src/hooks/useProgress.js
import { useState, useEffect } from 'react';

const useProgress = (courseId) => {
  const [progress, setProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress_${courseId}`);
    if (savedProgress) {
      setProgress(parseInt(savedProgress));
    }

    const savedLessons = localStorage.getItem(`completed_${courseId}`);
    if (savedLessons) {
      setCompletedLessons(JSON.parse(savedLessons));
    }
  }, [courseId]);

  const markLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      const newCompleted = [...completedLessons, lessonId];
      setCompletedLessons(newCompleted);

      const newProgress = Math.min(Math.round((newCompleted.length / 8) * 100), 100);
      setProgress(newProgress);

      localStorage.setItem(`progress_${courseId}`, newProgress);
      localStorage.setItem(`completed_${courseId}`, JSON.stringify(newCompleted));
    }
  };

  const resetProgress = () => {
    setProgress(0);
    setCompletedLessons([]);
    localStorage.removeItem(`progress_${courseId}`);
    localStorage.removeItem(`completed_${courseId}`);
  };

  return {
    progress,
    completedLessons,
    markLessonComplete,
    resetProgress
  };
};

export default useProgress;