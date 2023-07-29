import axios from "axios";

const instance = axios.create({
  baseURL: "https://stichhub-backend-jpa9f4hnr-stichhub.vercel.app/",
  // baseURL: "http://localhost:5000", //! For using local Development, use this URL to connect to your local server.
});

instance.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  } else if (localStorage.getItem("tailorProfile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("tailorProfile")).token
    }`;
  }

  return req;
});

export default instance;
