import axios from "axios";

const axiosApi = axios.create({
   baseURL: "http://209.38.228.54:8080/api",
});

export default axiosApi;