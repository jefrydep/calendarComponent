// import axios from "axios";
import dataPeru from "../../data/countries_peru.json";
import { useEffect, useState } from "react";
// const URL = "https://ubigeo-pe.herokuapp.com/v4?coddpto=21";

type depProps = { [key: string]: any }[];

export const CountriesApp = () => {
  const [data, setData] = useState<depProps>(dataPeru);
  const [departaments, setDepartaments] = useState<depProps | null>();
  const [newDepartments, setNewDepartments] = useState<depProps | null>();
  const [query, setQuery] = useState("");

  const filtingDepartmentsAndDelete = () => {
    const filterDepartments = data.filter(
      (departament) =>
        departament.codprov === "01" && departament.coddist === "01"
    );

    const newDepartmentsList = filterDepartments.map((departaments, index) => ({
      id: index,
      label: departaments.nomdpto,
    }));
    setDepartaments(newDepartmentsList);
  };

  useEffect(() => {
    console.log("Inicializando el UseEfec");
    filtingDepartmentsAndDelete();
    // setNewDepartments(data );
  }, []);

  const filterProvince = (departament: string) => {
    const newProvinces = data.filter(
      (province) =>
        province.nomdpto === departament && province.tipo === "provincia"
    );
    return newProvinces;
  };
  console.log(filterProvince("PASCO"));

  //console.log(data);
  const onQuerySelected = (e: any) => {};

  return (
    <>
      <input
        placeholder="Buscar departamento"
        value={query}
        type="text"
        onChange={(event) => setQuery(event.target.value)}
      />
      {/* {newDepartments.map((newDeps) => (
        <div>{newDeps.nombres}</div>
      ))} */}
    </>
  );
};
