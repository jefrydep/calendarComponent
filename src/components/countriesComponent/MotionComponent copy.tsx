import { useEffect, useState } from "react";
// import type { IconName } from "../Icon";
// import Icon from "../Icon";
import type { InputHTMLAttributes } from "react";
import { motion } from "framer-motion";
// import { container } from "~/animations/framerAnimation";
// import {} from "../../utils/countries";
import { useCountries } from "../../hooks/useCountries";
import DepartmentComponent from "./DepartmentComponent";

interface DropDownProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  //   iconName?: IconName;
  data: { [key: string]: any }[];
  dropable?: boolean;
  // getValue: (value: string) => any;
  getSelectedValue: (value: string) => any;
}
type optionsType = string[];
type optionsTypeData = { [key: string]: any }[];
// | { [key: string]: any }[];
// const options = ["Scanner_02", "Examen glucosa", "Again", "Casa"];
// const optionsObj = [
//   { label: "Scanner_02" },
//   { label: "Examen glucosa" },
//   { label: "Again" },
//   { label: "Casa" },
// ];

const DropDown = ({
  label,
  // iconName,
  getSelectedValue,
  // getValue,
  data,
  className,
  dropable,
  ...otherProps
}: DropDownProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState("");
  const [filterData, setfilterData] = useState<optionsTypeData>([]);
  const [options, setOptions] = useState<optionsTypeData>([]);
  getSelectedValue(selected);

  useEffect(() => {
    setOptions(data);
  }, [data]);

  const toggleChange = () => {
    setIsActive(!isActive);
  };
  const toggleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value;
    searchWord.length == 0 ? setIsActive(false) : setIsActive(true);
    setSelected(searchWord);

    const filterWord = options.filter((value) =>
      value.label.toLowerCase().includes(searchWord.toLowerCase())
    );
    setfilterData(filterWord);
    filterWord.length == 0 && setIsActive(false);
  };

  return (
    <div className="relative">
      {label && (
        <label className="text-text-color text-title-content font-bold">
          {label}
        </label>
      )}
      <div
        className={`flex items-center ${className} p-[2px] px-1 border-[1px] border-placeholder-color rounded-input cursor-pointer text-text-color`}
      >
        {/* {iconName && (
          <Icon iconName="Search" className=" fill-secondary-color" />
        )} */}
        <input
          onChange={toggleFilter}
          value={selected}
          className="w-full"
          {...otherProps}
        />
        <div>
          {dropable && (
            <motion.div
              onClick={toggleChange}
              className="h-full w-full scale-75"
            >
              {isActive ? (
                <div>close</div>
              ) : (
                // <Icon
                //   iconName="CaretDown"
                //   className=" fill-placeholder-color rotate-180"
                // />
                <div>open</div>
                // <Icon
                //   iconName="CaretDown"
                //   className=" fill-placeholder-color "
                // />
              )}
            </motion.div>
          )}
        </div>
      </div>
      {isActive && (
        <motion.div
          //   variants={container}
          initial="hidden"
          animate="show"
          className="absolute left-0 w-full z-10 border-2 rounded-input bg-white border-primary-color text-text-color shadow-md shadow-neutral-400 font-medium"
        >
          {filterData.map((item) => (
            <div
              onClick={() => {
                setSelected(item.label);
                // getValue(item.label)
                setIsActive(false);
              }}
              key={item.id}
              className="p-2 cursor-pointer duration-200 hover:bg-primary-color-gradient hover:text-primary-color truncate"
            >
              {item.label}
            </div>
          ))}
        </motion.div>
      )}
      <div></div>
    </div>
  );
};

export default DropDown;
