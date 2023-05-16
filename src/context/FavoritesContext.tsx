import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Props } from "../types/props";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Exercises } from "../types/exercises";
import { useMuscles } from "../hooks/useMuscles";
import { toastAlert } from "../utils/alerts";

interface FavoriteContextState {
  dataStorage: Exercises[];
  dataBMI: { key: string; value: string; date: string; categoryBMI: string }[];
  removeFavBMI: (id: string) => Promise<void>;
  removeFavExercise: (id: number) => Promise<void>;
  addFavExercise: (id: number) => Promise<void>;
  addFavBMI: (bmi: string, categoryBMI: string) => Promise<void>;
  setDataStorage: React.Dispatch<React.SetStateAction<Exercises[]>>;
}

export const FavoriteContext = createContext<FavoriteContextState | null>(null);

export const FavoriteProvider: React.FC<Props> = ({ children }) => {
  const { exercises, setExercises } = useMuscles();
  const [dataBMI, setDataBMI] = useState<
    { key: string; value: string; date: string; categoryBMI: string }[]
  >([]);
  const [dataStorage, setDataStorage] = useState<Exercises[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@fav_exercise");
        const valueBMI = await AsyncStorage.getItem("@fav_bmi");
        if (value !== null) {
          setDataStorage(JSON.parse(value));
        }
        if (valueBMI !== null) {
          setDataBMI(JSON.parse(valueBMI));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const addFavExercise = async (id: number) => {
    const options = {
      method: "GET",
      url: `https://musclewiki.p.rapidapi.com/exercises/${id.toString()}`,
      headers: {
        "X-RapidAPI-Key": "3e700a3053msh8dd052462673c23p1362fbjsn8bf6b466f4d2",
        "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);

      const updatedExercises = exercises.map((exercise) => {
        if (exercise.id === response.data.id) {
          return { ...exercise, isFavorite: true };
        }
        return exercise;
      });

      setExercises(updatedExercises);

      const storedData = await AsyncStorage.getItem("@fav_exercise");
      let newFavExercises = [];

      if (storedData !== null) {
        const parsedStoredData = JSON.parse(storedData);
        const exerciseExists = parsedStoredData.some(
          (exercise: any) => exercise.id === response.data.id
        );
        if (!exerciseExists) {
          newFavExercises = [...parsedStoredData, response.data];
        } else {
          newFavExercises = parsedStoredData;
        }
      } else {
        newFavExercises = [response.data];
      }

      await AsyncStorage.setItem(
        "@fav_exercise",
        JSON.stringify(newFavExercises)
      );
      setDataStorage(newFavExercises);
      toastAlert(
        "success",
        "El ejercicio se guardo correctamente en favoritos"
      );
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavExercise = async (id: number) => {
    try {
      const storedData = await AsyncStorage.getItem("@fav_exercise");
      if (storedData !== null) {
        const parsedStoredData = JSON.parse(storedData);
        const filteredExercises = parsedStoredData.filter(
          (exercise: any) => exercise.id !== id
        );
        await AsyncStorage.setItem(
          "@fav_exercise",
          JSON.stringify(filteredExercises)
        );
        setDataStorage(filteredExercises);
      }
      toastAlert("success", "El valor se borro correctamente de favoritos");
    } catch (error) {
      console.log(error);
    }
  };

  const addFavBMI = async (bmi: string, categoryBMI: string) => {
    try {
      const storedData = await AsyncStorage.getItem("@fav_bmi");
      let valuesBMI: {
        key: string;
        value: string;
        date: string;
        categoryBMI: string;
      }[] = [];

      if (storedData !== null) {
        valuesBMI = JSON.parse(storedData);
      }

      const now = new Date();
      const yearOptions = "numeric";
      const monthOptions = "numeric";
      const dayOptions = "numeric";
      const hour12Options = false;

      const dateFormatted = now.toLocaleString("es-AR", {
        year: yearOptions,
        month: monthOptions,
        day: dayOptions,
        hour12: hour12Options,
      });

      const newEntry = {
        date: dateFormatted,
        key: Date.now().toString(),
        value: bmi,
        categoryBMI,
      };

      valuesBMI.push(newEntry);
      await AsyncStorage.setItem("@fav_bmi", JSON.stringify(valuesBMI));
      setDataBMI(valuesBMI);
      toastAlert("success", "El valor se guardo correctamente en favoritos");
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavBMI = async (id: string) => {
    try {
      const storedData = await AsyncStorage.getItem("@fav_bmi");
      let valuesBMI: {
        key: string;
        value: string;
        date: string;
        categoryBMI: string;
      }[] = [];

      if (storedData !== null) {
        valuesBMI = JSON.parse(storedData);
      }

      const updatedValuesBMI = valuesBMI.filter((item) => item.key !== id);

      await AsyncStorage.setItem("@fav_bmi", JSON.stringify(updatedValuesBMI));

      setDataBMI(updatedValuesBMI);
      toastAlert("success", "El valor se borro correctamente de favoritos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        dataStorage,
        dataBMI,
        addFavExercise,
        addFavBMI,
        removeFavBMI,
        removeFavExercise,
        setDataStorage,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
