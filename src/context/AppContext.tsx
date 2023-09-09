"use client";

import React, { useState, createContext } from "react";

const AppContext = React.createContext<
  [number, React.Dispatch<React.SetStateAction<number>>] | undefined
>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={[count, setCount]}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const appContext = React.useContext(AppContext);

  if (appContext === undefined) {
    throw new Error("useAppContext must be inside the AppContext Provider ");
  }

  return appContext;
};
