import { request } from "./request";
import { IPhoto } from "@/types/index";
import { AxiosResponse } from "axios";

export function getPhotos(): Promise<AxiosResponse<IPhoto[]>> {
  return request({
    method: "get",
    url: "/photos?_limit=6",
  });
}
