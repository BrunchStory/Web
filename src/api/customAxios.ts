import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://13.209.169.78:8080";
const DEFAULT_TIMEOUT = 30000; // 임시

const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "content-type": "application/json",
    },
    withCredentials: true,
    ...config, // 직접 옵션을 추가하는 경우
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const customAxios = createClient();
