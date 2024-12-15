import { useAuthStore } from "@/store/auth";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

interface ICustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

API.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error: AxiosError) {
    const originalRequest: ICustomAxiosRequestConfig | undefined = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/refresh`,
          {
            refreshToken: useAuthStore.getState().refreshToken,
          }
        );

        const { accessToken } = response.data;

        useAuthStore.setState({ accessToken });

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return API(originalRequest);
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 403) {
          useAuthStore.getState().removeCredentials();
          return;
        }
      }
    }

    return Promise.reject(error);
  }
);

export default API;
