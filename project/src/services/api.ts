import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';
import StatusCodes from 'http-status-codes';
import browserHistory from '../browser-history';
import { toast } from 'react-toastify';

const BACKEND_URL = 'https://12.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 15000;
const TOKEN_HEADER = 'x-token';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers[TOKEN_HEADER] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (err: AxiosError<{ error: string }>) => {
      if (err.response && err.response.status === StatusCodes.NOT_FOUND) {
        browserHistory.push('/404');
        return;
      }

      if (err.response && err.response.status !== StatusCodes.UNAUTHORIZED) {
        toast.warn(err.response.data.error);
      }

      throw err;
    }
  );

  return api;
};
