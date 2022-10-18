import dataPeru from "../data/countries_peru.json";

export const useCountries = () => {
  //   const filterDistrit = (codeProv: string) => {
  //     const newdistrits = dataPeru.filter(
  //       (dist) =>
  //         dist.ubigeo === "distrito" &&
  //         dist.codprov === codeProv &&
  //         dist.nomdpto === "PUNO"
  //     );
  //     return newdistrits;
  //   };
  //   console.log(filterDistrit("12"));

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
  // console.log(filterDepartments());
  const department = filterDepartments();

  const filterProvince = (dept: string) => {
    const newProvinces = dataPeru.filter(
      (province) => province.nomdpto === dept && province.tipo === "provincia"
    );

    const namesProvince = newProvinces.map((province, index) => ({
      id: index,
      label: province.nombre,
    }));
    return namesProvince;
  };

  const filterDistrit = (ubigeo: string) => {
    const newDistrits = dataPeru.filter((dist) =>
      dist.ubigeo.startsWith(ubigeo)
    );
    const getDistrits = newDistrits.map((item,index)=>({
        id:index,
        label:item.nombre
    }))
    return getDistrits;
  };
  //  console.log(filterDistrit("2110"));

  return {
    filterDepartments,
    filterProvince,
    filterDistrit,
  };
};
