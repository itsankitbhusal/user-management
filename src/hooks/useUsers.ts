import { API } from "@/resources";
import { useQuery } from "@tanstack/react-query";

export const userKeys = {
    GET_ALL_USERS: "get_all_users"
}

export const useGetUsers = () => {
    return useQuery({
        queryKey: [userKeys.GET_ALL_USERS],
        queryFn: () => API.Users.getUsers(),
    })
};
