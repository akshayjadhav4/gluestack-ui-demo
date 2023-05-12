import axios from "axios";
import { AllPokemon, Pokemon } from "../types";

export const BASE_URL = "https://pokeapi.co/api/v2";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getAllPokemons = async (): Promise<AllPokemon> => {
  return (await api.get("/pokemon?limit=10&offset=0")).data;
};

export const getPokemonDetails = async (url: any): Promise<Pokemon> => {
  return (await api.get(url)).data;
};
