import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useMuscles } from "../../../hooks/useMuscles";
import CardExercises from "./CardExercises";
const Exercises = () => {
  const { exercises, isLoading, setLimit, limit, totalExercises } =
    useMuscles();

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={30} />
      ) : (
        <>
          <ScrollView>
            {exercises &&
              exercises.slice(0, limit).map((items) => {
                if (typeof items === "object") {
                  return <CardExercises key={items["id"]} exercises={items} />;
                } else {
                  console.log("Error: item no es de tipo Exercises", items);
                  return null;
                }
              })}
            {limit < totalExercises ? (
              <TouchableOpacity
                style={{
                  backgroundColor: "#5e1e66",
                  padding: 5,
                  marginVertical: 10,
                  borderRadius: 5,
                }}
                onPress={() => setLimit(limit + 6)}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  Ver mas
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={{ textAlign: "center", marginVertical: 15 }}>
                No hay mas ejercicios para mostrar!
              </Text>
            )}
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Exercises;
