import React, { useState, useContext } from "react";

const AlertContext = React.createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const toggle = () => {
    console.log("### prev alert: ", alert);
    setAlert(!alert);
  };

  return (
    <AlertContext.Provider value={{ visible: alert, toggle }}>
      {children}
    </AlertContext.Provider>
  );
};
