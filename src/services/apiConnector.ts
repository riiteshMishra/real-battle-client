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

const ApiConnector = async ({
  method,
  url,
  body,
  headers,
  params,
}: ApiConnectorProps): Promise<AxiosResponse> => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: body,
      headers,
      params,
    });

    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default ApiConnector;
