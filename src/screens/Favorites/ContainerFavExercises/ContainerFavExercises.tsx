import React from "react";
import { Exercises } from "../../../types/exercises";
import CardExercises from "../../Home/CardExercises/CardExercises";
import CardIMC from "../CardIMC/CardIMC";

interface Props {
  favExercises?: Exercises[];
  favIMC?: { key: string; value: string; date: string; categoryBMI: string }[];
}

const ContainerFavExercises = ({ favExercises, favIMC }: Props) => {
  return (
    <>
      {favExercises &&
        favExercises.map((items: Exercises) => (
          <CardExercises key={items.id} exercises={items} />
        ))}
      {favIMC &&
        favIMC.map((items) => <CardIMC key={items.key} data={items} />)}
    </>
  );
};

export default ContainerFavExercises;
