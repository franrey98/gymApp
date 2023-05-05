import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useMuscles } from "../../../hooks/useMuscles";
import CardExercises from "./CardExercises";

const Exercises = () => {
  const { exercises, isLoading } = useMuscles();

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={30} />
      ) : (
        <>
          <Text>Ejercicios especificos</Text>
          <ScrollView>
            {exercises &&
              exercises.map((items) => {
                if (typeof items === "object") {
                  return <CardExercises key={items["id"]} exercises={items} />;
                } else {
                  console.log("Error: item no es de tipo Exercises", items);
                  return null;
                }
              })}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Exercises;
