"use client";
import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Input from "@/app/components/__atoms/Input";
import Button from "../../components/__atoms/Button";
import Link from "next/link";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/router";

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSignUp = async () => {
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const repeatPassword = repeatPasswordRef.current?.value || "";

    if (!email || !password || !repeatPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign up successful!");
      router.push("/SignIn");
    } catch (error) {
      alert(
        "Invalid email or password. Please try again or reset your password."
      );
      console.error("Sign up failed", error);
    }
  };

  return (
    <div className="bg-[url('images/img/background.avif')] h-screen bg-no-repeat bg-contain flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-[#FFFFFF]">Sign Up</h1>
        <Input placeholderField="Username" ref={emailRef} />
        <Input placeholderField="Password" ref={passwordRef} />
        <Input placeholderField="Repeat Password" ref={repeatPasswordRef} />
        <Button onClick={handleSignUp} title="Sign up" />
        <p className="text-[#ffffff]">or</p>
        <Link href="/SignIn">
          <button className="text-[black] cursor-pointer bg-[#FFFFFF] w-[100px] h-[50px] rounded-xl">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
