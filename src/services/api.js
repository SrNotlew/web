import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3690/"
});

export default api;