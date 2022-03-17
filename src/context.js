import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showMobileMenu,
        setShowMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
