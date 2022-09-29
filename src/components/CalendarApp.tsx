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
    <div className="container  bg-slate-50">
      <select className="mt-7 mb-7 w-2/6" name="select" id="">
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
