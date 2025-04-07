import React from "react";

const Input = ({
  placeholderField,
  value,
  onChange,
}: {
  placeholderField: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) => {
  return (
    <input
      className="bg-[#3e3d3d] h-14 w-[370px] rounded-lg placeholder:text-gray-500 pl-[20px]"
      type="text"
      placeholder={placeholderField}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
