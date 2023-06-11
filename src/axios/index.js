import axios from "axios";
const token = localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: "http://192.168.100.23:8000/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
