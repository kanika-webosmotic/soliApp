const initialState = {
  videoData: [
    {url: 'https://dl8.webmfiles.org/big-buck-bunny_trailer.webm'},
    {file: require('../../assets/bgVideo.mp4')},
    {file: require('../../assets/video.webm')},
    {file: require('../../assets/demo.webm')},
    {file: require('../../assets/demo2.mp4')},
  ],
};

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return {...state};
    default:
      return state;
  }
}

export default videoReducer;
