import axios from "axios";

// Assuming you are using Vite for your project setup
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const http = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

export default http;
