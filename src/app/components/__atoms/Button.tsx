import React from "react";

function Button({ onClick, title }: { onClick: () => void; title: string }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#FFFFFF] h-14 w-[370px] rounded-lg"
    >
      {title}
    </button>
  );
}

export default Button;
