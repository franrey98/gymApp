import { createContext, useEffect, useState } from "react";
import { API_URL_BASE_MUSCLES, API_KEY } from "@env";
import axios from "axios";

interface Props {
  children: React.ReactNode;
}
interface ContextProps {
  muscles: string[];
  categories: string[];
  getExercises: (muscle: any) => Promise<void>;
  setMuscleToSearch: React.Dispatch<React.SetStateAction<string>>;
  setCategoryToSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const MusclesContext = createContext<ContextProps | null>(null);

export const MusclesProvider: React.FC<Props> = ({ children }) => {
  const [muscles, setMuscles] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [categories, setCategories] = useState([]);
  console.log(exercises.slice(0, 6));
  const [muscleToSearch, setMuscleToSearch] = useState("");
  const [categoryToSearch, setCategoryToSearch] = useState("");

  console.log(muscleToSearch);
  console.log(categoryToSearch);

  const getExercises = async () => {
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
      setExercises(response.data);
    } catch (error) {
      console.error(error);
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

  return (
    <MusclesContext.Provider
      value={{
        muscles,
        categories,
        getExercises,
        setMuscleToSearch,
        setCategoryToSearch,
      }}
    >
      {children}
    </MusclesContext.Provider>
  );
};
