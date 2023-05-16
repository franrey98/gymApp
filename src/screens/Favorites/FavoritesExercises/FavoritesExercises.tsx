import React from "react";
import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFav } from "../../../hooks/useFav";
import ContainerFavExercises from "../ContainerFavExercises/ContainerFavExercises";
import LinkToHomeOrBMI from "../../../components/LinkToHomeOrBMI/LinkToHomeOrBMI";
import { fonts } from "../../../constants/fonts";

const FavoritesExercises = ({ navigation }: any) => {
  const { dataStorage, setDataStorage } = useFav();
  return (
    <>
      {dataStorage.length >= 1 ? (
        <ScrollView style={{ marginHorizontal: 20 }}>
          <LinkToHomeOrBMI
            text={"Go to exercises"}
            navigation={navigation}
            link={"Home"}
          />
          <ContainerFavExercises favExercises={dataStorage} />
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.removeItem("@fav_exercise"), setDataStorage([]);
            }}
            style={{
              backgroundColor: "red",
              padding: 5,
              borderRadius: 5,
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Delete favorite exercises
            </Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View style={{ backgroundColor: "white", flex: 1 }}>
          <View
            style={{
              flex: 0.9,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
              }}
            >
              You don't have any saved exercises!
            </Text>
          </View>
          <LinkToHomeOrBMI
            text={"Go to exercises"}
            navigation={navigation}
            link={"Home"}
          />
        </View>
      )}
    </>
  );
};

export default FavoritesExercises;
