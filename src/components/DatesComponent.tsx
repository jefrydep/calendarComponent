let dates: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];
const DatesComponent = () => {
  return <div className=" ">
    <div className="grid gap-2 grid-cols-7 grid-rows-7">

    {dates.map(dates =><div className=" "> {dates}</div>)}

    </div>
     </div>;
};

export default DatesComponent;
