import axios from "axios";
export const BASE_URL = "http://95.85.121.153:3030/";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${sessionStorage.getItem("my_token")}`,
  //   },
});
const AxiosInstanceFormData = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
  //   headers: {
  //     Authorization: `Bearer ${sessionStorage.getItem("my_token")}`,
  //     "Content-Type": "multipart/form-data",
  //   },
});
export { AxiosInstance };
export { AxiosInstanceFormData };
