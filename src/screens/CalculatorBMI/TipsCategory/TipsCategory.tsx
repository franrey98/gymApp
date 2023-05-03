import React from "react";
import { Text, View } from "react-native";
import { BMICategoryIndicatorProps } from "../types";

const TipsCategory = ({ categoryBMI = "" }: BMICategoryIndicatorProps) => {
  const getBMIStatus = () => {
    if (categoryBMI === "Underweight") {
      return {
        textInfo:
          "Las personas con bajo peso tienen un IMC inferior a 18.5. Esto puede deberse a factores como la desnutrición, la genética, problemas de salud o trastornos alimentarios. El consejo para las personas con bajo peso es que consulten con un médico o un nutricionista para determinar la causa y recibir tratamiento adecuado.",
      };
    } else if (categoryBMI === "Normal weight") {
      return {
        textInfo:
          "Las personas con un IMC en el rango de 18.5 a 24.9 se consideran que tienen un peso normal. Esto indica que la persona tiene un peso adecuado para su altura y edad. El consejo para las personas con peso normal es que mantengan un estilo de vida saludable y equilibrado, y que sigan una dieta saludable y hagan ejercicio regularmente.",
      };
    } else if (categoryBMI === "Overweight") {
      return {
        textInfo:
          " Las personas con un IMC en el rango de 25 a 29.9 se consideran que tienen sobrepeso. El sobrepeso puede aumentar el riesgo de enfermedades como la diabetes, la hipertensión y enfermedades cardiovasculares. El consejo para las personas con sobrepeso es que traten de perder peso a través de una dieta saludable y ejercicio regular, y que eviten el consumo de alimentos procesados y ricos en grasas.",
      };
    } else {
      return {
        textInfo:
          "Las personas con un IMC de 30 o más se consideran obesas. La obesidad aumenta el riesgo de enfermedades crónicas como la diabetes, la hipertensión, enfermedades cardiovasculares, entre otras. El consejo para las personas con obesidad es que consulten a un médico o un nutricionista para determinar la causa y recibir tratamiento adecuado, que sigan una dieta saludable y hagan ejercicio regularmente, y que eviten el consumo de alimentos procesados y ricos en grasas.",
      };
    }
  };

  const { textInfo } = getBMIStatus();

  return <Text style={{ marginVertical: 20 }}>{textInfo}</Text>;
};

export default TipsCategory;
