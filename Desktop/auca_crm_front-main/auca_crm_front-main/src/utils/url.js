import axios from 'axios';

export const BASE_URL = 'http://164.92.129.71:8081'

const http = axios.create({
    baseURL: BASE_URL
});

// http.post("/api/users/sign_up/", data).catch((err) => console.log(err));
export default http
