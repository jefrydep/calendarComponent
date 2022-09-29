const days: string[] = ["L", "M", "M", "J", "V", "S", "D"];



export const DaysComponent = () => {
  return (
    <div className="">
        <div className="content-center text-sky-900 text-2xl bg-primary-color  grid grid-cols-7 grid-rows-7 h-20 ">
         {days.map(day => <div className="text-center ">{day}</div>)}

        </div>

    </div>
  )
}
