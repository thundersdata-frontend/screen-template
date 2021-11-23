import { extend } from 'umi-request';
import { BACKEND_URL } from './constant';

const request = extend({
  headers: {
    'Content-Type': 'application/json',
    access_token: 'af5e29409eb39d06adf93775843d9800',
  },
  method: 'post',
  prefix: BACKEND_URL,
  credentials: 'include',
  responseType: 'json',
  mode: 'cors',
});

request.interceptors.request.use((url, options) => {
  if (!url.includes('?')) {
    return {
      url,
      options,
    };
  } else {
    const index = url.indexOf('?');
    const paramStr = url.substring(index + 1, url.length);
    const params = paramStr.split('&').map((param) => param.split('='));
    const data = {};
    params.forEach((param) => {
      const [key, value] = param;
      data[key] = value;
    });
    return {
      url: url.substring(0, index),
      options: {
        ...options,
        data,
      },
    };
  }
});

request.interceptors.response.use(
  (response) => {
    response.clone().json();
    return response;
  },
  { global: false },
);

export default request;
