import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFav } from "../../../hooks/useFav";
import LinkToHomeOrBMI from "../../../components/LinkToHomeOrBMI/LinkToHomeOrBMI";
import ContainerFavExercises from "../ContainerFavExercises/ContainerFavExercises";

const FavoritesIMC = ({ navigation }: any) => {
  const { dataBMI } = useFav();
  return (
    <>
      {dataBMI.length > 0 ? (
        <ScrollView style={{ marginHorizontal: 25 }}>
          <LinkToHomeOrBMI
            text={"Go to BMI"}
            navigation={navigation}
            link={"BMI"}
          />
          <ContainerFavExercises favIMC={dataBMI} />
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
              Delete all my records
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
              You don't have any saved BMI records
            </Text>
          </View>
          <LinkToHomeOrBMI
            text={"Go to BMI"}
            navigation={navigation}
            link={"BMI"}
          />
        </View>
      )}
    </>
  );
};

export default FavoritesIMC;
