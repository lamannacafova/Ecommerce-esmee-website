import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {  

  const [user, setUser] = useState(
    {
    userName:"Leman",
    password:"leman123",
    email:"necefovaleman@gmail.com",
    role:'admin'
}
)
  return (
    <GlobalContext.Provider value={{ user, setUser}}>
      {children}
    </GlobalContext.Provider>
  );
};