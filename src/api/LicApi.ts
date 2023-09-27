import axios from "axios";

export const LicApi = axios.create({
  baseURL: 'http://31.220.108.16:8081'
})