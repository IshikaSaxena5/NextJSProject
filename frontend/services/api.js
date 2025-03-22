import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/users" });

export const getUsers = async () => (await API.get("/")).data;
export const getUser = async (id) => (await API.get(`/${id}`)).data;
export const createUser = async (data) => await API.post("/", data);
export const updateUser = async (id, data) => await API.put(`/${id}`, data);
