import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useMuscles } from "../../../hooks/useMuscles";
import CardExercises from "./CardExercises";

const Exercises = () => {
  const { exercises } = useMuscles();

  return (
    <View>
      <Text>Ejercicios especificos</Text>
      <ScrollView>
        {exercises.map((items) => (
          <CardExercises key={items.id} exercises={items} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Exercises;
