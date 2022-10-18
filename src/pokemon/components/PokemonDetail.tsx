import axios from "axios";
import React, { useEffect, useState } from "react";
import { PokemonsResponse, Result } from "../interface/PokemonInterface";
import { PokemonsResults } from "../interface/PokemonsResult";

type obj = { [key: string]: any };
const PokemonDetail = ({ url, name }: Result) => {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonsResults>();
  const [imgPokemons, setImgPokemons] = useState();

  useEffect(() => {
    res();
  }, []);

  const res = async () => {
    await axios
      .get(url)
      .then((res) => setPokemonDetail(res.data))
      .catch((error) => console.log(error));
  };

  const imgPokemon = pokemonDetail?.sprites.other?.dream_world.front_default;
 console.log(pokemonDetail);
  return (
    <div className=" m-3 bg-cyan-600 ">
      {/* <span>{url}</span> */}
      <div className="text-center">
       
        <span className="">{name} </span>
        <img src={imgPokemon} alt="" />
        
      </div>
    </div>
  );
};

export default PokemonDetail;
