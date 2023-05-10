import axios from "axios";

export const BASE_URL = "https://pokeapi.co/api/v2";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getAllPokemons = async () => {
  return (await api.get("/pokemon?limit=10&offset=0")).data;
};
