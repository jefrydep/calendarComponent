import DatesComponent from "./DatesComponent";
import { DaysComponent } from "./DaysComponent";

const months: string[] = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days: string[] = ["L", "M", "M", "J", "V", "S", "D"];
const date = new Date();
 let currentMonth = date.getMonth();
const currentDay = date.getDay();
let currentYear = date.getFullYear();

const CalendarApp = () => {

const isLeap= ()=>{
  return ((currentYear % 100 !== 0) &&(currentYear % 4 === 0) || (currentYear % 400 === 0))
  
}
const startDay = ()=>{
  let start = new Date(currentYear,currentMonth,1);
  return ((start.getDay()-1) === -1)? 6:start.getDay()-1;

}


  return (
    <div className="container  bg-slate-50">
      <select  className="mt-7 mb-7 w-36 cursor-pointer" name="select" id="">
        <option className="font-bold" value="">
          {months[currentMonth]} {currentYear}{" "}
        </option>
        {months.map((months) => (
          <option className="font-semibold" key={months}>
            {months}
          </option>
        ))}
      </select>
      <DaysComponent days={days}  />
      <DatesComponent />
    </div>
  );
};

export default CalendarApp;
