import React from "react";
import NavBar from "../components/__organisms/navbar/Navbar";
import Header from "../components/__organisms/header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <Header />
      {children}
    </>
  );
};

export default Layout;
