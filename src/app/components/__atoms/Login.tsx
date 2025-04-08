import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Link href={"/SignIn"}>
        <button className="bg-white w-16 h-8  rounded-lg fixed ">Log in</button>
      </Link>
    </>
  );
};

export default Login;
