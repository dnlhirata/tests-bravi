import axios from "axios";

class HttpRequestService {
    constructor() {
        this._axiosInstance = axios.create({
            baseURL: process.env.VUE_APP_URL_API
        });
    }

    get axios() { return this._axiosInstance; }
}

export default new HttpRequestService();