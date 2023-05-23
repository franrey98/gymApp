import { BMICategoryIndicatorProps } from "../../../types/props";
import Donut from "./Donut";

const BMICategoryIndicator = ({
  categoryBMI = "",
}: BMICategoryIndicatorProps) => {
  const getBMIStatus = () => {
    if (categoryBMI === "Underweight") {
      return { classification: "Underweight", color: "blue" };
    } else if (categoryBMI === "Normal weight") {
      return { classification: "Healthy weight", color: "green" };
    } else if (categoryBMI === "Overweight") {
      return { classification: "Overweight", color: "orange" };
    } else {
      return { classification: "Obesity", color: "red" };
    }
  };

  const { classification, color } = getBMIStatus();

  return (
    <Donut textColor={color} color={color} classification={classification} />
  );
};

export default BMICategoryIndicator;
