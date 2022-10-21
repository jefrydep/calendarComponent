import "./App.css";
import { useCountries } from "./hooks/useCountries";
import { useEffect, useState } from "react";
import DropDown from "./components/countriesComponent/MotionComponent copy";
function App() {
  const {
    filterDepartments,
    filterDistrits,
    filterProvinces,
    getDistritUbigeo,
  } = useCountries();

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrit, setSelectedDistrit] = useState("");

  const getSelectedDepartment = (value: string) => setSelectedDepartment(value);
  const getSelectedProvince = (value: string) => setSelectedProvince(value);
  const getSelectedDistrito = (value: string) => setSelectedDistrit(value);
  const  selectedUbigeo = getDistritUbigeo(selectedDepartment, selectedProvince);

  return (
    <>
      <DropDown
        getSelectedValue={getSelectedDepartment}
        data={filterDepartments()}
      />
      <DropDown
        getSelectedValue={getSelectedProvince}
        data={filterProvinces(selectedDepartment)}
      />
      <DropDown
        getSelectedValue={getSelectedDistrito}
        data={filterDistrits(selectedUbigeo)}
      />

      {/* <PokemonApp/> */}
    </>
  );
}

export default App;
