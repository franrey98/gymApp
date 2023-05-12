import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useMuscles } from "../../../hooks/useMuscles";
import CardExercises from "../CardExercises/CardExercises";
import { styles } from "./Exercises.styled";
const Exercises = () => {
  const { exercises, isLoading, setLimit, limit, totalExercises } =
    useMuscles();

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={30} />
      ) : (
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
              style={styles.button}
              onPress={() => setLimit(limit + 6)}
            >
              <Text style={styles.textButton}>Ver mas</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.textNoMoreExercises}>
              No hay mas ejercicios para mostrar!
            </Text>
          )}
        </ScrollView>
      )}
    </>
  );
};

export default Exercises;
