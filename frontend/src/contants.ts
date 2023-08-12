import axios from "axios";

export const baseURL = ''

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
})