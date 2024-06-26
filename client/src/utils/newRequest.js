import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://rudra-app-backend.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
