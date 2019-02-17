import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:7000/api/v1',
});

const makeAPIRequest = (url, options = { method: 'GET' }) =>
  axiosInstance({
    url,
    method: options.method,
    data: options.body,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userAuthToken')}`,
    },
  }).then(response => response.data);

export { makeAPIRequest, axiosInstance };
