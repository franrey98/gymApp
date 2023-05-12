import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFav } from "../../../hooks/useFav";
import ContainerFavExercises from "../ContainerFavExercises/ContainerFavExercises";

const FavoritesExercises = ({ navigation }) => {
  const { dataStorage, setDataStorage } = useFav();
  return (
    <View>
      {dataStorage.length >= 1 ? (
        <>
          <ContainerFavExercises favExercises={dataStorage} />
          <Button
            title="Borrar storage"
            onPress={() => {
              AsyncStorage.removeItem("@fav_exercise"), setDataStorage([]);
            }}
          />
        </>
      ) : (
        <>
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            No tenes ningun ejercico guardado!
          </Text>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              style={{}}
              onPress={() => navigation.navigate("Home")}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 10,
                  textDecorationLine: "underline",
                }}
              >
                Ir a los ejercicios
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default FavoritesExercises;
