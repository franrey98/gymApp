import React from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useBMI } from "../../../hooks/useBMI";
import BMICategoryIndicator from "../CategoryIndicator/BMICategoryIndicator";
import FormBMI from "../FormBMI/FormBMI";
import { styles } from "./CalculatorBMI.styled";
import TipsCategory from "../TipsCategory/TipsCategory";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CalculatorBMI = () => {
  const { resultBMI, categoryBMI, isLoading } = useBMI();

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.textIntroduction}>
          El Índice de Masa Corporal es una medida que se utiliza para evaluar
          el estado nutricional de una persona. Es una fórmula matemática que
          relaciona el peso y la altura de una persona, y se expresa en unidades
          de kilogramos por metro cuadrado (kg/m²).
        </Text>

        <FormBMI />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.containerResult}>
            {resultBMI ? (
              <Text>Tu Indice de Masa Corporal es de: {resultBMI}</Text>
            ) : (
              ""
            )}
            {isLoading ? (
              <ActivityIndicator size={30} />
            ) : (
              categoryBMI && (
                <View style={styles.containerIndicator}>
                  <BMICategoryIndicator categoryBMI={categoryBMI} />
                  <TipsCategory categoryBMI={categoryBMI} />
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
