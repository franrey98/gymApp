import { useContext } from "react";
import { MusclesContext } from "../context/MusclesContext";

export const useMuscles = () => {
  const context = useContext(MusclesContext);

  if (!context) {
    throw new Error("useMuscles must be used within an MusclesProvider");
  }

  return context;
};
