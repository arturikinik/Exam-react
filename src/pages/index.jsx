import Head from "next/head";
import React from "react";

/* Домашнаяя страница */
const Home = () => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>App</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <h1>Домашняя страница .</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
