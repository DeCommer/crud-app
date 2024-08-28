import axios from 'axios';
const apiClient = axios.create({ baseURL: 'http://127.0.0.1:8080' });
export const getHelloWorldBean = (username) => apiClient.get(`/hello-world-path-variable/${username}`);
