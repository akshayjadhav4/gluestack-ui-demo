import axios from "axios";
import { Pokemon } from "../types";

export const BASE_URL = "https://pokeapi.co/api/v2";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getPokemons = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
}) => {
  return (await axios.get(pageParam)).data;
};

export const getPokemonDetails = async (url: any): Promise<Pokemon> => {
  return (await api.get(url)).data;
};
