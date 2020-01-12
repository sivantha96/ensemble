import Api from './Api';


// const API_BASE_URL = 'http://07339973.ngrok.io'

//replace you IP here
const yourIp = '192.168.8.103'
//change your port here
const port = '3000'

const API_BASE_URL = `http://${yourIp}:${port}`


const apiInstance = new Api(API_BASE_URL);

export {
  apiInstance,
};
export default apiInstance.axios;