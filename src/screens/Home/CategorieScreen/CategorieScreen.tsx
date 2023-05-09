import React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMuscles } from "../../../hooks/useMuscles";
import Exercises from "../Exercises/Exercises";
import { useEffect } from "react";
import HomeCard from "../../../components/HomeCard";

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
  } = useMuscles();

  useEffect(() => {
    const clearMyArray = () => {
      setExercises([]);
      setCategoryToSearch("");
      setMuscleToSearch("");
    };

    return () => {
      clearMyArray();
    };
  }, [navigation]);

  return (
    <View style={{ marginHorizontal: 20 }}>
      {exercises.length > 0 ? (
        <Exercises />
      ) : (
        <>
          <Text style={{ marginTop: 20, fontSize: 18 }}>
            Seleccionaste {muscleToSearch}, ahora selecciona la categoria para
            personalizar tu entrenamiento!
          </Text>
          <HomeCard data={categories} />
        </>
      )}
    </View>
  );
};

export default CategorieScreen;
