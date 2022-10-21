import type { ChangeEvent, InputHTMLAttributes } from "react";
// import type { IconName } from "../Icon";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
// import Icon from "../Icon";
// import { container } from "~/animations/framerAnimation";
type typeObj = { [key: string]: any };

interface DropDownSimpleProps extends InputHTMLAttributes<HTMLInputElement> {
  data: typeObj[] | string[];
  textField: string;
  defaultInput?: string;
  label?: string;
  itemKey: string;
  // iconName?: IconName;
  className?: string;
  placeholder?: string;
  valueInput?: (event: string) => void;
}

const DropDownSimple = ({
  data,
  itemKey,
  textField,
  label,
  // iconName,
  className,
  valueInput,
  defaultInput,
  placeholder,
  ...otherProps
}: DropDownSimpleProps) => {
  const [options, setOptions] = useState<typeObj[] | null>();
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const transformData = data.map((_item, index) => {
      if (typeof _item === "string") {
        return { [`${itemKey}`]: index.toString(), [`${textField}`]: index };
      } else {
        return _item;
      }
    });
    setOptions(transformData);
    if (defaultInput) {
      setQuery(defaultInput);
    }
  }, [data]);

  const optionsFiltered = useMemo(
    () =>
      query
        ? options?.filter((_option) =>
            _option[textField].toLowerCase().includes(query.toLowerCase())
          )
        : options,
    [options, query]
  );

  const filterByQuery = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setQuery(value);
    value.length !== 0 ? setIsActive(true) : setIsActive(false);
  };

  const toogleIsActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
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
            className="w-full"
            placeholder={!isActive ? placeholder : "Buscar..."}
            onClick={toogleIsActive}
            onChange={filterByQuery}
            value={query}
            {...otherProps}
          />
          <div>
            <motion.div
              onClick={toogleIsActive}
              className="h-full w-full scale-75"
            >
              {/* {isActive ? (
                <Icon
                  iconName="CaretDown"
                  className=" fill-placeholder-color rotate-180"
                />
              ) : (
                <Icon
                  iconName="CaretDown"
                  className=" fill-placeholder-color "
                />
              )} */}
            </motion.div>
          </div>
        </div>
        {isActive && (
          <motion.div
            // variants={container}
            initial="hidden"
            animate="show"
            className={`absolute left-0 w-full z-10 ${
              optionsFiltered?.length !== 0 && "border-2"
            } rounded-input bg-white border-primary-color text-text-color shadow-md shadow-neutral-400 font-medium`}
          >
            {optionsFiltered?.map((item) => (
              <div
                key={item[itemKey]}
                onClick={() => {
                  setQuery(item[textField]);
                  valueInput?.(item[textField]);
                  setIsActive(false);
                }}
                className="p-2 cursor-pointer duration-200 hover:bg-primary-color-gradient hover:text-primary-color truncate"
              >
                {item[textField]}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DropDownSimple;
