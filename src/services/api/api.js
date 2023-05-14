import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(
    async config => {
        const idToken = sessionStorage.getItem("accessToken");

        if (idToken) {
            config.headers["x-auth"] = idToken;
            config.headers["X-Requested-With"] = "XMLHttpRequest";
            config.headers["Access-Control-Allow-Origin"] = "*";
            config.headers["Access-Control-Allow-Methods"] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
            config.withCredentials = false;
            config.credentials = false;
        }

        return config;
    },
    error => {
        Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => response.data,
    async error => {
        const statusCode = error.response?.status;

        if (statusCode === 401) {
            window.location.assign(`${process.env.REACT_APP_APP_URL}/login`);
        }

        return Promise.reject(error);
    }
);

export default api;
