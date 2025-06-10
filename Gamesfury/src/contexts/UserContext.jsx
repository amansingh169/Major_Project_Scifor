import React, { useState, useEffect, useContext, createContext } from "react";
import users from "../data/users.json";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // load user from localStorage on first load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // save user to localStorage
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const login = (id, password) => {
    const foundUser = users.find(
      (u) => (u.username === id || u.email === id) && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      console.log(`User ${foundUser.name} successfully logged in!`);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>{children}</UserContext.Provider>
  );
};
