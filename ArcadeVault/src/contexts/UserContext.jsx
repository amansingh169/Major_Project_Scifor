import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState(null);

  // Load user and user list from localStorage on first load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedUserList = localStorage.getItem("userList");

    if (storedUserList) setUserList(JSON.parse(storedUserList));
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Save user and all users to localStorage when changed
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setUserList((prev) => prev.map((u) => (u.email === user.email ? user : u)));
    } else localStorage.removeItem("user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  const signup = ({ username, name, email, password }) => {
    const alreadyExists = userList.some((u) => u.email === email || u.username === username);

    if (alreadyExists) {
      return {
        success: false,
        message: `A user already existes with this username or email.`,
      };
    }

    const newUser = {
      username,
      name,
      email,
      password,
      collections: {
        all: [],
        favorites: [],
      },
      cart: [],
      wishlist: [],
      defaultTheme: "dark",
    };

    setUserList((prev) => [...prev, newUser]);
    setUser(newUser);

    return { success: true };
  };

  const login = (id, password) => {
    const foundUser = userList.find((u) => u.email === id && u.password === password);

    if (foundUser) {
      setUser(foundUser);
      console.log(`User ${foundUser.name} successfully logged in!`);
      return { success: true };
    }
    return { success: false, message: "Incorrect email or password." };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};
