import React from "react";
import "../styles/globals.css";
import MainLayout from "../Layouts/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";

/* Корневой элемент компонента */
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
