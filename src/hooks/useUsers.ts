import { API } from "@/resources";
import { useQuery } from "@tanstack/react-query";
import { IPageParams } from "@/resources/Users/interface";

interface IProps {
  pageParams: IPageParams;
}

export const userKeys = {
  GET_ALL_USERS: "get_all_users",
  GET_USER: "get_user",
};

export const useGetUsers = ({ pageParams }: IProps) => {
  return useQuery({
    queryKey: [userKeys.GET_ALL_USERS, pageParams],
    queryFn: () => API.Users.getUsers(pageParams),
  });
};

export const useGetUser = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: [userKeys.GET_USER, id],
    queryFn: () => API.Users.getUser(id),
  });
};
  