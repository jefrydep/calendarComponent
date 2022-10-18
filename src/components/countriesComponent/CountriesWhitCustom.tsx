import { useState } from "react";
import { useCountries } from "../../hooks/useCountries";

export const CountriesWhitCustom = () => {
  const [depts, setDepts] = useState();
  const { filterDepartments, filterDistrit, filterProvince } =
    useCountries();

  return (
    <>
      <h1>Countries with custom hooks</h1>
      <hr />
      <br />
      <hr />
    </>
  );
};
