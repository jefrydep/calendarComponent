import dataPeru from "../data/countries_peru.json";

export const useCountries = () => {
  const filterDepartments = () => {
    const filteredDepartments = dataPeru.filter(
      (depts) => depts.codprov === "01" && depts.coddist === "01"
    );

    const newDepartmentsList = filteredDepartments.map(
      (departments, index) => ({
        id: index,
        label: departments.nomdpto,
      })
    );
    return newDepartmentsList;
  };

  const filterProvinces = (dept: string) => {
    const newProvinces = dataPeru.filter(
      (province) => province.nomdpto === dept && province.tipo === "provincia"
    );

    const newsProvincesList = newProvinces.map((province, index) => ({
      id: index,
      label: province.nombre,
      ubigeo: province.ubigeo,
    }));
    return newsProvincesList;
  };

  const filterDistrits = (ubigeo: string) => {
    const newDistrits = dataPeru.filter((dist) =>
      dist.ubigeo.startsWith(ubigeo)
    );
    const getDistrits = newDistrits.map((distrit, index) => ({
      id: index,
      label: distrit.nombre,
    }));
    return getDistrits;
  };

  const getDistritUbigeo = (
    selectedDepartment: string,
    selectedProvince: string
  ) => {
    const provinces = filterProvinces(selectedDepartment);
    const selectedUbigeo = provinces.filter(
      (item) => item.label === selectedProvince
    );
    const idUbigeo = selectedUbigeo.map((item) => item.ubigeo);
    const replaceUbigeo = idUbigeo.toString().slice(0, 4);
    return replaceUbigeo;
  };

  return {
    filterDepartments,
    filterProvinces,
    filterDistrits,
    getDistritUbigeo,
  };
};
