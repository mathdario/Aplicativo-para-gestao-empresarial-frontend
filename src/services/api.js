import axios from "axios";

export default axios.create({
  baseURL: "https://orca-app-52arz.ondigitalocean.app/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
