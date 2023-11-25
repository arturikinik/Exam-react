import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { onLogin } = useAuth(); // хук для получения функции на вход в систему

  // используем хук для роутинга (постраничный переход)
  const router = useRouter();

  // состояние для пользовательских данных
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const hanleLogin = (e) => {
    e.preventDefault();

    if (userData.name && userData.email && userData.password) {
      onLogin(userData); // передача данных пользователя в кастомный хук

      router.push("/");

      setUserData({ name: "", email: "", password: "" });
    } else {
        console.error("Поля не должны быть пустыми!");
    }
  };

  return (
    <div className="bg-white rounded shadow-lg p-4 px-4 pt-24 max-w-lg">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        <div className="text-gray-600">
          <p className="font-medium text-lg">Personal Details</p>
          <p>Please fill out all the fields.</p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1">
            <form action="#" onSubmit={hanleLogin}>
              <div className="md:col-span-5">
                <label htmlFor="name">Name</label>
                <input
                  autoComplete="off"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  type="text"
                  placeholder="Enter your name"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="email">Email</label>
                <input
                  autoComplete="off"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  type="email"
                  placeholder="Enter your email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="password">Password</label>
                <input
                  autoComplete="off"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  type="password"
                  placeholder="Enter your password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </div>

              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
