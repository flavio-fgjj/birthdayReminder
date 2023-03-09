/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import {Platform} from 'react-native';

const api = axios.create({
  baseURL: Platform.OS === 'ios' ? 'http://localhost/' : 'http://10.0.2.2/',
});

api.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  configuration => Promise.resolve(configuration),
  error => Promise.reject(error),
);

export default api;