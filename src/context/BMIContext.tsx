import { createContext, useState } from "react";
import { API_URL_BASE_BMI, API_KEY } from "@env";
import axios from "axios";

interface Props {
  children: React.ReactNode;
}

interface BMIContextState {
  calculateBMI: (weight: number, height: number) => Promise<void>;
  resultBMI: number;
  categoryBMI: string;
  isLoading: boolean;
}

export const BMIContext = createContext<BMIContextState | null>(null);

export const BMIProvider: React.FC<Props> = ({ children }) => {
  const [resultBMI, setResultBMI] = useState(0);
  const [categoryBMI, setCategoryBMI] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const calculateBMI = async (weight: number, height: number) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `${API_URL_BASE_BMI}/metric`,
      params: {
        weight,
        height,
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      const fixedNumber = response.data.bmi.toFixed(2);

      setResultBMI(fixedNumber);
      if (fixedNumber < 18.5) {
        setCategoryBMI("Underweight");
      } else if (fixedNumber < 24.9) {
        setCategoryBMI("Normal weight");
      } else if (fixedNumber < 29.9) {
        setCategoryBMI("Overweight");
      } else {
        setCategoryBMI("Obesity");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BMIContext.Provider
      value={{ resultBMI, calculateBMI, categoryBMI, isLoading }}
    >
      {children}
    </BMIContext.Provider>
  );
};
