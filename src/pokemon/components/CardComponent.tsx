import React, { useEffect, useState } from "react";
import { getPokemon } from "../helpers/getPokemon";
import axios from "axios";
import { PokemonsResponse, Result } from "../interface/PokemonInterface";
import PokemonDetail from "./PokemonDetail";
const CardComponent = () => {
  const [pokemonsName, setPokemonsName] = useState<Result[]>([]);
  const getPokemon = async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=20&limit=40`;
    const resp = await axios.get<PokemonsResponse>(URL);
    setPokemonsName(resp.data.results);
  };

  useEffect(() => {
    getPokemon();
  }, []);
  // console.log(pokemonsName);

  return (
    <div className=" p-5 bg-orange-500 grid gap-4 grid-cols-4 grid-rows-3">
      {pokemonsName.map((item: Result) => (
        <PokemonDetail  key={item.url} {...item}  />
      ))}   
    </div>
  );
};
export default CardComponent;
