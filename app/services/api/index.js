import axios from 'axios'

import Api from './Api';
const API_BASE_URL = ' http://07339973.ngrok.io'


// const apiInstance = new Api(API_BASE_URL);

// const publicApi = new Api(API_BASE_URL).axios;




// export {
// //   publicApi,
//   apiInstance,
// };
// export default apiInstance.axios;

export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})