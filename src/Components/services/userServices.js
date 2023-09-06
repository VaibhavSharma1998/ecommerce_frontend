import axios from "axios";
import { base_url } from "../../App";

export const register = async (data) => {
    return await axios.post(`${base_url}/register`, data)
}