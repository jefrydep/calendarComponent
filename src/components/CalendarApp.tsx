import DatesComponent from "./DatesComponent";
import { DaysComponent } from "./DaysComponent";

const monts: string[] = [
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

const CalendarApp = () => {
  return (
    <div className="container sm bg-slate-200">
      <select className="" name="select" id="">
        {monts.map((months) => (
          <option>{months}</option>
        ))}
      </select>
      <DaysComponent />
      <DatesComponent/>
    </div>
  );
};

export default CalendarApp;
