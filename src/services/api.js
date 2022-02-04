import axiosInstance from './axiosInstance';

export const getCourseContent = async courseId => {
  return await axiosInstance.post(`/course-content?course_id=${courseId}`);
};

export const getLesson = async lessonId => {
  return await axiosInstance.post(`/lesson?lesson_id=${lessonId}`);
};
