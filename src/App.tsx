import './App.css'
import CalendarApp from './components/calendarComponent/CalendarApp'
import { CountriesApp } from './components/countriesComponent/CountriesApp'
import DropDown from './components/countriesComponent/MotionComponent'
import dataPeru from "./data/countries_peru.json";

function App() {
 

  return (
    <>
      {/* <CountriesApp/> */}
    < DropDown data= {dataPeru} dropable={true} />
    </>
  )
}

export default App
