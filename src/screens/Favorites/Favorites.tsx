import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useFav } from "../../hooks/useFav";

const Favorites = () => {
  const { dataStorage, setDataStorage } = useFav();

  return (
    <View>
      {dataStorage.length >= 1 ? (
        <Text>{dataStorage?.map((items: any) => items.exercise_name)}</Text>
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
