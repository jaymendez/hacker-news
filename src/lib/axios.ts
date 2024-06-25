import axios, { AxiosHeaders } from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const version = `v0`;
const headers: Partial<AxiosHeaders> = {};

export default axios.create({
  baseURL: `${apiBaseUrl}/${version}/`,
  headers,
});
