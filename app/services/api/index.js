import axios from 'axios'

import Api from './Api';
// const API_BASE_URL = 'http://07339973.ngrok.io'
const yourIp = '192.168.8.102'
const port = '3000'

const API_BASE_URL = `http://${yourIp}:${port}`




const apiInstance = new Api(API_BASE_URL);





export {
  apiInstance,
};
export default apiInstance.axios;

// export default axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// })