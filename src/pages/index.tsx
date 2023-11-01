import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">
        I am a web developer passionate about creating amazing websites and web
        applications.
      </p>
    </div>
  );
};

export default Home;
