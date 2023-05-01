import { createContext, useEffect, useState } from "react";
import { API_URL_BASE_MUSCLES, API_KEY } from "@env";
import axios from "axios";

interface ContextProps {}

export const MusclesContext = createContext({} as ContextProps);

export const MusclesProvider = ({ children }: any) => {
  const [muscles, setMuscles] = useState([]);
  console.log(muscles);
  useEffect(() => {
    const getMuscles = async () => {
      const options = {
        method: "GET",
        url: API_URL_BASE_MUSCLES,
        params: { muscle: "Triceps" },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setMuscles(response.data.map((name) => name.exercise_name));
      } catch (error) {
        console.error(error);
      }
    };
    getMuscles();
  }, []);

  return (
    <MusclesContext.Provider value={{}}>{children}</MusclesContext.Provider>
  );
};
