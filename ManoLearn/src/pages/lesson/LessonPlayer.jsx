import { useParams } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress';

const LessonPlayer = () => {
  const { courseId, lessonId } = useParams();
  const { markComplete, getProgressPercentage } = useProgress(Number(courseId));

  const lesson = courses.find(c => c.id === Number(courseId))
                    ?.lessons.find(l => l.id === Number(lessonId));

  return (
    <div>
      <h1>{lesson?.title}</h1>
      <iframe width="100%" height="500" src={lesson?.content} title="Lesson Video" />
      <button onClick={() => markComplete(lessonId)}>
        Mark as Complete
      </button>
      <p>Course Progress: {getProgressPercentage()}%</p>
    </div>
  );
};