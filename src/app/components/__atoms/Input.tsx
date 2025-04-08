import React, { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, { placeholderField: string }>(
  ({ placeholderField }, ref) => {
    return (
      <input
        className="bg-[#3e3d3d] h-14 w-[370px] rounded-lg placeholder:text-gray-500 pl-[20px]"
        type="text"
        placeholder={placeholderField}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
