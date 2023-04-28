import React from "react";
import { View, Text } from "react-native";
import { useBMI } from "../../../hooks/useBMI";
import BMICategoryIndicator from "../CategoryIndicator/BMICategoryIndicator";
import FormBMI from "../FormBMI/FormBMI";
import { styles } from "./CalculatorBMI.styled";

const CalculatorBMI = () => {
  const { resultBMI, categoryBMI } = useBMI();
  console.log("bmi desde calculator", categoryBMI);

  return (
    <View style={styles.container}>
      <Text style={styles.textIntroduction}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolore
        neque eaque sapiente tempore iste cumque necessitatibus placeat adipisci
        labore iure temporibus perferendis, reiciendis quos, quaerat dolores ex
        tenetur. Mollitia!
      </Text>

      <FormBMI />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        {resultBMI ? <Text>Tu resultado: {resultBMI}</Text> : ""}
        {categoryBMI && <BMICategoryIndicator categoryBMI={categoryBMI} />}
      </View>
    </View>
  );
};

export default CalculatorBMI;
