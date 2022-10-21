import dataPeru from "../data/countries_peru.json";

export const useCountries = () => {
  const getDepartments = () => {
    const filteredDepartments = dataPeru.filter(
      (depts) => depts.codprov === "01" && depts.coddist === "01"
    );
    return filteredDepartments;
  };

  const getProvinces = (dept: string) => {
    const newProvinces = dataPeru.filter(
      (province) => province.nomdpto === dept && province.tipo === "provincia"
    );
    return newProvinces;
  };

  const getDistrit = (province: string) => {
    const toggleProvince = dataPeru.filter(
      (_item) => _item.tipo === "provincia" && _item.nomprov === province
    );
    const valueUbigeo = toggleProvince[0]?.ubigeo.slice(0, 4);
    const newDistrits = dataPeru.filter((dist) =>
      dist.ubigeo.startsWith(valueUbigeo)
    );
    return newDistrits;
  };

  return {
    getDepartments,
    getProvinces,
    getDistrit,
  };
};
