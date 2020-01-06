import Api from './Api';
const API_BASE_URL = 'http://localhost:3000/'

const apiInstance = new Api(API_BASE_URL);

// const publicApi = new Api(API_BASE_URL).axios;




export {
//   publicApi,
  apiInstance,
};
export default apiInstance.axios;
