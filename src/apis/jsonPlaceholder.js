import axios from "axios";

const JSON_PLACEHOLDER_BASE_URL = "https://jsonplaceholder.typicode.com";

export default axios.create({
  baseURL: JSON_PLACEHOLDER_BASE_URL
});
