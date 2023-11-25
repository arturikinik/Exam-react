import React from "react";
import "../styles/globals.css";
import MainLayout from "../Layouts/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../auth/AuthContext";

/* Корневой элемент компонента */
const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ChakraProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </AuthProvider>
  );
};

export default App;
