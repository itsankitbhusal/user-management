import fetch from "@/utils/fetchWrapper";
import { apiUrls } from "@/constants/apiUrls";
import { IPageParams, IUser } from "./interface";

export const getUsers = (pageParams: IPageParams): Promise<IUser[]> => {
    const params = new URLSearchParams();
    if (pageParams.page) params.set("_page", pageParams.page.toString());
    if (pageParams.limit) params.set("_limit", pageParams.limit.toString());
    if (pageParams.q) params.set("q", pageParams.q);
    const url = `${apiUrls.Users.GET_ALL_USERS}?${params.toString()}`;
    
    return fetch(url);
}

export const getUser = (id: number): Promise<IUser> => {
    const url = `${apiUrls.Users.GET_USER}${id}`;
    return fetch(url);
}