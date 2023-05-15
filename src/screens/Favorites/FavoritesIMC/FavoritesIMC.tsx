import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFav } from "../../../hooks/useFav";
import LinkToHomeOrBMI from "../../../components/LinkToHomeOrBMI/LinkToHomeOrBMI";
import ContainerFavExercises from "../ContainerFavExercises/ContainerFavExercises";

const FavoritesIMC = ({ navigation }: any) => {
  const { dataBMI } = useFav();

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 25 }}>
        <LinkToHomeOrBMI
          text={"Ir al IMC"}
          navigation={navigation}
          link={"IMC"}
        />
        {dataBMI && <ContainerFavExercises favIMC={dataBMI} />}
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.removeItem("@fav_bmi");
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
            Borrar todos mis registros
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FavoritesIMC;
