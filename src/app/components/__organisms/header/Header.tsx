import BackIcon from "@/app/images/icons/backIcon/Page";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="header_div flex items-center h-[60px] w-full max-w-[640px] justify-between mx-auto">
      <div className="back_icon_div w-[20px] flex items-center justify-center rounded-full h-[20px] cursor-pointer border-[0.5px] border-[rgb(77,77,77)]">
        <BackIcon />
      </div>
      <p className="text-[white]">Home</p>
      <Link href={"/SignIn"}>
        <button className="bg-white w-16 h-8  rounded-lg">Log in</button>
      </Link>
    </div>
  );
}

export default Header;
