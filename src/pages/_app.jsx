import React from "react";
import "../styles/globals.css";
import MainLayout from "../Layouts/MainLayout";

/* Корневой элемент компонента */
const App = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default App;
