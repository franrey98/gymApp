import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BMIContext } from "../context/BMIContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  return context;
};
