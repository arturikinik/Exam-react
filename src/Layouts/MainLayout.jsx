import React from "react";
import Navigation from "@/components/Navigation/Navigation";

/* Обертка контента основной страницы */
const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      {/* футер  */}
    </>
  );
};

export default MainLayout;
