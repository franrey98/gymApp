import React from "react";
import { Text, View } from "react-native";
import { useMuscles } from "../../../hooks/useMuscles";
import CardExercises from "./CardExercises";

const Exercises = () => {
  const { exercises } = useMuscles();

  return (
    <View>
      <Text>Ejercicios especificos</Text>
      {exercises.map((items) => (
        <CardExercises key={items.id} exercises={items} />
      ))}
    </View>
  );
};

export default Exercises;
