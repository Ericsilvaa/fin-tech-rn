import axios from "axios";

import {
  requestErrorHandler,
  requestInterceptor,
  responseErrorHandler,
  responseInterceptor,
} from "./axiosHelperMethods";

const api = axios.create({
  baseURL: "",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

api.interceptors.request.use(requestInterceptor, requestErrorHandler);
api.interceptors.response.use(responseInterceptor, responseErrorHandler);
