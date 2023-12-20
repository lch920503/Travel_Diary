import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const postUserFetch = async (data) => {
  const req = await axios.post(`${BASE_URL}/user`, data);
  return req.data;
};

export const getUserFetch = async () => {
  const res = await axios.get(`${BASE_URL}/user`);
  return res.data;
};
