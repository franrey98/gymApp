import { BMICategoryIndicatorProps } from "../../../types/props";
import Donut from "./Donut";

const BMICategoryIndicator = ({
  categoryBMI = "",
}: BMICategoryIndicatorProps) => {
  const getBMIStatus = () => {
    if (categoryBMI === "Underweight") {
      return { classification: "Bajo peso", color: "blue" };
    } else if (categoryBMI === "Normal weight") {
      return { classification: "Peso saludable", color: "green" };
    } else if (categoryBMI === "Overweight") {
      return { classification: "Sobrepeso", color: "orange" };
    } else {
      return { classification: "Obesidad", color: "red" };
    }
  };

  const { classification, color } = getBMIStatus();

  return (
    <Donut textColor={color} color={color} classification={classification} />
  );
};

export default BMICategoryIndicator;
