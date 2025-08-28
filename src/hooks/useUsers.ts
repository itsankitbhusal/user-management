import { API } from "@/resources";
import { useQuery } from "@tanstack/react-query";
import { IPageParams } from "@/resources/Users/interface";

interface IProps {
  pageParams: IPageParams;
}

export const userKeys = {
  GET_ALL_USERS: "get_all_users",
};

export const useGetUsers = ({ pageParams }: IProps) => {
  return useQuery({
    queryKey: [userKeys.GET_ALL_USERS, pageParams],
    queryFn: () => API.Users.getUsers(pageParams),
  });
};
