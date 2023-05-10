import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const Favorites = () => {
  const [dataStorage, setDataStorage] = useState({});
  const [contador, setContador] = useState(1);

  console.log(dataStorage.length);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@fav_exercise");
        if (value !== null) {
          setDataStorage(JSON.parse(value));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [contador]);
  return (
    <View>
      {dataStorage.length >= 1 ? (
        <Text>{dataStorage?.map((items) => items.exercise_name)}</Text>
      ) : (
        <Text>No hay nada en storage</Text>
      )}

      <Button
        title="Borrar storage"
        onPress={() => AsyncStorage.removeItem("@fav_exercise")}
      />
      <Button
        title="Actulizar state"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
};

export default Favorites;
