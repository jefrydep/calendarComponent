const days: string[] = ["L", "M", "M", "J", "V", "S", "D"];



export const DaysComponent = () => {
  return (
    <div className="">
        <div className=" bg-primary-color ">
         {days.map(day => day)}

        </div>

    </div>
  )
}
