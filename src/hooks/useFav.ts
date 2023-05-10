import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const useFav = () => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return {
    addFavExercise,
  };
};

export default useFav;
