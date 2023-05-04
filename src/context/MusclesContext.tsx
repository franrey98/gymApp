import { createContext, useEffect, useState } from "react";
import { API_URL_BASE_MUSCLES, API_KEY } from "@env";
import axios from "axios";
import { Props } from "../types/props";
interface ContextProps {
  muscles: string[];
  categories: string[];
  exercises: string[];
  categoryToSearch: string;
  muscleToSearch: string;
  getExercises: (muscle: any) => Promise<void>;
  setMuscleToSearch: React.Dispatch<React.SetStateAction<string>>;
  setCategoryToSearch: React.Dispatch<React.SetStateAction<string>>;
  setExercises: React.Dispatch<React.SetStateAction<never[]>>;
}

export const MusclesContext = createContext<ContextProps | null>(null);

export const MusclesProvider: React.FC<Props> = ({ children }) => {
  const [muscles, setMuscles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [exercises, setExercises] = useState([]);
  console.log(exercises);
  const [muscleToSearch, setMuscleToSearch] = useState("");
  const [categoryToSearch, setCategoryToSearch] = useState("");

  const getExercises = async () => {
    if (muscleToSearch !== "" && categoryToSearch !== "") {
      const options = {
        method: "GET",
        url: `${API_URL_BASE_MUSCLES}`,
        params: { muscle: muscleToSearch, category: categoryToSearch },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setExercises(response.data.slice(0, 6));
        setMuscleToSearch("");
        setCategoryToSearch("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getAttributes = async () => {
    const options = {
      method: "GET",
      url: `${API_URL_BASE_MUSCLES}/attributes`,
      params: {},
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setMuscles(response.data.muscles);
      setCategories(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAttributes();
  }, []);

  useEffect(() => {
    if (muscleToSearch !== "" && categoryToSearch !== "") {
      getExercises();
    }
  }, [muscleToSearch, categoryToSearch]);

  return (
    <MusclesContext.Provider
      value={{
        muscles,
        categories,
        exercises,
        muscleToSearch,
        categoryToSearch,
        getExercises,
        setMuscleToSearch,
        setCategoryToSearch,
        setExercises,
      }}
    >
      {children}
    </MusclesContext.Provider>
  );
};
