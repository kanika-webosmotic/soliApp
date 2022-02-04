const initialState = {
  data: [],
  lesson: {},
};

function courseContentReducer(state = initialState, action) {
  switch (action.type) {
    case 'COURSE_CONTENT_LIST':
      return {...state, data: action.payload};
    case 'SET_LESSON':
      return {...state, lesson: action.payload};
    default:
      return state;
  }
}

export const courseContentSelector = state => state.courseContent?.data;
export const lessonSelector = state => state.courseContent?.lesson;

export default courseContentReducer;
