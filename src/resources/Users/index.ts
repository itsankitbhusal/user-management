import fetch from "@/utils/fetchWrapper";
import { apiUrls } from "@/constants/apiUrls";
import { IUser } from "./interface";

export const getUsers = () : Promise<IUser[]> => fetch(apiUrls.Users.GET_ALL_USERS);