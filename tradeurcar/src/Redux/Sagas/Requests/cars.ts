import axios from "axios";
import { API_URL } from "../../../Models/Constants";

export function requestGetCars() {
  return axios.request({
    method: "get",
    url: API_URL,
    auth: {
      username: "Hasher",
      password: "L#(qc{f}TaJu4%4k",
    },
  });
}
