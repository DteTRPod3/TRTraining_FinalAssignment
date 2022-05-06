import axios from "axios";
import { API_URL } from "../../../constants";

export function requestGetCars(carType: string, used?: boolean) {
  const url = (used === undefined) ? API_URL + "/" + carType : API_URL + "/" + carType + "?used=" + used; 
  return axios.request({
    method: "get",
    url: url,
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
