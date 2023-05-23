import { useContext } from "react";
import { BMIContext } from "../context/BMIContext";

export const useBMI = () => {
  const context = useContext(BMIContext);

  if (!context) {
    throw new Error("useBMI must be used within an BMIProvider");
  }

  return context;
};
