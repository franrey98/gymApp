import { createContext, useEffect, useState } from "react";
import { API_URL_BASE_BMI, API_URL_BASE_MUSCLES, API_KEY } from "@env";

interface ContextProps {}

export const BMIContext = createContext({} as ContextProps);

export const BMIProvider = ({ children }: any) => {
  console.log("context bmi");

  return <BMIContext.Provider value={{}}>{children}</BMIContext.Provider>;
};
