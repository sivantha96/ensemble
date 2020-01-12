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


  get axios() {
    return this.axiosApi;
  }
}
