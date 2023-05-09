import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useMuscles } from "../../../hooks/useMuscles";
import CardExercises from "./CardExercises";
const Exercises = () => {
  const { exercises, isLoading, getNewExercises } = useMuscles();

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={30} />
      ) : (
        <>
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
            <TouchableOpacity
              style={{
                backgroundColor: "#5e1e66",
                padding: 5,
                marginVertical: 10,
                borderRadius: 5,
              }}
              onPress={getNewExercises}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Ver mas
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Exercises;
