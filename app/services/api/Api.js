import axios, { AxiosInstance } from 'axios';

export default class Api {
  axiosApi

  constructor(baseUrl) {
    this.axiosApi = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
