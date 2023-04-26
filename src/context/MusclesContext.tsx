import { createContext, useEffect, useState } from "react";
import { API_URL_BASE_BMI, API_URL_BASE_MUSCLES, API_KEY } from "@env";

interface ContextProps {}

export const MusclesContext = createContext({} as ContextProps);

export const MusclesProvider = ({ children }: any) => {
  const [matchsLive, setMatchsLive] = useState([]);

  useEffect(() => {}, []);

  console.log(API_URL_BASE_BMI, API_URL_BASE_MUSCLES, API_KEY);

  return (
    <MusclesContext.Provider value={{}}>{children}</MusclesContext.Provider>
  );
};
