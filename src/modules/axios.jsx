import axios from "axios";

export const getApiClient = () => {
  return axios.create({
    headers: { "Content-Type": "application/vnd.collection+json" },
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  });
};
