import React from "react";
import { View, Text } from "react-native";
import { Exercises } from "../../../types/exercises";

interface PropsExercises {
  exercises: Exercises;
}

const CardExercises = ({ exercises }: PropsExercises) => {
  return (
    <View>
      <Text>{exercises?.Category}</Text>
      <Text>{exercises?.exercise_name}</Text>
    </View>
  );
};

export default CardExercises;
