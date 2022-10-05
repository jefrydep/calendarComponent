// import axios from "axios";
import provinces from "../../data/countries_peru.json";
import { useEffect, useState } from "react";
// const URL = "https://ubigeo-pe.herokuapp.com/v4?coddpto=21";
export const CountriesApp = () => {
  const [selectedDepartament, setselectedDepartament] = useState('')
  const onSearchDepartments = (e: any) => {
    console.log(e.target.value);
    setselectedDepartament(e.target.value)
  };
  const allDepartments = provinces.filter(
    (departaments) =>
      departaments.coddist === "01" &&
      departaments.codprov === "01" &&
      departaments.tipo === "provincia"
  );




// const searchProvince = (provinceName :string)=>{

//   const allProvinces = provinces.filter(
//     (res) => res.tipo === "provincia" && res.nombre  === provinceName
//   );
//   return allProvinces;
// }
// console.log(searchProvince('PUNO'))

const allProvinces = provinces.filter(
  (res) =>res.coddpto ==='21' && res.tipo === "provincia"  
);







  console.log(allDepartments);

  useEffect(() => {}, []);

  return (
    <>
      <h2>departamentos</h2>
      
      <select  onChange={onSearchDepartments}>
        {allDepartments.map((deps) => (
          <option>{deps.nombre}</option>
        ))}
      </select>
      <br />
      <br />
      <hr />
      <h2>provincias</h2>
      <select name="provinces" id="">
        {allProvinces.map((res) => (
          <option>{res.nombre}</option>
        ))}
      </select>
    </>
  );
};
