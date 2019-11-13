import axios from "axios";

class HttpRequestService {
    constructor() {
        this._axiosInstance = axios.create({
            // baseURL: process.env.VUE_APP_URL_API
            baseURL: 'http://localhost:52168/contact-list'
    });
    }

    get axios() { return this._axiosInstance; }
}

export default new HttpRequestService();