import axios from 'axios';

// axios instance
export const AXIOS_INSTANCE = (baseURL, accessToken) =>
  axios.create({
    baseURL,
    timeout: 120000,
    headers: {
      'content-type': 'application/json;',
      'Access-Control-Allow-Origin': '*',
      'authorization': `Bearer ${accessToken}`,
    }
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
