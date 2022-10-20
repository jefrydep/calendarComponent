import "./App.css";
import { useCountries } from "./hooks/useCountries";
import { useEffect, useState } from "react";
import DropDown from "./components/countriesComponent/MotionComponent copy";
function App() {
  const {
    filterDepartments,
    filterDistrit,
    filterProvince,
    getDistrintUbigeo,
  } = useCountries();

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrit, setSelectedDistrit] = useState("");
  const [selectedUbigeo, setSelectedUbigeo] = useState("");

  const getSelectedDepartment = (value: string) => setSelectedDepartment(value);
  const getSelectedProvince = (value: string) => setSelectedProvince(value);
  const getSelectedDistrito = (value: string) => setSelectedDistrit(value);

  const dataProvince = getDistrintUbigeo(selectedDepartment, selectedProvince);
  return (
    <>
      <DropDown
        getSelected={getSelectedDepartment}
        data={filterDepartments()}
      />
      <DropDown
        getSelected={getSelectedProvince}
        data={filterProvince(selectedDepartment)}
      />
      <DropDown
        getSelected={getSelectedDistrito}
        data={filterDistrit(dataProvince)}
      />

      {/* <PokemonApp/> */}
    </>
  );
}

export default App;
