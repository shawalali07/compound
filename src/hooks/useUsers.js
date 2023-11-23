import { useMutation, useQuery, useQueryClient } from "react-query";
import { api } from "../axios/axios";

const fetchUsers = () => {
  return api.get("/users");
};

export const useUsers = () => {
  const { data } = useQuery("users", fetchUsers);
  return { data: data?.data ?? [] };
};

const getUserInfo = (id) => {
  return api.get("/users/" + id);
};

export const useUserInfo = (id) => {
  const { data, isLoading } = useQuery(["user", id], () => getUserInfo(id), {
    enabled: !!id,
  });
  return { data: data?.data, isLoading };
};

const addUser = (user) => {
  return api.post("/users", user);
};

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation("addUser", addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
const updateUser = (user) => {
  return api.put("/users/" + user.id, user);
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation("addUser", updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
