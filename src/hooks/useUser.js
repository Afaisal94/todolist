import axios from "axios";
import { BaseApiUrl } from "@/utils/BaseApiUrl";

const registerUser = async ({ name, email, password }) => {
  const response = await axios.post(`${BaseApiUrl}/register`, {
    name,
    email,
    password,
  });
  return response.data;
};

export { registerUser };
