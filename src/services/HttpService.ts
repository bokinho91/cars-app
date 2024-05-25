import axios, { AxiosInstance } from "axios";

export default class HttpService {
  protected client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:5000/api/",
    });
  }
}
