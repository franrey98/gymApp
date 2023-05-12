import React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMuscles } from "../../../hooks/useMuscles";
import Exercises from "../Exercises/Exercises";
import { useEffect } from "react";
import HomeCard from "../../../components/HomeCard";
import LinearGradient from "react-native-linear-gradient";
import LinearGradientApp from "../../../components/LinearGradientApp";
import { colors } from "../../../constants/colors";

type RootStackParamList = {
  Homepage: undefined;
  CategorieScreen: { muscle: string };
};

type CategorieScreenRouteProp = RouteProp<
  RootStackParamList,
  "CategorieScreen"
>;

type CategorieScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CategorieScreen"
>;

type Props = {
  route?: CategorieScreenRouteProp;
  navigation?: CategorieScreenNavigationProp;
};

const CategorieScreen: React.FC<Props> = ({ route, navigation }) => {
  const {
    categories,
    setExercises,
    setCategoryToSearch,
    setMuscleToSearch,
    exercises,
    muscleToSearch,
    setLimit,
  } = useMuscles();

  useEffect(() => {
    const clearMyArray = () => {
      setExercises([]);
      setCategoryToSearch("");
      setMuscleToSearch("");
      setLimit(6);
    };

    return () => {
      clearMyArray();
    };
  }, [navigation]);

  return (
    <>
      {exercises.length > 0 ? (
        <View style={{ marginHorizontal: 20 }}>
          <Exercises />
        </View>
      ) : (
        <>
          <LinearGradientApp>
            <View
              style={{
                marginHorizontal: 20,
                backgroundColor: "white",
                height: "50%",
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  marginHorizontal: 5,
                  color: colors.primaryLight,
                }}
              >
                Seleccionaste {muscleToSearch}, ahora selecciona la categoria
                para personalizar tu entrenamiento.
              </Text>
            </View>
          </LinearGradientApp>
          <View style={{ marginHorizontal: 20 }}>
            <HomeCard data={categories} />
          </View>
        </>
      )}
    </>
  );
};

export default CategorieScreen;
