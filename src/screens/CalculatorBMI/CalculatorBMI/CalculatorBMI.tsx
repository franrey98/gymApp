import React from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useBMI } from "../../../hooks/useBMI";
import BMICategoryIndicator from "../CategoryIndicator/BMICategoryIndicator";
import FormBMI from "../FormBMI/FormBMI";
import { styles } from "./CalculatorBMI.styled";
import TipsCategory from "../TipsCategory/TipsCategory";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native";
import { useFav } from "../../../hooks/useFav";

const CalculatorBMI = () => {
  const { resultBMI, categoryBMI, isLoading } = useBMI();
  const { addFavBMI } = useFav();

  const handleSubmit = () => {
    addFavBMI(resultBMI, categoryBMI);
  };

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.textIntroduction}>
          Body Mass Index (BMI) is a measurement used to assess a person's
          nutritional status. It is a mathematical formula that relates a
          person's weight and height, and it is expressed in units of kilograms
          per square meter (kg/m²).
        </Text>

        <FormBMI />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.containerResult}>
            {resultBMI ? <Text>Your Body Mass Index is: {resultBMI}</Text> : ""}
            {isLoading ? (
              <ActivityIndicator size={30} />
            ) : (
              categoryBMI && (
                <View style={styles.containerIndicator}>
                  <BMICategoryIndicator categoryBMI={categoryBMI} />
                  <TipsCategory categoryBMI={categoryBMI} />
                  <TouchableOpacity
                    style={{
                      backgroundColor: "green",
                      padding: 5,
                      borderRadius: 5,
                    }}
                    onPress={handleSubmit}
                  >
                    <Text style={{ color: "white" }}>Save BMI</Text>
                  </TouchableOpacity>
                </View>
              )
            )}
          </View>
        </ScrollView>
      </View>
      <Toast position="top" />
    </KeyboardAwareScrollView>
  );
};

export default CalculatorBMI;
