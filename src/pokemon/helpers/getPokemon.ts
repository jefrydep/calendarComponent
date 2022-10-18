import axios from "axios"



export const getPokemon= async (pokeName:any)=>{
    const URL =`https://pokeapi.co/api/v2/pokemon/${pokeName}`
     const  pokemons =  await axios.get(URL)
    .then(res => res.data)
    .catch(err => console.log(err))
    
    // return await pokemons;
    // console.log(pokemons)
    // console.log(pokemons)
 
}