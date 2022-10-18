import "./App.css";
import CalendarApp from "./components/calendarComponent/CalendarApp";
import { CountriesApp } from "./components/countriesComponent/CountriesApp";
// import DropDown from "./components/countriesComponent/DepartmentComponent";
import dataPeru from "./data/countries_peru.json";
import { departments } from "../src/utils/countries";
import { CountriesWhitCustom } from "./components/countriesComponent/CountriesWhitCustom";
import { useCountries } from "./hooks/useCountries";
import { useEffect, useState } from "react";
import DropDown from "./components/countriesComponent/MotionComponent copy";
import DepartmentComponent from "./components/countriesComponent/DepartmentComponent";
import { PokemonApp } from "./pokemon/PokemonApp";
function App() {
  const [queryProvince, setQueryProvince] = useState<{ [key: string]: any }[]>(
    []
  );
  const { filterDepartments, filterDistrit, filterProvince } = useCountries();
  const [departmen, setDepartmen] = useState();
  // useEffect(() => {
  //   getDepartments;
  // }, []);

  // const getDepartments = (value: string) => {
  //   const newDataProvince = filterProvince(value);
  //   setQueryProvince([...newDataProvince]);
  // };
  // // console.log(queryProvince);

  // const getProvinces = (value: string) => {};
  return (
    <>
      {/* <DropDown data={filterDepartments()}/> */}
      {/* <DepartmentComponent data={filterProvince('PUNO')}/> */}
      {/* <DropDown getValue={getProvinces} data={ queryProvince} />
      <DropDown getValue={getDepartments} data={filterDistrit("2112")} /> */}
      {/* {queryProvince.map((item) => (
        <div key={item.id}>{item.label}</div>
      ))} */}
      <PokemonApp/>
    </>
  );
}

export default App;
