import axios from "axios";

export const baseURL = 'http://127.0.0.1:3000'

export const apiInstance = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
    },
})

export const apiAuthInstance = axios.create({
    baseURL: `${baseURL}/auth`,
    headers: {
        Accept: 'application/json',
    },
    // withCredentials: true
})