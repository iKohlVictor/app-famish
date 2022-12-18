import axios from "axios";
import { environment } from "../core/environment/environment";
export const apiConnection = axios.create({
  baseURL: environment.API_ROOT,
  responseType: "json",
});
