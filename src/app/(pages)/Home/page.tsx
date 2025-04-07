import Container from "@/app/components/__organisms/container/Container";
import Layout from "@/app/Layouts/Layout";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <div className=" flex flex-col items-center justify-center mx-auto">
        <Container />
      </div>
    </Layout>
  );
};

export default Home;
