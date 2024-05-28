import { create } from "axios";
import { API_BASE_URL } from "../config/apiConfig";

const apiClient = create({
  baseURL: API_BASE_URL,
});

export default apiClient;
