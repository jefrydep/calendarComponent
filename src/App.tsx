import { useCountries } from "./hooks/useCountries";
import { useState } from "react";
import DropDown from "./components/countriesComponent/MotionComponent copy";
import DropDownSimple from "./components/countriesComponent/DropDownSimple";
function App() {
  const { getDepartments, getProvinces,  getDistrit } =
    useCountries();

  const [departaments, setDepartaments] = useState("");
  const [province, setProvince] = useState("");

  return (
    <>
      <DropDownSimple
        //defaultInput="PUNO"
        placeholder="Departamento"
        data={getDepartments()}
        textField="nomdpto"
        itemKey="ubigeo"
        valueInput={(value) => {
          setDepartaments(value);
        }}
      />

      <DropDownSimple
        //defaultInput="PUNO"
        placeholder="Provincia"
        data={getProvinces(departaments)}
        textField="nomprov"
        itemKey="codprov"
        valueInput={(value) => {
          setProvince(value);
        }}
      />
      <DropDownSimple
        placeholder="Distrito"
        data={getDistrit(province)}
        textField="nombre"
        itemKey="coddist"
      />
      {/* <PokemonApp/> */}
    </>
  );
}

export default App;
