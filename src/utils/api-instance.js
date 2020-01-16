import axios from 'axios';

// axios instance
export const AXIOS_INSTANCE = baseURL =>
  axios.create({
    baseURL,
    timeout: 120000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
