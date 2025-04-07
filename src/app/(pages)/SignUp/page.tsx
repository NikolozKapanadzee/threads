"use client";
import React from "react";
import { useState } from "react";
import Input from "@/app/components/__atoms/Input";
import Button from "../../components/__atoms/Button";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="bg-[url('images/img/background.avif')] h-screen bg-no-repeat bg-contain flex items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[#FFFFFF]">Log In</h1>
          <Input
            value={email}
            placeholderField={"Username"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            value={password}
            placeholderField={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            value={password}
            placeholderField={"Repeat password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button />
          <p className="text-[#ffffff]">or</p>
          <Link href={"/SignIn"}>
            <button className="text-[black] cursor-pointer bg-[#FFFFFF] w-[100px] h-[50px] rounded-xl">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
