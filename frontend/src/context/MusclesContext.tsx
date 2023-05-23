import { createContext, useEffect, useState } from "react";
import { API_URL_BASE_MUSCLES, API_KEY } from "@env";
import axios from "axios";
import { Props } from "../types/props";
import { Exercises } from "../types/exercises";
interface ContextProps {
  muscles: string[];
  categories: string[];
  exercises: Exercises[];
  categoryToSearch: string;
  muscleToSearch: string;
  isLoading: boolean;
  limit: number;
  setLimit: any;
  totalExercises: number;
  getExercises: (muscle: any) => Promise<void>;
  setMuscleToSearch: React.Dispatch<React.SetStateAction<string>>;
  setCategoryToSearch: React.Dispatch<React.SetStateAction<string>>;
  setExercises: React.Dispatch<React.SetStateAction<Exercises[]>>;
}

export const MusclesContext = createContext<ContextProps | null>(null);

export const MusclesProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [limit, setLimit] = useState(6);
  const [totalExercises, setTotalExercises] = useState(0);

  const [muscles, setMuscles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [exercises, setExercises] = useState<Exercises[]>([]);

  const [muscleToSearch, setMuscleToSearch] = useState("");
  const [categoryToSearch, setCategoryToSearch] = useState("");

  const getExercises = async () => {
    if (muscleToSearch !== "" && categoryToSearch !== "") {
      setIsLoading(true);
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

        const updatedExercises = response?.data.map((exercise: Exercises) => ({
          ...exercise,
          isFavorite: false,
        }));
        setExercises(updatedExercises);
        setTotalExercises(response.data.length);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getAttributes = async () => {
    setIsLoading(true);
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
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
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
        isLoading,
        limit,
        totalExercises,
        getExercises,
        setLimit,
        setMuscleToSearch,
        setCategoryToSearch,
        setExercises,
      }}
    >
      {children}
    </MusclesContext.Provider>
  );
};
