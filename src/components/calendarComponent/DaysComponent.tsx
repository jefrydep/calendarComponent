


export const DaysComponent = ({days}:any) => {
  return (
    <>
        <div className="content-center font-normal text-primary-color  bg-primary-color-gradient  grid grid-cols-7 grid-rows-7 h-9 ">
         {days.map((day:any,index:any) => <div   className="text-center font-semibold" key={index}>{day}</div>)}

        </div>

    </>
  )
}
