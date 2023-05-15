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
import { styles } from "./CategorieScreen.styled";

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
    <View style={{ backgroundColor: "white" }}>
      {exercises.length > 0 ? (
        <View style={styles.marginH}>
          <Exercises />
        </View>
      ) : (
        <>
          <LinearGradientApp>
            <View style={styles.containerIntro}>
              <Text style={styles.textIntro}>
                Seleccionaste {muscleToSearch}, ahora selecciona la categoria
                para personalizar tu entrenamiento.
              </Text>
            </View>
          </LinearGradientApp>
          <View style={styles.marginH}>
            <HomeCard data={categories} />
          </View>
        </>
      )}
    </View>
  );
};

export default CategorieScreen;
