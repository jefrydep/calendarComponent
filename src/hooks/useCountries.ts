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

  const filterProvince = (dept: string) => {
    const newProvinces = dataPeru.filter(
      (province) => province.nomdpto === dept && province.tipo === "provincia"
    );

    const namesProvince = newProvinces.map((province, index) => ({
      id: index,
      label: province.nombre,
      ubigeo: province.ubigeo,
      // ubigeo:province.ubigeo
    }));
    return namesProvince;
  };

  const filterDistrit = (ubigeo: string) => {
    const newDistrits = dataPeru.filter((dist) =>
      dist.ubigeo.startsWith(ubigeo)
    );
    const getDistrits = newDistrits.map((item, index) => ({
      id: index,
      label: item.nombre,
      // ubigeo: item.ubigeo,
    }));
    return getDistrits;
  };
  
  const getDistrintUbigeo = (selectedDepartment: string,selectedProvince:string) => {
    const ubigeo = filterProvince(selectedDepartment);
    const selectedUbigeo = ubigeo.filter(
      (item) => item.label === selectedProvince
    );
    const idUbigeo = selectedUbigeo.map((item: any) => item.ubigeo);
    const replaceUbigeo = idUbigeo.toString().slice(0, 4);
    // setSelectedUbigeo(replaceUbigeo)
    return replaceUbigeo;

  };

  return {
    filterDepartments,
    filterProvince,
    filterDistrit,
    getDistrintUbigeo,
  };
};
