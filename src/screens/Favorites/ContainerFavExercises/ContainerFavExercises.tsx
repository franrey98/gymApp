import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Exercises } from "../../../types/exercises";
import CardExercises from "../../Home/CardExercises/CardExercises";

interface Props {
  favExercises: Exercises[];
}

const ContainerFavExercises = ({ favExercises }: Props) => {
  return (
    <>
      <Text style={{ textAlign: "center", marginVertical: 10 }}>
        Estos son tus ejercicios favoritos
      </Text>
      <ScrollView style={{ marginHorizontal: 20, marginBottom: 40 }}>
        {favExercises.map((items: Exercises) => (
          <CardExercises key={items.id} exercises={items} />
        ))}
      </ScrollView>
    </>
  );
};

export default ContainerFavExercises;
