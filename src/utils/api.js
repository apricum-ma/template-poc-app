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

export const parseJSON = response => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}
  
/**
 * Checks if a network request came back fine, and throws an error if not
 */
export const checkStatus = status => status >= 200 && status < 300
