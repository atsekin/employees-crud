import axios from 'axios';

export const baseURL = import.meta.env.VITE_API_BASE_URL ?? window?.location?.origin ?? '';

export const axiosInstance = axios.create({ baseURL });