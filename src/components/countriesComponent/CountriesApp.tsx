// import axios from "axios";
import provinces from "../../data/countries_peru.json";
import { useEffect, useState } from "react";
// const URL = "https://ubigeo-pe.herokuapp.com/v4?coddpto=21";

type depProps = { [key: string]: any }[];
export const CountriesApp = () => {
  const [departments, setDepartments] = useState<depProps | null>(provinces);
  const [query, setQuery] = useState("");

  
  const codeDepartments = departments?.map((province) => {
    return {
      nombres: province.nomdpto,
    };
  });
  console.log(codeDepartments);

  const deleteRepeats = (arr: any) => {
    const provincesMap = arr.map((prov: any) => {
      return [prov.nombres, prov];
    });
    return [...new Map(provincesMap).values()];
  };

  // const value = deleteRepeats(codeDepartments);
  // setDepartments(value);
  // console.log(departments);
  // const deps = () => {};

  return (
    <>
      <input
        placeholder="Buscar departamento"
        value={query}
        type="text"
        onChange={(event) => setQuery(event.target.value)}
      />
      {/* {departments.map(deps => <div>{deps.nombres}</div>)
           

          } */}
    </>
  );
};
