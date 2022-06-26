/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance } from "axios";

const axiosConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
    // timeout: 4000,
};

const instance: AxiosInstance = axios.create(axiosConfig);

class HttpServices {
    async get(url: string, config?: any) {
        const data = await instance.get(url, config);
        return data;
    }
}

const httpReq = new HttpServices();

export default httpReq;
