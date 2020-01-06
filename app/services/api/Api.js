import axios, { AxiosInstance } from 'axios';

export default class Api {
    axiosApi

  getAccessToken

  constructor(baseUrl, getAccessToken) {
    this.axiosApi = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.getAccessToken = getAccessToken;
    this.axiosApi.interceptors.request.use(
      async config => {
        if (this.getAccessToken) {
          const token = await this.getAccessToken();
          if (token) {
            config.headers.Authorization = `Bearer ${token}`; // eslint-disable-line no-param-reassign
          }
        }
        return config;
      },
      error => {
        console.log('token error', error);
        Promise.reject(error);
      },
    );
  }

  set token(token) {
    this.axiosApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  set tokenRetriever(getAccessToken) {
    this.getAccessToken = getAccessToken;
  }

  set baseUrl(baseUrl) {
    this.axiosApi.defaults.baseURL = baseUrl;
  }

  get axios() {
    return this.axiosApi;
  }
}
