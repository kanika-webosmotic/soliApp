import axios from 'axios';

const commonOptions = {
  withCredentials: true,
  timeout: 9000,
  headers: {
    get: {},
    post: {},
    common: {},
  },
};

const axiosInterceptor = instance => {
  instance.interceptors.request.use(
    request => {
      // request.headers = {
      //   ...request.headers,
      // };
      return request;
    },
    err => {
      console.error('error in interceptor request!!', err);
      throw err;
    },
  );
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      console.error('error in interceptor response!!', error);
      return Promise.reject(error);
    },
  );
};

const axiosInstance = axios.create({
  ...commonOptions,
  baseURL: 'https://devinnocb.wpengine.com/wp-json/innoterra/v2',
});
axiosInterceptor(axiosInstance);

export default axiosInstance;
