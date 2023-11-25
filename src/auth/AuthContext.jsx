import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Контекст для управления состоянием аутентификации пользователя
 * @type {React.Context}
 */
const AuthContext = createContext();

/**
 * Компонент для управления состоянием аутентификации пользователя
 * @component
 * @param {object} props - свойства компонента
 * @param {React.ReactNode} props.children - дочерние эл-ты компонента
 * @returns {JSX.Element} возвращает сам элемент
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // хранение информации о пользователе

  useEffect(() => {
    // проверка аутентификации при загрузке страницы
    // установка пользователя в состояние (если аутентификация пройдена)

    const userFromLocalStorage = localStorage.getItem("user");

    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage));
    }
  }, []);

  /**
   * Функция обработки входа пользователя
   * @function
   * @param {object} userData - данные пользвователя с формы
   * @returns {void}
   */
  const onLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  /**
   * Функция обработки выхода пользователя
   * @function
   * @return {void}
   */
  const onLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  /**
   * Значение контекста аутентификации
   * @type {object}
   */
  const contextValue = { user, onLogin, onLogout };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

/**
 * Хук для доступа к контексту аутентификации
 * @returns {object} - значение контекста аутентификации
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be within an AuthProvider!");
  }

  return context;
};
