import { useState } from "react";
import dataPeru   from "../data/countries_peru.json";

 export const departments = () => {
  
    const filterDepartments = dataPeru.filter(
      (departament) =>
        departament.codprov === "01" && departament.coddist === "01"
    );

    const newDepartmentsList = filterDepartments.map((departaments, index) => ({
      id: index,
      label: departaments.nomdpto,
    }));
    return newDepartmentsList;




  const newFunction  = (name = 'osacar', eda  = 23)=>{
    

  }









    
  };

