import axios from "axios";

export async function getUsers() {
  return axios.get(`/user/`);
}

export function getUser(userId) {
  return axios.get(`/user/${userId}`);
}
export function createUser(user) {
  return axios.post("/user", user);
}

export function updateUser(userId, user) {
  return axios.put(`/user/${userId}`, user);
}

export function deleteUser(userId) {
  return axios.delete(`/user/${userId}`);
}
