import React from "react";
import { Text, View } from "react-native";
import { BMICategoryIndicatorProps } from "../../../types/props";

const TipsCategory = ({ categoryBMI = "" }: BMICategoryIndicatorProps) => {
  const getBMIStatus = () => {
    if (categoryBMI === "Underweight") {
      return {
        textInfo:
          "People with a BMI below 18.5 are considered to have low weight. This can be due to factors such as malnutrition, genetics, health issues, or eating disorders. The advice for people with low weight is to consult with a doctor or nutritionist to determine the cause and receive appropriate treatment.",
      };
    } else if (categoryBMI === "Normal weight") {
      return {
        textInfo:
          "People with a BMI in the range of 18.5 to 24.9 are considered to have a healthy weight. This indicates that the person has an appropriate weight for their height and age. The advice for people with a normal weight is to maintain a healthy and balanced lifestyle, follow a healthy diet, and engage in regular exercise.",
      };
    } else if (categoryBMI === "Overweight") {
      return {
        textInfo:
          "People with a BMI in the range of 25 to 29.9 are considered to be overweight. Overweight can increase the risk of diseases such as diabetes, hypertension, and cardiovascular diseases. The advice for people with overweight is to try to lose weight through a healthy diet, regular exercise, and avoiding the consumption of processed foods and foods high in fat.",
      };
    } else {
      return {
        textInfo:
          "People with a BMI of 30 or above are considered to be obese. Obesity increases the risk of chronic diseases such as diabetes, hypertension, cardiovascular diseases, among others. The advice for people with obesity is to consult with a doctor or nutritionist to determine the cause and receive appropriate treatment, follow a healthy diet, engage in regular exercise, and avoid the consumption of processed foods and foods high in fat.",
      };
    }
  };

  const { textInfo } = getBMIStatus();

  return <Text style={{ marginVertical: 20 }}>{textInfo}</Text>;
};

export default TipsCategory;
