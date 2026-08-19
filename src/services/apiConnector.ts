import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

interface ApiConnectorProps {
  method: AxiosRequestConfig["method"];
  url: string;
  body?: unknown;
  headers?: AxiosRequestConfig["headers"];
  params?: Record<string, unknown>;
}

const apiConnector = async <T = unknown>({
  method,
  url,
  body,
  headers,
  params,
}: ApiConnectorProps): Promise<AxiosResponse<T>> => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: body,
      headers,
      params,
    });

    return response;
  } catch (error: any) {
    console.error("API Error:", error.message);

    if (error.response?.status === 401) {
      console.warn("Unauthorized - Token might be expired");
    }

    throw error;
  }
};

export default apiConnector;
