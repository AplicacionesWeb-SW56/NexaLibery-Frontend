import { authenticationInterceptor } from "@/iam/services/authentication.interceptor";
import axios from "axios";

// Assuming you are using Vite for your project setup
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const http = axios.create({
    baseURL: API_BASE_URL,
});

// default headers
http.defaults.headers.common['Content-Type'] = 'application/json';
http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// interceptors
http.interceptors.request.use(authenticationInterceptor);

export default http;

// const API_AUX_URL = import.meta.env.VITE_API_AUX_URL;
// export const auxHttp = axios.create({
//     baseURL: API_AUX_URL,
// });
//
// // default headers
// http.defaults.headers.common['Content-Type'] = 'application/json';
// http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//
// // interceptors
// http.interceptors.request.use(authenticationInterceptor);
