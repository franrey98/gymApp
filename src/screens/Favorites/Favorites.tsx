import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFav } from "../../hooks/useFav";
import ContainerFavExercises from "./ContainerFavExercises/ContainerFavExercises";

const Favorites = () => {
  const { dataStorage, setDataStorage } = useFav();
  return (
    <View>
      {dataStorage.length >= 1 ? (
        <ContainerFavExercises favExercises={dataStorage} />
      ) : (
        <Text>No hay nada en storage</Text>
      )}

      <Button
        title="Borrar storage"
        onPress={() => {
          AsyncStorage.removeItem("@fav_exercise"), setDataStorage([]);
        }}
      />
    </View>
  );
};

export default Favorites;
