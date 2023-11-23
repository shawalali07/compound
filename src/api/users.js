import axios from "axios";

export const getUsers = async () => {
  const { data } = await axios.get("http://localhost:5000/users");
  return data;
};

export const getUserInfo = async (id) => {
  const { data } = await axios.get("http://localhost:5000/users/" + id);
  return data;
};

export const addUser = async (user) => {
  const { data } = await axios.post("http://localhost:5000/users", user);
};

export const updateUser = async (id, user) => {
  const { data } = await axios.put("http://localhost:5000/users/" + id, user);
};
