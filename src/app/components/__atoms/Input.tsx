import React, { forwardRef } from "react";

type InputProps = {
  placeholderField: string;
  typeField?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholderField, typeField }, ref) => {
    return (
      <input
        className="bg-[#e3e3d3] h-14 w-[370px] rounded-lg placeholder:text-gray-500 pl-[20px]"
        type={typeField || "text"}
        placeholder={placeholderField}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
