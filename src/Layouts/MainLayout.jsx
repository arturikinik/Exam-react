import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import { useAuth } from "../auth/AuthContext";

/* Обертка контента основной страницы */
const MainLayout = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      <Navigation />
      {children}

      {user && <div className="pt-24">Привет {user.name}</div>}
      {/* футер  */}
    </>
  );
};

export default MainLayout;
