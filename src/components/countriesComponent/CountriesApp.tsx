// import axios from "axios";
import provinces from "../../data/countries_peru.json";
import { useEffect, useState } from "react";
// const URL = "https://ubigeo-pe.herokuapp.com/v4?coddpto=21";
export const CountriesApp = () => {
  const [countries, setCountries] = useState([]);
  const searchCties = () => {
    
  };
  const provincesPuno = provinces.filter(res => res.coddpto === '21' && res.codprov === '12')
  const provinceSort= provincesPuno.sort();// setCountries()
  const allProvinces = provinces.filter(res => res.tipo === 'provincia')
 console.log(allProvinces);
 
  useEffect(() => {
    searchCties();
  }, []);
  


  return (
    < >
    
    <select name="provinces" id="">
      {provinceSort.map(provinces => <option>{provinces.nombre}</option>)}
    </select>
    <br />
    <select name="provinces" id="">
      {allProvinces.map(res => <option>{res.nombre}</option>)}
    </select>


    </ >
  );
};


