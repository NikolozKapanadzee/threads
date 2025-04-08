"use client";
import React, { useRef, useState } from "react";
import Input from "@/app/components/__atoms/Input";
import Button from "../../components/__atoms/Button";
import Link from "next/link";
import { auth } from "@/app/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignIn = async () => {
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsRegistered(true);
      router.push("/Home");
    } catch (error) {
      alert(
        "Invalid email or password. Please try again or reset your password."
      );
      console.error("Sign in failed", error);
    }
  };
  return (
    <div className="bg-[url('images/img/background.avif')] h-screen bg-no-repeat bg-contain flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-[#FFFFFF]">Log In</h1>
        <Input placeholderField="Email" ref={emailRef} />
        <Input
          placeholderField="Password"
          typeField="password"
          ref={passwordRef}
        />
        <Button onClick={handleSignIn} title="Log in" />
        <p className="text-[#ffffff]">or</p>
        <Link href={"/SignUp"}>
          <button className="text-[black] cursor-pointer bg-[#FFFFFF] w-[100px] h-[50px] rounded-xl">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
