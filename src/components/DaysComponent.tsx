const days: string[] = ["L", "M", "M", "J", "V", "S", "D"];



export const DaysComponent = () => {
  return (
    <div className="">
        <div className=" bg-primary-color justify-center grid grid-cols-7 grid-rows-7 ">
         {days.map(day => <div>{day}</div>)}

        </div>

    </div>
  )
}
