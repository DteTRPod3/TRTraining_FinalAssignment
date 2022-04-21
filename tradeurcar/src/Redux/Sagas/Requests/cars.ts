import axios from "axios";
import { API_URL } from "../../../Models/Constants";

export function requestGetCars(carType: string) {
  return axios.request({
    method: "get",
    url: API_URL + "/" + carType,
    auth: {
      username: "Hasher",
      password: "L#(qc{f}TaJu4%4k",
    },
  });
}

export function requestGetCarDetails(carid: string) {
  return axios.request({
    method: "get",
    url: API_URL + "/details/" + carid,
    auth: {
      username: "Hasher",
      password: "L#(qc{f}TaJu4%4k",
    },
  });
}
